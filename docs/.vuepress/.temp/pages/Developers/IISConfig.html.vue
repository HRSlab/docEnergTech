<template><h1 id="iis-6-notice" tabindex="-1"><a class="header-anchor" href="#iis-6-notice" aria-hidden="true">#</a> IIS 6 NOTICE</h1>
<p>If you're using IIS6 you shouldn't use the supplied <code>web.config</code> files.
Instead your changes will need to be made on the server itself.</p>
<p>Contents:</p>
<ol>
<li>Enabling GZip/Deflate</li>
<li>Adding/removing Headers
2.1 Removing E-Tags
2.2 Security Headers
2.3 Other Headers</li>
</ol>
<h2 id="_1-enabling-gzip-deflate-iis6-server-2003" tabindex="-1"><a class="header-anchor" href="#_1-enabling-gzip-deflate-iis6-server-2003" aria-hidden="true">#</a> 1. Enabling GZip/Deflate (IIS6 Server 2003)</h2>
<p>In order to enable GZip you will need to enable metabase editing. This can be
done as per <a href="http://www.microsoft.com/technet/prodtechnol/WindowsServer2003/Library/IIS/1d1e5de4-fd63-40cd-bc5d-c20521548eed.mspx?mfr=true" target="_blank" rel="noopener noreferrer">these
instructions<ExternalLinkIcon/></a></p>
<p>...</p>
<p>Once you have navigated to the file location (<code>C:\WINDOWS\SYSTEM32\INETSRV</code>)
make a copy of the file <code>metabase.xml</code> to your desktop or somewhere safe.</p>
<p>Open the file, and search for &quot;IIsCompressionScheme&quot;.</p>
<p>Replace the IISCompressionScheme and Schemes XML with the following: (or
alternatively you can see it here: https://gist.github.com/2136507)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;IIsCompressionScheme   Location ="/LM/W3SVC/Filters/Compression/deflate"
        HcCompressionDll="%windir%\system32\inetsrv\gzip.dll"
        HcCreateFlags="0"
        HcDoDynamicCompression="TRUE"
        HcDoOnDemandCompression="TRUE"
        HcDoStaticCompression="TRUE"
        HcDynamicCompressionLevel="9"
        HcFileExtensions="htm
            html
            xml
            css
            txt
            rdf
            js
            svg
            ttf
            otf
            eot"
        HcOnDemandCompLevel="10"
        HcPriority="1"
        HcScriptFileExtensions="asp
            cgi
            exe
            dll
            aspx
            asmx
            axd"
    >
&lt;/IIsCompressionScheme>
&lt;IIsCompressionScheme   Location ="/LM/W3SVC/Filters/Compression/gzip"
        HcCompressionDll="%windir%\system32\inetsrv\gzip.dll"
        HcCreateFlags="1"
        HcDoDynamicCompression="TRUE"
        HcDoOnDemandCompression="TRUE"
        HcDoStaticCompression="TRUE"
        HcDynamicCompressionLevel="9"
        HcFileExtensions="htm
            html
            xml
            css
            txt
            rdf
            js
            svg
            ttf
            otf
            eot"
        HcOnDemandCompLevel="10"
        HcPriority="1"
        HcScriptFileExtensions="asp
            cgi
            exe
            dll
            aspx
            asmx
            axd"
    >
&lt;/IIsCompressionScheme>
&lt;IIsCompressionSchemes  Location ="/LM/W3SVC/Filters/Compression/Parameters"
        HcCacheControlHeader="max-age=86400"
        HcCompressionBufferSize="8192"
        HcCompressionDirectory="C:\IIS Temporary Compressed Files"
        HcDoDiskSpaceLimiting="FALSE"
        HcDoDynamicCompression="TRUE"
        HcDoOnDemandCompression="TRUE"
        HcDoStaticCompression="TRUE"
        HcExpiresHeader="Wed, 01 Jan 1997 12:00:00 GMT"
        HcFilesDeletedPerDiskFree="256"
        HcIoBufferSize="8192"
        HcMaxDiskSpaceUsage="99614720"
        HcMaxQueueLength="1000"
        HcMinFileSizeForComp="1"
        HcNoCompressionForHttp10="FALSE"
        HcNoCompressionForProxies="FALSE"
        HcNoCompressionForRange="FALSE"
        HcSendCacheHeaders="FALSE"
    >
&lt;/IIsCompressionSchemes>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><p>Note: Never set the compression value to <code>10</code>; though this might seem a
sensible thing to do the CPU load increase per-request is quite large, whilst
the actual compression difference is negligible.</p>
<h2 id="_2-adding-removing-headers" tabindex="-1"><a class="header-anchor" href="#_2-adding-removing-headers" aria-hidden="true">#</a> 2. Adding/Removing Headers</h2>
<h3 id="_2-1-removing-etags" tabindex="-1"><a class="header-anchor" href="#_2-1-removing-etags" aria-hidden="true">#</a> 2.1 Removing ETags</h3>
<p>Remove ETags from the Http Response by setting a blank ETag header. In IIS
Manager, right click Web Site (or any folder), click Properties, select
HttpHeaders tab, add Custom Http Header called ETag but leave the value blank.</p>
<h3 id="_2-2-security-headers" tabindex="-1"><a class="header-anchor" href="#_2-2-security-headers" aria-hidden="true">#</a> 2.2 Security Headers</h3>
<p>Using the method above you can add any header; here are a few other common ones
that are in the web.config of H5BP project configs.</p>
<p>For readability I'll separate the KEY from the VALUE using a COLON (e.g. KEY :
VALUE).</p>
<h4 id="_2-2-1-access-control-allow-origin" tabindex="-1"><a class="header-anchor" href="#_2-2-1-access-control-allow-origin" aria-hidden="true">#</a> 2.2.1 Access-Control-Allow-Origin</h4>
<p>The 'Access Control Allow Origin' HTTP header is used to control which sites
are allowed to bypass same origin policies and send cross-origin requests.</p>
<p>Secure configuration: Either do not set this header, or return the
'Access-Control-Allow-Origin' header restricting it to only a trusted set of
sites. <a href="http://enable-cors.org/" target="_blank" rel="noopener noreferrer">Reference<ExternalLinkIcon/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Allow All -
Access-Control-Allow-Origin : *
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="_2-2-2-cache-control" tabindex="-1"><a class="header-anchor" href="#_2-2-2-cache-control" aria-hidden="true">#</a> 2.2.2 Cache-Control</h4>
<p>The 'Cache-Control' response header controls how pages can be cached either by
proxies or the users browser. This response header can provide enhanced privacy
by not caching sensitive pages in the users browser cache.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Cache-Control : no-store, no-cache
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="_2-2-3-strict-transport-security" tabindex="-1"><a class="header-anchor" href="#_2-2-3-strict-transport-security" aria-hidden="true">#</a> 2.2.3 Strict Transport Security</h4>
<p>The HTTP Strict Transport Security header is used to control if the browser is
allowed to only access a site over a secure connection and how long to remember
the server response for, forcing continued usage.</p>
<p>N.B. Currently a draft standard which only Firefox and Chrome support. But is
supported by sites like PayPal.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Strict-Transport-Security : max-age=15768000
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="_2-2-4-x-frame-options" tabindex="-1"><a class="header-anchor" href="#_2-2-4-x-frame-options" aria-hidden="true">#</a> 2.2.4 X-Frame Options</h4>
<p>The X-Frame-Options header indicates whether a browser should be allowed to
render a page within a frame or iframe. The valid options are DENY (deny
allowing the page to exist in a frame) or SAMEORIGIN (allow framing but only
from the originating host). Without this option set the site is at a higher risk
of click-jacking.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>X-Frame-Options : SAMEORIGIN
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="_2-2-5-x-xss-protection" tabindex="-1"><a class="header-anchor" href="#_2-2-5-x-xss-protection" aria-hidden="true">#</a> 2.2.5 X-XSS Protection</h4>
<p>The X-XSS-Protection header is used by Internet Explorer version 8+. The header
instructs IE to enable its inbuilt anti-cross-site scripting filter.  If
enabled, without <code>mode=block</code>, there is an increased risk that otherwise
non-exploitable cross-site scripting vulnerabilities may potentially become
exploitable</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>X-XSS-Protection:1; mode=block
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="_2-2-6-manual-removal" tabindex="-1"><a class="header-anchor" href="#_2-2-6-manual-removal" aria-hidden="true">#</a> 2.2.6 Manual Removal</h4>
<p>You can manually remove X-Powered-By via the same panel you add the headers.
A tiny bit of 'security' by obscurity.</p>
<h4 id="_2-2-7-content-security-policy" tabindex="-1"><a class="header-anchor" href="#_2-2-7-content-security-policy" aria-hidden="true">#</a> 2.2.7 Content Security Policy</h4>
<p>With Content Security Policy (CSP) enabled (and a browser that supports it (http://caniuse.com/#feat=contentsecuritypolicy),
you can tell the browser that it can only download content from the domains you explicitly allow
CSP can be quite difficult to configure, and cause real issues if you get it wrong
There is website that helps you generate a policy here http://cspisawesome.com/</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Content-Security-Policy :  default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' https://www.google-analytics.com;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="_2-3-other-headers" tabindex="-1"><a class="header-anchor" href="#_2-3-other-headers" aria-hidden="true">#</a> 2.3 Other Headers</h3>
<h4 id="_2-3-3-x-ua-compatible" tabindex="-1"><a class="header-anchor" href="#_2-3-3-x-ua-compatible" aria-hidden="true">#</a> 2.3.3 X-UA-Compatible</h4>
<p>Force the latest IE version, in various cases when it may fall back to IE7 mode
http://github.com/rails/rails/commit/123eb25#commitcomment-118920</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>X-UA-Compatible : IE=Edge,chrome=1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="_2-3-3-p3p-handy-when-your-using-facebook-api-connect" tabindex="-1"><a class="header-anchor" href="#_2-3-3-p3p-handy-when-your-using-facebook-api-connect" aria-hidden="true">#</a> 2.3.3 P3P (handy when your using Facebook API/Connect)</h4>
<p>Allow cookies to be set from iframes (for IE only)</p>
<p>Ref: http://stackoverflow.com/questions/6241626/facebook-ie-and-p3p</p>
<p>If needed, specify a path or regex in the Location directive</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>P3P : policyref=&amp;quot;/w3c/p3p.xml&amp;quot;, CP=&amp;quot;IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT&amp;quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
