export const themeData = {
  "logo": "/logo-hrs.png",
  "sidebar": "auto",
  "smoothScroll": true,
  "lastUpdated": "Last Updated",
  "nav": [
    {
      "text": " ",
      "link": "/"
    },
    {
      "text": "Dashboard",
      "link": "/Dashboard/"
    },
    {
      "text": "Manutenzione",
      "link": "/maintenance/"
    },
    {
      "text": "Dettagli",
      "link": "/technicaldetails/"
    },
    {
      "text": "Style Guide",
      "link": "/styleguide/"
    },
    {
      "text": "Contatti",
      "link": "/contactus/"
    },
    {
      "text": "Esci",
      "link": "https://dev-zl1ksw63.eu.auth0.com/v2/logout?returnTo=https://docs.energtech.hrslab.com/",
      "target": "_self",
      "rel": false
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
