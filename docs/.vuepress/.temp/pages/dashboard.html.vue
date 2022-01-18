<template><main
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
<Chart id="chart_1a96284c" data-code="{
&quot;type&quot;: &quot;line&quot;,
&quot;width&quot;: &quot;400&quot;,
&quot;height&quot;: &quot;400&quot;,
&quot;data&quot;: {
&quot;labels&quot;: [&quot;1&quot;, &quot;2&quot;, &quot;3&quot;, &quot;4&quot;, &quot;5&quot;, &quot;6&quot;, &quot;7&quot;,
            &quot;8&quot;, &quot;9&quot;, &quot;10&quot;, &quot;11&quot;, &quot;12&quot;, &quot;13&quot;,
            &quot;14&quot;, &quot;15&quot;, &quot;16&quot;, &quot;17&quot;, &quot;18&quot;, &quot;19&quot;,
            &quot;20&quot;, &quot;21&quot;, &quot;22&quot;, &quot;23c&quot;, &quot;24&quot;, &quot;25&quot;,
            &quot;26&quot;,  &quot;27&quot;, &quot;28&quot;, &quot;29&quot;, &quot;30&quot;, &quot;31&quot;
            ],
&quot;datasets&quot;: [
{
&quot;label&quot;: &quot;Tempo di Caricamento (s)&quot;,
&quot;data&quot;: [ 4, 6, 4, 7, 5, 5, 7,
          8, 4

          ],
&quot;backgroundColor&quot;: &quot;rgba(186, 218, 85, 0.4)&quot;,
&quot;borderColor&quot;: &quot;#bada55&quot;,
&quot;borderWidth&quot;: 1
},
{
&quot;label&quot;: &quot;Dimensione Pagina (MB)&quot;,
&quot;data&quot;: [ 3.48, 3.48, 3.49, 3.48, 3.48, 3.50, 3.48,
          3.49, 3.49


        ],
&quot;backgroundColor&quot;: &quot;rgba(117,85,218, 0.4)&quot;,
&quot;borderColor&quot;: &quot;#7555da&quot;,
&quot;borderWidth&quot;: 1
}
]
},
&quot;options&quot;: {
&quot;scales&quot;: {
&quot;yAxes&quot;: [{
&quot;type&quot;: &quot;linear&quot;,
&quot;display&quot;: true,
&quot;ticks&quot;: {
  &quot;beginAtZero&quot;: false,
  &quot;max&quot;: 20,
  &quot;min&quot;: 0
}
}]
}
}
}"></Chart></ChartBox>
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
</template>

<style>





</style>
