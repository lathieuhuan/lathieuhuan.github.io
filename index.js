i18next.init({
  lng: "en",
  resources: {
    en: {
      translation: {
        ABOUT_ME: "about me",
      },
    },
    vi: {
      translation: {
        ABOUT_ME: "About Me",
      },
    },
  },
});

console.log(i18next);

function translate() {
  // document.querySelector(".about-me").innerHTML = i18next.t("ABOUT_ME");
}

document.querySelector("h1").addEventListener("click", () => {
  i18next.changeLanguage("vi");
  translate();
});

translate();
