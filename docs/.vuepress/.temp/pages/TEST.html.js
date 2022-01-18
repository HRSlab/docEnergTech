export const data = {
  "key": "v-5d4f64ae",
  "path": "/TEST.html",
  "title": "TEST",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1636641254000,
    "contributors": [
      {
        "name": "Steve",
        "email": "44086439+SteveVercellin@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "TEST.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
