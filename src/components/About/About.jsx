import React from "react";
import "./About.scss";
import Main from "../Main/Main";
import Button from "../Button/Button";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Space from "../Space/Space";
import Devider from "../Devider/Devider";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("About");

  return (
    <>
      <Main className="about">
        <section className="sec-1 flex-md-row px-md-0">
          <div className="content">
            <p className="title font">
              {t("about-sec1-title1")} <br />
              {t("about-sec1-title2")}
            </p>
            <Space />
            <Space />
            <p className="desc">
              {t("about-sec1-desc1")}
              <Space />
              {t("about-sec1-desc2")}
              <Space />
              {t("about-sec1-desc3")}
            </p>
            <p className="link font">{t("about-sec1-desc4")}</p>
            <Space />
            <a href="MyResume.pdf">
              <Button type="button" className="mybtn">
                {t("about-sec1-btn")}
                <BsFillCheckCircleFill />
              </Button>
            </a>
          </div>
          <div className="photo">
            <img
              src="assets/images/HomePhoto3.jpg"
              style={{
                width: "400px",
                height: "300px",
              }}
              alt="About"
            />
          </div>
        </section>
        <Space />
        <Space />
        <Devider />
        <section className="sec-2">
          <div className="content">
            <p className="title font">{t("about-sec2-title")}</p>
            <Space />
            <Space />
            <ul className="desc">
              <li>{t("about-sec2-desc1")}</li>
              <li>Figma</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Responsive Design</li>
              <li>LESS/SASS</li>
              <li>Bootstrap5</li>
              <li>JavaScript / ES6</li>
              <li>JQuery</li>
              <li>React JS</li>
            </ul>
          </div>
        </section>
        <Devider />
        <section className="sec-3">
          <div className="content">
            <p className="title font">{t("about-sec3-title")}</p>
            <Space />
            <Space />
            <p className="desc">
              {t("about-sec3-desc1")}
              <Space />
              {t("about-sec3-desc2")}
            </p>
            <p className="link font">
              <Link to="/about/my-story">{t("about-sec3-link")}</Link>
            </p>
          </div>
        </section>
      </Main>
    </>
  );
};

export default About;
