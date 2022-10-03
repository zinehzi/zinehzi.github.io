import React, { useState, useRef, useEffect } from "react";
import "./Contact.scss";
import Main from "../Main/Main";
import Button from "../Button/Button";
import { BsFillCheckCircleFill } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("Contact");

  // const navigate = useNavigate();
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  var templateParams = {
    name,
    email,
    subject,
    message,
  };

  const Message = () => {
    return (
      <>
        <p className="title" style={{ fontSize: "22px" }}>
          {t("contact-msg-title")}
          <span> {name}</span>
        </p>
        <p className="desc">{t("contact-msg-desc1")}</p>
        <p className="desc">{t("contact-msg-desc2")}</p>
      </>
    );
  };

  const handleSubmit = (e) => {
    if (!e.target.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      formRef.current.classList.add("was-validated");
    } else {
      e.preventDefault();
      setSending(true);
      emailjs
        .send(
          "service_7kjkhmc",
          "template_xse0q1r",
          templateParams,
          "3j0U6neuO90wMdihP"
        )
        .then(
          function () {
            // navigate("message", { state: name });
            toast(<Message />, {
              position: toast.POSITION.TOP_CENTER,
            });
            setSending(false);
            e.target.reset();
          },
          function (error) {
            console.log("FAILED...", error);
            setSending(false);
          }
        );
    }
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <Main className="contact">
      <section className="sec-1 align-items-stretch px-md-0">
        <form
          className="needs-validation"
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="content d-flex flex-column">
            <div className="title font mb-4 align-self-center">
              {t("contact-sec1-title")}
            </div>
            <div className="row mb-3">
              <label htmlFor="inputName" className="col-md-2 col-form-label">
                {t("contact-sec1-row1")}
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  ref={nameRef}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
                <div className="invalid-feedback">
                  {t("contact-sec1-valid1")}
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail" className="col-md-2 col-form-label">
                {t("contact-sec1-row2")}
              </label>
              <div className="col-md-8">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  dir="ltr"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <div className="invalid-feedback">
                  {t("contact-sec1-valid2")}
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputSubject" className="col-md-2 col-form-label">
                {t("contact-sec1-row3")}
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  id="inputSubject"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  required
                />
                <div className="invalid-feedback">
                  {t("contact-sec1-valid3")}
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail" className="col-md-2 col-form-label">
                {t("contact-sec1-row4")}
              </label>
              <div className="col-md-8">
                <textarea
                  type="email"
                  className="form-control"
                  id="inputMessage"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  style={{ height: "114px" }}
                  required
                />
                <div className="invalid-feedback">
                  {t("contact-sec1-valid4")}
                </div>
              </div>
            </div>
            <div className="col-md-10 d-flex justify-content-end">
              <Button type="submit" className="mybtn mt-2">
                {!sending ? t("contact-sec1-btn1") : t("contact-sec1-btn2")}
                <BsFillCheckCircleFill />
              </Button>
              <ToastContainer autoClose={80000} />
            </div>
          </div>
        </form>
      </section>
    </Main>
  );
};

export default Contact;
