import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

const apiKey = "pEbTLXbjKT5_RnK4kjR7Kg";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

const fonts = document.getElementsByClassName("font");

i18next.on("languageChanged", function (lng) {
  if (lng === "fa") {
    Array.from(fonts, (e) => (e.style.fontFamily = "Shabnam"));
  } else {
    Array.from(fonts, (e) => (e.style.fontFamily = ""));
  }
});

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend((language, namespace, callback) => {
      import(`../public/locales/${language}/${namespace}.json`)
        .then((resources) => {
          callback(null, resources);
        })
        .catch((error) => {
          callback(error, null);
        });
    })
  )
  .init({
    fallbackLng: "en",
    lng: "en",

    ns: ["Home", "About", "Layout", "Portfolio", "Contact"],
    defaultNS: "Home",

    supportedLngs: ["en", "fa"],

    backend: {
      loadPath: loadPath,
    },
  });
