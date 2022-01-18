<template><h1 id="the-html" tabindex="-1"><a class="header-anchor" href="#the-html" aria-hidden="true">#</a> The HTML</h1>
<p>By default, HTML5 Boilerplate provides two <code>html</code> pages:</p>
<ul>
<li><a href="#indexhtml"><code>index.html</code></a> - a default HTML skeleton that should form the
basis of all pages on your website</li>
<li><code>404.html</code> - a placeholder 404 error page</li>
</ul>
<h2 id="index-html" tabindex="-1"><a class="header-anchor" href="#index-html" aria-hidden="true">#</a> <code>index.html</code></h2>
<h3 id="the-no-js-class" tabindex="-1"><a class="header-anchor" href="#the-no-js-class" aria-hidden="true">#</a> The <code>no-js</code> Class</h3>
<p>The <code>no-js</code> class is provided in order to allow you to more easily and
explicitly add custom styles based on whether JavaScript is disabled (<code>.no-js</code>)
or enabled (<code>.js</code>). Using this technique also helps <a href="https://www.paulirish.com/2009/avoiding-the-fouc-v3/" target="_blank" rel="noopener noreferrer">avoid the
FOUC<ExternalLinkIcon/></a>.</p>
<h3 id="language-attribute" tabindex="-1"><a class="header-anchor" href="#language-attribute" aria-hidden="true">#</a> Language Attribute</h3>
<p>Please consider specifying the language of your content by adding a
<a href="https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry" target="_blank" rel="noopener noreferrer">value<ExternalLinkIcon/></a>
to the <code>lang</code> attribute in the <code>&lt;html&gt;</code> as in this example:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-js<span class="token punctuation">"</span></span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="the-order-of-the-title-and-meta-tags" tabindex="-1"><a class="header-anchor" href="#the-order-of-the-title-and-meta-tags" aria-hidden="true">#</a> The order of the <code>&lt;title&gt;</code> and <code>&lt;meta&gt;</code> tags</h3>
<p>The charset declaration (<code>&lt;meta charset=&quot;utf-8&quot;&gt;</code>) must be included completely
within the <a href="https://html.spec.whatwg.org/multipage/semantics.html#charset" target="_blank" rel="noopener noreferrer">first 1024 bytes of the
document<ExternalLinkIcon/></a>
and should be specified as early as possible (before any content that could be
controlled by an attacker, such as a <code>&lt;title&gt;</code> element) in order to avoid a
potential <a href="https://code.google.com/archive/p/doctype-mirror/wikis/ArticleUtf7.wiki" target="_blank" rel="noopener noreferrer">encoding-related security
issue<ExternalLinkIcon/></a>
in Internet Explorer</p>
<h3 id="meta-description" tabindex="-1"><a class="header-anchor" href="#meta-description" aria-hidden="true">#</a> Meta Description</h3>
<p>The <code>description</code> meta tag provides a short description of the page. In some
situations this description is used as a part of the snippet shown in the search
results.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>This is a description<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Google's <a href="https://support.google.com/webmasters/answer/35624?hl=en#meta-descriptions" target="_blank" rel="noopener noreferrer">Create good meta
descriptions<ExternalLinkIcon/></a>
documentation has useful tips on creating an effective description.</p>
<h3 id="mobile-viewport" tabindex="-1"><a class="header-anchor" href="#mobile-viewport" aria-hidden="true">#</a> Mobile Viewport</h3>
<p>There are a few different options that you can use with the <a href="https://docs.google.com/present/view?id=dkx3qtm_22dxsrgcf4" title="Viewport and
Media Queries - The Complete Idiot's Guide" target="_blank" rel="noopener noreferrer"><code>viewport</code> meta
tag<ExternalLinkIcon/></a>. You can find out more in <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag" target="_blank" rel="noopener noreferrer">the MDN
Web
Docs<ExternalLinkIcon/></a>.
HTML5 Boilerplate comes with a simple setup that strikes a good balance for
general use cases.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>If you want to take advantage of edge-to-edge displays of iPhone X/XS/XR you
can do so with additional viewport parameters. <a href="https://webkit.org/blog/7929/designing-websites-for-iphone-x/" target="_blank" rel="noopener noreferrer">Check the WebKit
blog<ExternalLinkIcon/></a> for
details.</p>
<h3 id="open-graph-metadata" tabindex="-1"><a class="header-anchor" href="#open-graph-metadata" aria-hidden="true">#</a> Open Graph Metadata</h3>
<p>The <a href="https://ogp.me/" target="_blank" rel="noopener noreferrer">Open Graph Protocol<ExternalLinkIcon/></a> allows you to define the way your
site is presented when referenced on third party sites and applications
(Facebook, Twitter, LinkedIn). The protocol provides a series of meta elements
that define the details of your site. The required attributes define the title,
preview image, URL, and <a href="https://ogp.me/#types" target="_blank" rel="noopener noreferrer">type<ExternalLinkIcon/></a> (e.g., video, music,
website, article).</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>og:title<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>og:type<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>og:url<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>og:image<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>In addition to these four attributes there are many more attributes you can use
to add more richness to the description of your site. This just represents the
most basic implementation.</p>
<p>To see a working example, the following is the open graph metadata for the HTML5
Boilerplate site. In addition to the required fields we add <code>og:description</code> to
describe the site in more detail.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>og:url<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://html5boilerplate.com/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>og:title<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTML5 ★ BOILERPLATE<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>og:type<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>website<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>og:description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>The web’s most popular front-end template which helps you build fast, robust, and adaptable web apps or sites.<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>og:image<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://html5boilerplate.com/icon.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="web-app-manifest" tabindex="-1"><a class="header-anchor" href="#web-app-manifest" aria-hidden="true">#</a> Web App Manifest</h3>
<p>HTML5 Boilerplate includes a simple web app manifest file.</p>
<p>The web app manifest is a simple JSON file that allows you to control how your
app appears on a device's home screen, what it looks like when it launches in
that context and what happens when it is launched. This allows for much greater`
control over the UI of a saved site or web app on a mobile device.</p>
<p>It's linked to from the HTML as follows:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>manifest<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site.webmanifest<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Our
<a href="https://github.com/h5bp/html5-boilerplate/blob/master/src/site.webmanifest" target="_blank" rel="noopener noreferrer">site.webmanifest<ExternalLinkIcon/></a>
contains a very skeletal &quot;app&quot; definition, just to show the basic usage. You
should fill this file out with <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank" rel="noopener noreferrer">more information about your site or
application<ExternalLinkIcon/></a></p>
<h3 id="favicons-and-touch-icon" tabindex="-1"><a class="header-anchor" href="#favicons-and-touch-icon" aria-hidden="true">#</a> Favicons and Touch Icon</h3>
<p>The shortcut icons should be put in the root directory of your site.
<code>favicon.ico</code> is automatically picked up by browsers if it's placed in the root.
HTML5 Boilerplate comes with a default set of icons (include favicon and one
Apple Touch Icon) that you can use as a baseline to create your own.</p>
<p>Please refer to the more detailed description in the <RouterLink to="/Developers/extend.html">Extend section</RouterLink>
of these docs.</p>
<h3 id="the-content-area" tabindex="-1"><a class="header-anchor" href="#the-content-area" aria-hidden="true">#</a> The Content Area</h3>
<p>The central part of the boilerplate template is pretty much empty. This is
intentional, in order to make the boilerplate suitable for both web page and web
app development.</p>
<h3 id="modernizr" tabindex="-1"><a class="header-anchor" href="#modernizr" aria-hidden="true">#</a> Modernizr</h3>
<p>HTML5 Boilerplate uses a custom build of Modernizr.</p>
<p><a href="https://modernizr.com/" target="_blank" rel="noopener noreferrer">Modernizr<ExternalLinkIcon/></a> is a JavaScript library which adds classes
to the <code>html</code> element based on the results of feature test and which ensures
that all browsers can make use of HTML5 elements (as it includes the HTML5
Shiv). This allows you to target parts of your CSS and JavaScript based on the
features supported by a browser.</p>
<p>Starting with version 3 Modernizr can be customized using the
<a href="https://github.com/h5bp/html5-boilerplate/blob/master/modernizr-config.json" target="_blank" rel="noopener noreferrer">modernizr-config.json<ExternalLinkIcon/></a>
and the <a href="https://www.npmjs.com/package/modernizr-cli" target="_blank" rel="noopener noreferrer">Modernizr command line
utility<ExternalLinkIcon/></a>.</p>
<h3 id="what-about-polyfills" tabindex="-1"><a class="header-anchor" href="#what-about-polyfills" aria-hidden="true">#</a> What About Polyfills?</h3>
<p>If you need to include
<a href="https://remysharp.com/2010/10/08/what-is-a-polyfill" target="_blank" rel="noopener noreferrer">polyfills<ExternalLinkIcon/></a> in your
project, you must make sure those load before any other JavaScript. If you're
using a polyfill CDN service, like <a href="https://polyfill.io/v3/" target="_blank" rel="noopener noreferrer">polyfill.io<ExternalLinkIcon/></a>, just put
it before the other scripts in the bottom of the page:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>js/vendor/modernizr-3.10.0.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://polyfill.io/v3/polyfill.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>js/plugins.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>js/main.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>If you like to just include the polyfills yourself, you could include them in
<code>js/plugins.js</code>. When you have a bunch of polyfills to load in, you could also
create a <code>polyfills.js</code> file in the <code>js/vendor</code> directory or include the files
individually and combine them using a build tool. Always ensure that the
polyfills are all loaded before any other JavaScript.</p>
<p>There are some misconceptions about Modernizr and polyfills. It's important to
understand that Modernizr just handles feature checking, not polyfilling itself.
The only thing Modernizr does regarding polyfills is that the team maintains <a href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills" target="_blank" rel="noopener noreferrer">a
huge list of cross Browser
polyfills<ExternalLinkIcon/></a>.</p>
<h3 id="jquery" tabindex="-1"><a class="header-anchor" href="#jquery" aria-hidden="true">#</a> jQuery</h3>
<p>As of v8.0.0 we no longer include jQuery by default. Web development has
changed a lot since we started this project and while many millions of sites
still use jQuery there are many sites and applications that don't. 10 years ago
jQuery <em>was</em> JavaScript for most developers. That's not the case any more so
we've made the decision to remove jQuery from the project.</p>
<p>If you're interested in including it, you can easily install jQuery using the
following command:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install jQuery
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>You can then copy the minified file into the <code>vendor</code> folder and add jQuery
to the <code>index.html</code> manually.</p>
<p>To load jQuery from a CDN with a local fallback you can use the following:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://code.jquery.com/jquery-3.5.1.min.js<span class="token punctuation">"</span></span>  <span class="token attr-name">integrity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=<span class="token punctuation">"</span></span> <span class="token attr-name">crossorigin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>anonymous<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">window<span class="token punctuation">.</span>jQuery <span class="token operator">||</span> document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'&lt;script src="js/vendor/jquery-3.5.1.min.js">&lt;\/script>'</span><span class="token punctuation">)</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="google-universal-analytics-tracking-code" tabindex="-1"><a class="header-anchor" href="#google-universal-analytics-tracking-code" aria-hidden="true">#</a> Google Universal Analytics Tracking Code</h3>
<p>Finally, an optimized version of the Google Universal Analytics tracking code is
included.</p>
<p>We use <code>analytics.js</code> rather than the newer <code>gtag.js</code> as <a href="https://github.com/philipwalton/analyticsjs-boilerplate/issues/19#issuecomment-333714370" target="_blank" rel="noopener noreferrer">it's faster and
supports tasks and
plugins<ExternalLinkIcon/></a></p>
<p>Starting with version 8.0.0 we, by default, <a href="https://support.google.com/analytics/answer/2763052" target="_blank" rel="noopener noreferrer">anonymize IP
addresses<ExternalLinkIcon/></a>. By
default Google Analytics records the full IP address of a user visiting the
site, but that full IP address is never available to the Google Analytics
property admin. By anonymizing the IP address you can make your site more
GDPR-compliant as a full IP address can be defined as PII (personally
identifiable information.)</p>
<p>The beacon transport mechanism is used to send all hits <a href="https://philipwalton.com/articles/the-google-analytics-setup-i-use-on-every-site-i-build/#loading-analytics.js" target="_blank" rel="noopener noreferrer">which saves HTTP
requests and improves
performance<ExternalLinkIcon/></a>.</p>
<p>Google recommends that this script be placed at the top of the page. Factors to
consider: if you place this script at the top of the page, you’ll be able to
count users who don’t fully load the page, and you’ll incur the max number of
simultaneous connections of the browser.</p>
<p>Please be aware that while Google <a href="https://privacy.google.com/businesses/compliance/" target="_blank" rel="noopener noreferrer">states that it is fully GDPR compliant<ExternalLinkIcon/></a>,
it is still possible to use analytics to violate GDPR.</p>
<p>Further information:</p>
<ul>
<li><a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/" target="_blank" rel="noopener noreferrer">Introduction to
Analytics.js<ExternalLinkIcon/></a></li>
<li><a href="https://ga-dev-tools.appspot.com/" target="_blank" rel="noopener noreferrer">Google Analytics Demos &amp; Tools<ExternalLinkIcon/></a></li>
<li><a href="https://support.google.com/analytics/answer/9019185" target="_blank" rel="noopener noreferrer">Privacy Controls in Google Analytics<ExternalLinkIcon/></a></li>
</ul>
<p><strong>N.B.</strong> The Google Analytics snippet is included by default mainly because
Google Analytics is <a href="https://trends.builtwith.com/analytics/Google-Analytics" target="_blank" rel="noopener noreferrer">currently one of the most popular tracking
solutions<ExternalLinkIcon/></a> out there.
However, its usage isn't set in stone, and you SHOULD consider exploring the
<a href="https://en.wikipedia.org/wiki/List_of_web_analytics_software" target="_blank" rel="noopener noreferrer">alternatives<ExternalLinkIcon/></a> and
use whatever suits your needs best.</p>
</template>
