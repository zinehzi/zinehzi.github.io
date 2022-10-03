import React from "react";
import Main from "../Main/Main";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ContactMessage = () => {
  const { t } = useTranslation("Contact");

  const location = useLocation();
  return (
    <Main className="message">
      <section className="sec-1 justify-content-center">
        <div className="content d-flex flex-column align-items-center mt-3 gap-3 alert alert-success">
          <p className="title" style={{ fontSize: "22px" }}>
            <span>{location.state} </span>
            {t("contact-msg-title")}
          </p>
          <p className="desc">{t("contact-msg-desc1")}</p>
          <p className="desc">{t("contact-msg-desc2")}</p>
        </div>
      </section>
    </Main>
  );
};

export default ContactMessage;
