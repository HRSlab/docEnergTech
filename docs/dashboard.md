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
  overhead: 1.22
Perfomance:
  date: 2021-11-20
  loadTime: 4.11
  Region: London (UK)
pageSpeed:
  grade: D
  result: 68%
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
  latest: 2021-11-20T14:23:57
  Checks: [ "Malware: Clean", "Vulnerabilities: Clean", "WebTrust: Clean" ]
Availability:
  up: 100
  downtimes: 0
  timedown: 0 Ore 0 Min
  month: "Novembre"
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
"labels": ["1 Nov", "2 Nov", "3 Nov", "4 Nov", "5 Nov", "6 Nov", "7 Nov", "8 Nov", "9 Nov", "10 Nov", "11 Nov", "12 Nov", "13 Nov", "14 Nov", "15 Nov", "16 Nov", "17 Nov", "18 Nov", "19 Nov", "20 Nov", "21 Nov", "22 Nov", "23 Nov", "24 Nov", "25 Nov", "26 Nov",  "27 Nov", "28 Nov", "29 Nov", "30 Nov", "31 Nov" ],
"datasets": [
{
"label": "Tempo di Caricamento (s)",
"data": [4, 4, 4, 4.1, 4.3, 4, 4.5, 4.3, 4.2, 4.5, 4, 2.8, 3.6, 3.7, 3.5, 3.5, 3.7, 3.6, 9.5, 4.0, 4.1, 4, 4.3, 4.3, 4.5, 2.8, 3.1, 9.5, 9.4, 9.6, 9.6 ],
"backgroundColor": "rgba(186, 218, 85, 0.4)",
"borderColor": "#bada55",
"borderWidth": 1
},
{
"label": "Dimensione Pagina (MB)",
"data": [ 3.56, 3.54, 3.54, 3.55, 3.54, 3.54, 3.54, 3.54, 3.55, 3.55,
          3.56, 3.55, 3.82, 3.54, 3.67, 3.58, 3.58, 3.72, 4.04, 3.54,
          3.54, 3.54, 3.56, 3.68, 3.86, 3.54, 3.56, 4.04, 4, 4.04, 4.04
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
  "max": 10,
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
