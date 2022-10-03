import React from "react";
import "./Portfolio.scss";
import Main from "../Main/Main";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation("Portfolio");

  return (
    <>
      <Main className="portfolio">
        <section className="sec-1 align-items-stretch px-md-0">
          <p className="title font">
            {t("port-sec1-title1")}
            <br /> {t("port-sec1-title2")}
          </p>
          <ol className="desc d-flex flex-column gap-5">
            <li className="port">
              <div>
                <span className="font">{t("port-sec1-desc1")}</span>
                <a href="#" className="font d-block ps-4 pt-2">
                  comment-app.vercel
                </a>
              </div>
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  backgroundColor: "#f8f9fa",
                }}
              ></div>
            </li>
            <li className="port flex-row-reverse">
              <div>
                <span className="font">{t("port-sec1-desc2")}</span>
                <a href="#" className="font d-block pt-2">
                  todo-app.vercel
                </a>
              </div>
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  backgroundColor: "#f8f9fa",
                }}
              ></div>
            </li>
            <li className="port">
              <div>
                <span className="font">{t("port-sec1-desc3")}</span>
                <a href="#" className="font d-block ps-4 pt-2">
                  music-player.vercel
                </a>
              </div>
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  backgroundColor: "#f8f9fa",
                }}
              ></div>
            </li>
          </ol>
        </section>
      </Main>
    </>
  );
};

export default Portfolio;
