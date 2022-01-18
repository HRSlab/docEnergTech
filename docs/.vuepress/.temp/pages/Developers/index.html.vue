<template><div class="border mt-8 pt-3 text-center rounded">
<p><img src="https://img.shields.io/badge/dynamic/json?color=informational&amp;label=Ore di Sviluppo&amp;query=%24.data[5].grand_total.text&amp;url=https%3A%2F%2Fwakatime.com%2Fshare%2F%40HRSlab%2Fbf231007-0255-4824-9490-b836eca49a51.json" alt="coding"> <img src="https://img.shields.io/netlify/0190582a-9df0-4f61-8b8d-0118b7eb39c6?label=Build&amp;logo= " alt="Netlify">
<img src="https://dev.azure.com/HRS2020/80d0713f-22ce-40eb-9ca6-8d1986bfce8a/07bd2436-5f5f-48ea-aa0b-11e23b11ea38/_apis/work/boardbadge/2b0507a7-e94a-4389-b141-5e66f56b0ca3?columnOptions=1" alt="Board Status"></p>
</div>
<div class="clearfix text-white my-5">
  <div class="col-6 col-md-3 float-left bg-gray-dark border rounded-3 border-4 border-white p-4  mb-1">
    <h1 class="text-center my-3">{{ $frontmatter.performance }}</h1>
    <span class="Progress">
  <span class="Progress-item color-bg-danger-emphasis" style="width:19%;"></span>
</span>
<p class="f5 text-center mt-2">PRESTAZIONI</p>
  </div>
  <div class="col-6 col-md-3  float-left bg-gray-dark border rounded-3 border-4 border-white p-4  mb-1">
    <h1 class="text-center my-3">{{ $frontmatter.accessibility }}</h1>
    <span class="Progress">
  <span class="Progress-item color-bg-attention-inverse" style="width: 83%;"></span>
</span>
<p class="f5 text-center mt-2">ACCESSIBILITÀ</p>
  </div>
  <div class="col-6 col-sm-3  float-left bg-gray-dark border rounded-3 border-4 border-white p-4 mb-1">
      <h1 class="text-center my-3">{{ $frontmatter.bestpractice }}</h1>
    <span class="Progress">
  <span class="Progress-item  color-bg-success-emphasis" style="width: 93%;"></span>
</span>
<p class="f5 text-center mt-2">BEST PRACTICE</p>
  </div>
    <div class="col-6 col-md-3 float-left bg-gray-dark border rounded-3 border-4 border-white p-4 mb-1">
      <h1 class="text-center my-3">{{ $frontmatter.SEO }}</h1>
    <span class="Progress">
  <span class="Progress-item color-bg-attention-inverse" style="width: 66%;"></span>
</span>
<p class="f5 text-center mt-2">SEO</p>
  </div>
</div>
<h3 id="speed-index" tabindex="-1"><a class="header-anchor" href="#speed-index" aria-hidden="true">#</a> Speed Index</h3>
<p><em><code>in secondi</code></em></p>
<Chart id="chart_382ee147" data-code="{
&quot;type&quot;: &quot;line&quot;,
&quot;data&quot;: {
&quot;labels&quot;: [&quot;Apr 24&quot;, &quot;Apr 25&quot;, &quot;Apr 26&quot;, &quot;Apr 27&quot;, &quot;Apr 28&quot;, &quot;Apr 29&quot;, &quot;Apr 30&quot;],
 &quot;datasets&quot;: [{
      &quot;label&quot;: &quot;reinnovame&quot;,
      &quot;data&quot;: [10.6, 14.2, 11.9, 14.4, 11.7, 6.1, 6.5],
      &quot;backgroundColor&quot;: &quot;rgba(186, 218, 85, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#bada55&quot;,
      &quot;borderWidth&quot;: 1
    },
    {
      &quot;label&quot;: &quot;test&quot;,
      &quot;data&quot;: [6.3, 4.1, 9.5, 8.7, 9.3, 9.5, 9.6],
       &quot;backgroundColor&quot;: &quot;rgba(117,85,218, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#7555da&quot;,
      &quot;borderWidth&quot;: 1
    }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;yAxes&quot;: [{
        &quot;ticks&quot;: {
          &quot;beginAtZero&quot;: true
        }
      }]
    }
  }
}"></Chart><h3 id="first-byte" tabindex="-1"><a class="header-anchor" href="#first-byte" aria-hidden="true">#</a> First Byte</h3>
<p><em><code>in secondi</code></em></p>
<Chart id="chart_382ee14e" data-code="{
&quot;type&quot;: &quot;line&quot;,
&quot;data&quot;: {
&quot;labels&quot;: [&quot;Apr 24&quot;, &quot;Apr 25&quot;, &quot;Apr 26&quot;, &quot;Apr 27&quot;, &quot;Apr 28&quot;, &quot;Apr 29&quot;, &quot;Apr 30&quot;],
 &quot;datasets&quot;: [{
      &quot;label&quot;: &quot;reinnovame&quot;,
      &quot;data&quot;: [1.5, 2.9, 1.9, 1.86, 0.743, 0.714, 0.649],
      &quot;backgroundColor&quot;: &quot;rgba(186, 218, 85, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#bada55&quot;,
      &quot;borderWidth&quot;: 1
    },
    {
      &quot;label&quot;: &quot;test&quot;,
      &quot;data&quot;: [0.120, 0.151, 0.161, 0.233, 0.166, 0.157, 0.169],
       &quot;backgroundColor&quot;: &quot;rgba(117,85,218, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#7555da&quot;,
      &quot;borderWidth&quot;: 1
    }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;yAxes&quot;: [{
        &quot;ticks&quot;: {
          &quot;beginAtZero&quot;: true
        }
      }]
    }
  }
}"></Chart><h2 id="core-web-vitals" tabindex="-1"><a class="header-anchor" href="#core-web-vitals" aria-hidden="true">#</a> Core Web Vitals</h2>
<p>Questi indicatori fanno parte dei fattori di Ranking di Google.
<a href="https://developers.google.com/search/blog/2020/05/evaluating-page-experience" target="_blank" rel="noopener noreferrer">Vai all' Articolo Google<ExternalLinkIcon/></a></p>
<h3 id="largest-contentful-paint-lcp" tabindex="-1"><a class="header-anchor" href="#largest-contentful-paint-lcp" aria-hidden="true">#</a> Largest Contentful Paint (LCP)</h3>
<p><span class="Label">Benchmark: &lt; 2.5 secondi</span></p>
<p>Indica il tempo di rendering dell’elemento più pesante (Largest) all'interno della schermata.
<a href="https://web.dev/lcp/" target="_blank" rel="noopener noreferrer">dettagli<ExternalLinkIcon/></a></p>
<Chart id="chart_382ee188" data-code="{
&quot;type&quot;: &quot;line&quot;,
&quot;data&quot;: {
&quot;labels&quot;: [&quot;Apr 24&quot;, &quot;Apr 25&quot;, &quot;Apr 26&quot;, &quot;Apr 27&quot;, &quot;Apr 28&quot;, &quot;Apr 29&quot;, &quot;Apr 30&quot;],
 &quot;datasets&quot;: [{
      &quot;label&quot;: &quot;reinnovame&quot;,
      &quot;data&quot;: [6, 9.3, 6.7, 8.5, 6.6, 6.6, 6.8],
      &quot;backgroundColor&quot;: &quot;rgba(186, 218, 85, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#bada55&quot;,
      &quot;borderWidth&quot;: 1
    },
    {
      &quot;label&quot;: &quot;test&quot;,
      &quot;data&quot;: [4.6, 4.1, 4.6, 4.0, 3.4, 3.6, 3.6],
       &quot;backgroundColor&quot;: &quot;rgba(117,85,218, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#7555da&quot;,
      &quot;borderWidth&quot;: 1
    }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;yAxes&quot;: [{
        &quot;ticks&quot;: {
          &quot;beginAtZero&quot;: true
        }
      }]
    }
  }
}"></Chart><h3 id="first-imput-delay-fid" tabindex="-1"><a class="header-anchor" href="#first-imput-delay-fid" aria-hidden="true">#</a> First Imput Delay (FID)</h3>
<p><span class="Label">Benchmark: &lt; 0.1 secondi</span></p>
<p>Indica il tempo di reazione del browser agli input dell’utente
<a href="https://web.dev/fid/" target="_blank" rel="noopener noreferrer">dettagli<ExternalLinkIcon/></a></p>
<Chart id="chart_382ee1a7" data-code="{
&quot;type&quot;: &quot;line&quot;,
&quot;data&quot;: {
&quot;labels&quot;: [&quot;Apr 24&quot;, &quot;Apr 25&quot;, &quot;Apr 26&quot;, &quot;Apr 27&quot;, &quot;Apr 28&quot;, &quot;Apr 29&quot;, &quot;Apr 30&quot;],
 &quot;datasets&quot;: [{
      &quot;label&quot;: &quot;reinnovame&quot;,
      &quot;data&quot;: [1.2, 1.2, 0.920, 1.5, 1, 0.931, 1.2],
      &quot;backgroundColor&quot;: &quot;rgba(186, 218, 85, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#bada55&quot;,
      &quot;borderWidth&quot;: 1
    },
    {
      &quot;label&quot;: &quot;test&quot;,
      &quot;data&quot;: [1, 0.912, 1.3, 0.814, 0.936, 1.1, 0.796 ],
       &quot;backgroundColor&quot;: &quot;rgba(117,85,218, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#7555da&quot;,
      &quot;borderWidth&quot;: 1
    }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;yAxes&quot;: [{
        &quot;ticks&quot;: {
          &quot;beginAtZero&quot;: true
        }
      }]
    }
  }
}"></Chart><h3 id="cumulative-layout-shift-cls" tabindex="-1"><a class="header-anchor" href="#cumulative-layout-shift-cls" aria-hidden="true">#</a> Cumulative Layout Shift (CLS)</h3>
<p><span class="Label">Benchmark: &lt; 0.1</span></p>
<p>Misura i cambi di layout durante l’intera durata della visita della pagina.
<a href="https://web.dev/cls/" target="_blank" rel="noopener noreferrer">dettagli<ExternalLinkIcon/></a></p>
<Chart id="chart_382ee1c6" data-code="{
&quot;type&quot;: &quot;line&quot;,
&quot;data&quot;: {
&quot;labels&quot;: [&quot;Apr 24&quot;, &quot;Apr 25&quot;, &quot;Apr 26&quot;, &quot;Apr 27&quot;, &quot;Apr 28&quot;, &quot;Apr 29&quot;, &quot;Apr 30&quot;],
 &quot;datasets&quot;: [{
      &quot;label&quot;: &quot;reinnovame&quot;,
      &quot;data&quot;: [0.0595, 0.0586, 0.0595, 0.0586, 0.0595, 0.0585, 0.0595],
      &quot;backgroundColor&quot;: &quot;rgba(186, 218, 85, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#bada55&quot;,
      &quot;borderWidth&quot;: 1
    },
    {
      &quot;label&quot;: &quot;test&quot;,
      &quot;data&quot;: [0.0580, 0, 0.0586, 0.0585, 0, 0, 0.0595 ],
       &quot;backgroundColor&quot;: &quot;rgba(117,85,218, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#7555da&quot;,
      &quot;borderWidth&quot;: 1
    }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;yAxes&quot;: [{
        &quot;ticks&quot;: {
          &quot;beginAtZero&quot;: true
        }
      }]
    }
  }
}"></Chart><h2 id="test-comparazione-server" tabindex="-1"><a class="header-anchor" href="#test-comparazione-server" aria-hidden="true">#</a> Test Comparazione Server</h2>
<Chart id="chart_382ee1ca" data-code="{
&quot;type&quot;: &quot;bar&quot;,
&quot;data&quot;: {
&quot;labels&quot;: [ &quot;TTFB ms&quot;, &quot;Connect ms&quot;, &quot;Backend ms&quot; ],
 &quot;datasets&quot;: [{
      &quot;label&quot;: &quot;Pantheon&quot;,
      &quot;data&quot;: [ 239, 111, 128 ],
      &quot;backgroundColor&quot;: &quot;rgba(117, 85, 218, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#7555DA&quot;,
      &quot;borderWidth&quot;: 1
    },
    {
      &quot;label&quot;: &quot;Register&quot;,
      &quot;data&quot;: [256, 107, 149 ],
       &quot;backgroundColor&quot;: &quot;rgba(218, 117, 85, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#da7555&quot;,
      &quot;borderWidth&quot;: 1
    },
        {
      &quot;label&quot;: &quot;Vultr&quot;,
      &quot;data&quot;: [152, 116, 36 ],
       &quot;backgroundColor&quot;: &quot;rgba(85, 218, 117, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#55da75&quot;,
      &quot;borderWidth&quot;: 1
    }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;yAxes&quot;: [{
        &quot;ticks&quot;: {
          &quot;beginAtZero&quot;: true
        }
      }]
    }
  }
}"></Chart><table>
<thead>
<tr>
<th>Pantheon</th>
<th>Register</th>
<th>Vultur</th>
</tr>
</thead>
<tbody>
<tr>
<td>20 GB SSD DISK</td>
<td>50 GB SSD DISK</td>
<td>64 GB SSD DISK</td>
</tr>
<tr>
<td>1 CPU</td>
<td>1 CPU</td>
<td>1 CPU</td>
</tr>
<tr>
<td>2 GB RAM</td>
<td>1 GB RAM</td>
<td>2 GB RAM</td>
</tr>
<tr>
<td>2 TB Transnfer</td>
<td>N/A</td>
<td>2 TB Transnfer</td>
</tr>
</tbody>
</table>
<ul class="Box text-small mt-6">
<li class="Box-row">Report generated:<span class="IssueLabel">Fri, May 7, 2021 11:28 AM +0200</span></li>
<li class="Box-row">Test Server Location: London, UK</li>
<li class="Box-row">Using: Chrome (Desktop) 86.0.4240.193, Lighthouse 6.3.0</li>
<li class="Box-row">Connection: Broadband Fast (20/5 Mbps, 25ms)</li>
</ul>
<h2 id="utilizzo-file" tabindex="-1"><a class="header-anchor" href="#utilizzo-file" aria-hidden="true">#</a> Utilizzo File</h2>
<p>Current application web files usage is <code>377MB</code> (97.16%)</p>
<table>
<thead>
<tr>
<th>File</th>
<th style="text-align:center">MB</th>
<th style="text-align:center">%</th>
</tr>
</thead>
<tbody>
<tr>
<td>wp-content</td>
<td style="text-align:center">328</td>
<td style="text-align:center">84.54%</td>
</tr>
<tr>
<td>wp-includes</td>
<td style="text-align:center">38</td>
<td style="text-align:center">9.79%</td>
</tr>
<tr>
<td>wp-admin</td>
<td style="text-align:center">10</td>
<td style="text-align:center">2.58%</td>
</tr>
</tbody>
</table>
<h2 id="utilizzo-database" tabindex="-1"><a class="header-anchor" href="#utilizzo-database" aria-hidden="true">#</a> Utilizzo Database</h2>
<p>Current application database usage is <code>11MB</code> (2.84%)</p>
<table>
<thead>
<tr>
<th>File</th>
<th style="text-align:center">MB</th>
<th style="text-align:center">%</th>
</tr>
</thead>
<tbody>
<tr>
<td>wp_options</td>
<td style="text-align:center">2</td>
<td style="text-align:center">0.52%</td>
</tr>
<tr>
<td>reinn0vam3_wfknownfilelist</td>
<td style="text-align:center">1</td>
<td style="text-align:center">0.26%</td>
</tr>
<tr>
<td>reinn0vam3_wfconfig</td>
<td style="text-align:center">1</td>
<td style="text-align:center">0.26%</td>
</tr>
<tr>
<td>reinn0vam3_postmeta</td>
<td style="text-align:center">1</td>
<td style="text-align:center">0.26%</td>
</tr>
<tr>
<td>reinn0vam3_posts</td>
<td style="text-align:center">1</td>
<td style="text-align:center">0.26%</td>
</tr>
<tr>
<td>reinn0vam3_wp_quiz_play_data</td>
<td style="text-align:center">0.713</td>
<td style="text-align:center">0.18%</td>
</tr>
<tr>
<td>reinn0vam3_options</td>
<td style="text-align:center">0.507</td>
<td style="text-align:center">0.13%</td>
</tr>
<tr>
<td>reinn0vam3_ewwwio_images</td>
<td style="text-align:center">0.477</td>
<td style="text-align:center">0.12%</td>
</tr>
<tr>
<td>reinn0vam3_smush_dir_images</td>
<td style="text-align:center">0.3</td>
<td style="text-align:center">0.08%</td>
</tr>
<tr>
<td>reinn0vam3_yoast_indexable</td>
<td style="text-align:center">0.264</td>
<td style="text-align:center">0.07%</td>
</tr>
</tbody>
</table>
<span class="text-small" style="color:#98DB35;">
<pre>Current total application usage is 388MB</pre>
</span>
<h2 id="benchmark-server" tabindex="-1"><a class="header-anchor" href="#benchmark-server" aria-hidden="true">#</a> Benchmark Server</h2>
<Chart id="chart_64a5619e" data-code="{
&quot;type&quot;: &quot;bar&quot;,
&quot;data&quot;: {
&quot;labels&quot;: [&quot;Math(CPU)&quot;, &quot;String(CPU)&quot;, &quot;Loops(CPU)&quot;, &quot;Conditionals(CPU)&quot;, &quot;Mysql(Databese)&quot;, &quot;Server Total&quot;, &quot;WordPress Performance&quot;],
 &quot;datasets&quot;: [{
      &quot;label&quot;: &quot;Your Server&quot;,
      &quot;data&quot;: [2.526, 0.270, 0.008, 0.019, 9.696, 12.519, 2.455],
      &quot;backgroundColor&quot;: &quot;rgba(186, 218, 85, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#bada55&quot;,
      &quot;borderWidth&quot;: 1
    },
    {
      &quot;label&quot;: &quot;Industry Average&quot;,
      &quot;data&quot;: [0.641, 0.637, 0.009, 0.020, 8.845, 10.191, 3.978],
       &quot;backgroundColor&quot;: &quot;rgba(117,85,218, 0.2)&quot;,
      &quot;borderColor&quot;: &quot;#7555da&quot;,
      &quot;borderWidth&quot;: 1
    }
    ]
  },
  &quot;options&quot;: {
    &quot;scales&quot;: {
      &quot;yAxes&quot;: [{
        &quot;ticks&quot;: {
          &quot;beginAtZero&quot;: false
        }
      }]
    }
  }
}"></Chart><h2 id="carico-server-e-altri-errori" tabindex="-1"><a class="header-anchor" href="#carico-server-e-altri-errori" aria-hidden="true">#</a> Carico Server e Altri Errori</h2>
<div class="border my-4 pt-3 px-4 rounded">
<div class="text-center">
<p><img src="https://img.shields.io/sonar/blocker_violations/SteveVercellin_salient-theme?color=F8333C&amp;server=https%3A%2F%2Fsonarcloud.io" alt="Sonar Violations (long format)"> <img src="https://img.shields.io/sonar/critical_violations/SteveVercellin_salient-theme?color=F95738&amp;server=https%3A%2F%2Fsonarcloud.io" alt="Sonar Violations (long format)"> <img src="https://img.shields.io/sonar/major_violations/SteveVercellin_salient-theme?color=FFFD82&amp;server=https%3A%2F%2Fsonarcloud.io" alt="Sonar Violations (long format)"> <img src="https://img.shields.io/sonar/minor_violations/SteveVercellin_salient-theme?color=ADE25D&amp;server=https%3A%2F%2Fsonarcloud.io" alt="Sonar Violations (long format)"></p>
</div>
<nav class="menu text-small" aria-labelledby="menu-heading">
  <span class="menu-heading" id="menu-heading">Remediation Effort</span>
  <a class="menu-item" href="../sonar.html#reliability">Reliability Remediation Effort
<span class="diffstat float-right"> 16d
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
</span>
</a>
  <a class="menu-item" href="../sonar.html#security">Security Remediation Effort
  <span class="diffstat float-right"> 2d 2h
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-deleted"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
</span></a>
  <a class="menu-item" href="#url">Maintainability  Remediation Effort<span class="diffstat float-right">0
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
<span class="diffstat-block-neutral"></span>
</span></a>
 <a class="menu-item" href="#url">Technical Debt<span class="diffstat float-right">973d
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="diffstat-block-added"></span>
<span class="AnimatedEllipsis"></span>
</span></a>
</nav>
</div>
<h3 id="cpu-usage-db-usage-included" tabindex="-1"><a class="header-anchor" href="#cpu-usage-db-usage-included" aria-hidden="true">#</a> CPU Usage. DB usage included</h3>
<div class="my-3 p-3">
<p><img src="/images/CPUusage.png" alt="CPU"></p>
<p><span class="Label mr-1" style="border-color:#7fffd4; color:#7fffd4;">faults</span>
<span class="Label mr-1" style="border-color:#008000; color:#008000;">average</span>
<span class="Label mr-1" style="border-color:#0000ff; color:#0000ff;">database</span>
<span class="Label mr-1" style="border-color:#ff0000; color:#ff0000;">limit 100%</span></p>
</div>
<h3 id="physical-memory-usage" tabindex="-1"><a class="header-anchor" href="#physical-memory-usage" aria-hidden="true">#</a> Physical Memory Usage</h3>
<div class="my-3 p-3">
<p><img src="/images/memoryUsage.png" alt="Memory"></p>
<p><span class="Label mr-1" style="border-color:#008000; color:#008000;">average</span>
<span class="Label mr-1" style="border-color:#ff0000; color:#ff0000;">512MB</span></p>
</div>
<h3 id="input-output-usage-db-usage-included" tabindex="-1"><a class="header-anchor" href="#input-output-usage-db-usage-included" aria-hidden="true">#</a> Input/Output Usage. DB usage included</h3>
<div class="my-3 p-3">
<p><img src="/images/IOusage.png" alt="Input|Output"></p>
<p><span class="Label mr-1" style="border-color:#7fffd4; color:#7fffd4;">faults</span>
<span class="Label mr-1" style="border-color:#008000; color:#008000;">average</span>
<span class="Label mr-1" style="border-color:#0000ff; color:#0000ff;">database</span>
<span class="Label mr-1" style="border-color:#ff0000; color:#ff0000;">limit 1MB/s</span></p>
</div>
<h2 id="storico-analisi-sito" tabindex="-1"><a class="header-anchor" href="#storico-analisi-sito" aria-hidden="true">#</a> Storico Analisi Sito.</h2>
<main class="Box Box--condensed my-4">
<section class="Box-row color-bg-success">
<div class="TableObject text-small ">
  <div class="TableObject-item TableObject-item--primary">
    <p class="text-gray"/>
       Apr 30, 2021, 8:10 AM GMT+2
    </p>
  </div>
  <div class="TableObject-item">
    <a class="btn-link ml-2" type="button" href="../Performance/reinnovame.com_2021-04-30_08-10-33.html" target="_blank">Visualizza</a>
  </div>
</div>
</section>
<section class="Box-row">
<div class="TableObject text-small ">
  <div class="TableObject-item TableObject-item--primary">
    <p class="text-gray"/>
      Jan 3, 2021, 3:57 PM GMT+1
    </p>
  </div>
  <div class="TableObject-item">
    <a class="btn-link ml-2" type="button" href="../Performance/reinnovame.com_2021-01-03_15-57-21.html" target="_blank">Visualizza</a>
  </div>
</div>
</section>
<section class="Box-row">
<div class="TableObject text-small ">
  <div class="TableObject-item TableObject-item--primary">
    <p class="text-gray"/>
    Jan 1, 2021, 12:03 PM GMT+1
    </p>
  </div>
  <div class="TableObject-item">
    <a class="btn-link ml-2" type="button" href="../Performance/reinnovame.com_2021-01-01_12-03-28.html" target="_blank">Visualizza</a>
  </div>
</div>
</section>
</main>
</template>
