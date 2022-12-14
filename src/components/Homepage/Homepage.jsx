import React from "react";
import "./Homepage.scss";
import Main from "../Main/Main";
import Button from "../Button/Button";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Space from "../Space/Space";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const { t } = useTranslation("Home");

  return (
    <>
      <Main className="home">
        <section className="sec-1 flex-md-row px-md-0">
          <div className="content">
            <p className="title font">{t("home-sec1-title")}</p>
            <Space />
            <Space />
            <p className="desc">
              {t("home-sec1-desc1")}{" "}
              <span className="myspan font">{t("home-sec1-span1")} </span>
              {t("home-sec1-desc2")}
              <span className="myspan font"> {t("home-sec1-span2")}</span>.
              <Space />
              {t("home-sec1-desc3")}.
              <Space />
              {t("home-sec1-desc4")}
            </p>
            <Space />
            <a href="MyResume.pdf">
              <Button type="button" className="mybtn">
                {t("home-sec1-btn")}
                <BsFillCheckCircleFill />
              </Button>
            </a>
          </div>
          <div className="photo">
            <img
              src="assets/images/HomePhoto.jpg"
              className="img-thumbnail"
              style={{
                width: "800px",
              }}
              alt="HomePage"
            />
          </div>
        </section>
      </Main>
    </>
  );
};

export default Homepage;
