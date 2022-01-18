import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-2edbd9bc","/GLOSSARY.html",{"title":"Glossary"},["/GLOSSARY","/GLOSSARY.md"]],
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-19acbb9a","/Specs.html",{"title":"Website Project Specification"},["/Specs","/Specs.md"]],
  ["v-5d4f64ae","/TEST.html",{"title":"TEST"},["/TEST","/TEST.md"]],
  ["v-56094fcc","/bugform.html",{"title":"Segnalazione Errori"},["/bugform","/bugform.md"]],
  ["v-b092254a","/callback.html",{"title":""},["/callback","/callback.md"]],
  ["v-50fd656f","/changes.html",{"title":"changes"},["/changes","/changes.md"]],
  ["v-a2d92fd8","/contactus.html",{"title":"contacts"},["/contactus","/contactus.md"]],
  ["v-332574ae","/contract.html",{"title":"Contratto"},["/contract","/contract.md"]],
  ["v-2a839dfe","/dashboard.html",{"title":"Dashboard"},["/dashboard","/dashboard.md"]],
  ["v-a95f2684","/gantt.html",{"title":"Gantt"},["/gantt","/gantt.md"]],
  ["v-8daa1a0e","/",{"title":""},["/index.html","/index.md"]],
  ["v-e653bac2","/maintenance.html",{"title":"Programma di Manutenzione"},["/maintenance","/maintenance.md"]],
  ["v-08eb506c","/privacy.html",{"title":"Termini e Condizioni"},["/privacy","/privacy.md"]],
  ["v-40b02ef3","/projectsummary.html",{"title":"Overview"},["/projectsummary","/projectsummary.md"]],
  ["v-443546ce","/proposal.html",{"title":"Proposta Commerciale"},["/proposal","/proposal.md"]],
  ["v-0fc39a98","/scrum.html",{"title":"SCRUM GUIDE"},["/scrum","/scrum.md"]],
  ["v-49ffb52f","/sonar.html",{"title":"Overview"},["/sonar","/sonar.md"]],
  ["v-488e93b5","/styleguide.html",{"title":"Guida al design"},["/styleguide","/styleguide.md"]],
  ["v-8fb3534a","/technicaldetails.html",{"title":"Dettagli di Progetto"},["/technicaldetails","/technicaldetails.md"]],
  ["v-15204265","/termandcond.html",{"title":"Terms and Conditions"},["/termandcond","/termandcond.md"]],
  ["v-13821102","/terminiecondizioni.html",{"title":"Termini e Condizioni"},["/terminiecondizioni","/terminiecondizioni.md"]],
  ["v-0787ceda","/timelinePlugins.html",{"title":"Overview"},["/timelinePlugins","/timelinePlugins.md"]],
  ["v-7f9919e4","/usecases.html",{"title":"Casi d' Uso"},["/usecases","/usecases.md"]],
  ["v-45094e48","/userstory.html",{"title":"user story template"},["/userstory","/userstory.md"]],
  ["v-7479e9ce","/Developers/GAEConfig.html",{"title":"Google App Engine Server Configs"},["/Developers/GAEConfig","/Developers/GAEConfig.md"]],
  ["v-694ddd91","/Developers/IISConfig.html",{"title":"IIS 6 NOTICE"},["/Developers/IISConfig","/Developers/IISConfig.md"]],
  ["v-384afbaa","/Developers/NginxConfig.html",{"title":"Nginx Server Configs"},["/Developers/NginxConfig","/Developers/NginxConfig.md"]],
  ["v-210793df","/Developers/NodejsConfig.html",{"title":"Node.js Server Configuration"},["/Developers/NodejsConfig","/Developers/NodejsConfig.md"]],
  ["v-ee990aa6","/Developers/",{"title":"Prestazioni"},["/Developers/index.html","/Developers/README.md"]],
  ["v-35abfcc8","/Developers/apacheConfig.html",{"title":"Apache Server Configs"},["/Developers/apacheConfig","/Developers/apacheConfig.md"]],
  ["v-a95ff33a","/Developers/css.html",{"title":"The CSS"},["/Developers/css","/Developers/css.md"]],
  ["v-35188401","/Developers/html.html",{"title":"The HTML"},["/Developers/html","/Developers/html.md"]],
  ["v-08c5b1e3","/Developers/js.html",{"title":"The JavaScript"},["/Developers/js","/Developers/js.md"]],
  ["v-0321a49c","/Developers/maincss.html",{"title":"main.css"},["/Developers/maincss","/Developers/maincss.md"]],
  ["v-39470a14","/Developers/mxtools.html",{"title":"Mail Server Analytics"},["/Developers/mxtools","/Developers/mxtools.md"]],
  ["v-956824c0","/Developers/phpinfo.html",{"title":""},["/Developers/phpinfo","/Developers/phpinfo.md"]],
  ["v-e5b248f6","/Developers/features/",{"title":"Funzionalità"},["/Developers/features/index.html","/Developers/features/README.md"]],
  ["v-62e0afa3","/Developers/features/feature-template.html",{"title":"Feature Template"},["/Developers/features/feature-template","/Developers/features/feature-template.md"]],
  ["v-077d334e","/Developers/features/feature1.html",{"title":"[Titolo della Funzionalità ]"},["/Developers/features/feature1","/Developers/features/feature1.md"]],
  ["v-00a9d0d2","/Developers/features/feature3.html",{"title":"Funzionalità 3"},["/Developers/features/feature3","/Developers/features/feature3.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
