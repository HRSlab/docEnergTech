---
pageClass: dashboard
title: Dashboard
sidebar: false
copyright:
  noCopy: true
  noSelect: true
Optimization:
  spam: 0
  revision:  0
  overhead: 387.6
Perfomance:
  date: 2021-12-12
  loadTime: 2.405
  Region: London (UK)
pageSpeed:
  grade: C
  result: 78%
  previous: B (81%)
ySlow:
  grade: D
  result: 64%
  previous: D  (64%)
Backup:
  latest: 20 Novembre 2021
  next: 2021-12-20
  details: [ "OceanWP v3.1.1", "Versione WP: 5.8.2", "Plugins: 28", "Numero di Posts: 2", "Commenti Approvati: 0" ]
  total:  393.72
  files: 270.04
  db: 123.32
Security:
  latest: 2021-12-12T16:16:19
  Checks: [ "Malware: Clean", "Vulnerabilities: Clean", "WebTrust: Clean" ]
Availability:
  up: 100
  downtimes: 0
  timedown: 0 Ore 0 Min
  month: "Dicembre"
---

<main
    data-color-mode="auto"
    data-light-theme="light"
    data-dark-theme="dark_dimmed"
    class="d-flex flex-justify-between flex-column flex-sm-row  flex-md-items-start">
<section
class="color-bg-subtle my-2 p-md-4 p-sm-2 border rounded col-sm-12 mx-1 col-md-8 flex-1">
<PerfomanceHeader />
<div class="d-flex flex-wrap flex-justify-around flex-sm-items-center">
<pageSpeed /> <ySlow />
</div>

<ChartBox>

```chart
{
"type": "line",
"width": "400",
"height": "400",
"data": {
"labels": ["1 Dic", "2 Dic", "3 Dic", "4 Dic", "5 Dic", "6 Dic", "7 Dic", "8 Dic", "9 Dic", "10 Dic", "11 Dic", "12 Dic", "13 Dic", "14 Dic", "15 Dic", "16 Dic", "17 Dic", "18 Dic", "19 Dic", "20 Dic", "21 Dic", "22 Dic", "23 Dic", "24 Dic", "25 Dic", "26 Dic",  "27 Dic", "28 Dic", "29 Dic", "30 Dic", "31 Dic" ],
"datasets": [
{
"label": "Tempo di Caricamento (s)",
"data": [ 10, 10, 7, 4, 4, 9, 9, 7, 8.4, 8  ],
"backgroundColor": "rgba(186, 218, 85, 0.4)",
"borderColor": "#bada55",
"borderWidth": 1
},
{
"label": "Dimensione Pagina (MB)",
"data": [ 4.03, 4.00, 3.54, 3.79, 3.54, 4, 4.04, 4, 4, 3.54

        ],
"backgroundColor": "rgba(117,85,218, 0.4)",
"borderColor": "#7555da",
"borderWidth": 1
}
]
},
"options": {
"scales": {
"yAxes": [{
"type": "linear",
"display": true,
"ticks": {
  "beginAtZero": false,
  "max": 11,
  "min": 0
}
}]
}
}
}
```
</ChartBox>

<div class="border color-bg-subtle my-4" >
  <p class="f5 pl-6 pt-2">Video Test <span class="text-small Label Label--inline">2021-11-20</span> </p>
  <div class="d-flex flex-wrap flex-justify-around">
      <video width="320" height="240" controls autoplay>
          <source src="/browsertime-results/energ-tech.it/2021-11-20T132942+0000/pages/energ-tech_it/data/video/1.mp4" type="video/mp4">
      Your browser does not support the video tag.
      </video>
          <video  width="320" height="240" controls autoplay>
          <source src="/browsertime-results/energ-tech.it/2021-11-20T132942+0000/pages/energ-tech_it/data/video/1.mp4" type="video/mp4">
      Your browser does not support the video tag.
      </video>
          <video  width="320" height="240" controls autoplay>
          <source src="/browsertime-results/energ-tech.it/2021-11-20T132942+0000/pages/energ-tech_it/data/video/1.mp4" type="video/mp4">
      Your browser does not support the video tag.
      </video>
  </div>
</div>

<OptimizationWidget />

<div class="container d-flex flex-column flex-sm-row">
  <DowntimeWidget class="col-sm-12 col-md-6 mx-auto" />

  <AxiosWp id="installed_plugins"  class="col-sm-12 col-md-6 color-bg-default rounded mt-3 color-bg-subtle">

  </AxiosWp>
</div>

</section>


<section class="col-sm-12 col-md-3 mx-2">


<BackupCard />
<SecurityCard />

<ScanBot />

<HttpsStatus />

<UpdatesCard>

<ThemesTimeline />
<PluginsTimeline />



</UpdatesCard>

</section>


</main>

<style>





</style>
