export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "Energ-Tech",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "stylesheet",
        "href": "https://unpkg.com/@primer/css@^16.0.0/dist/primer.css"
      }
    ],
    [
      "script",
      {
        "src": "https://cdn.auth0.com/js/auth0-spa-js/1.13/auth0-spa-js.production.js"
      }
    ],
    [
      "link",
      {
        "src": "https://cdn.jsdelivr.net/npm/@vue/composition-api@1.4.3"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
