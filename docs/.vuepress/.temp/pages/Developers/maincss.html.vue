<template><h1 id="main-css" tabindex="-1"><a class="header-anchor" href="#main-css" aria-hidden="true">#</a> main.css</h1>
<p>A repository for the development of the Project CSS file. It includes both the whole <code>main.css</code> file as well as component files used to generate <code>main.css</code>. This way you can either pull in the whole file, as we do in Project or you can pull in the individual files as needed.</p>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2>
<p>The project contains the following files, which combine to create the different sections of <code>main.css.</code></p>
<h3 id="base-css" tabindex="-1"><a class="header-anchor" href="#base-css" aria-hidden="true">#</a> _base.css</h3>
<p>Several base styles are included. These styles:</p>
<ul>
<li>provide basic typography settings that improve text readability</li>
<li>protect against unwanted <code>text-shadow</code> during text highlighting</li>
<li>tweak the default alignment of some elements (e.g.: <code>img</code>, <code>video</code>,
<code>fieldset</code>, <code>textarea</code>)</li>
</ul>
<h3 id="helpers-css" tabindex="-1"><a class="header-anchor" href="#helpers-css" aria-hidden="true">#</a> _helpers.css</h3>
<p>Along with the base styles, we also provide some commonly used helper classes.</p>
<h4 id="hidden" tabindex="-1"><a class="header-anchor" href="#hidden" aria-hidden="true">#</a> <code>.hidden</code></h4>
<p>The <code>hidden</code> class can be added to any element that you want to hide visually
and from screen readers. It could be an element that will be populated and
displayed later, or an element you will hide with JavaScript.</p>
<h4 id="sr-only" tabindex="-1"><a class="header-anchor" href="#sr-only" aria-hidden="true">#</a> <code>.sr-only</code></h4>
<p>The <code>sr-only</code> class can be added to any element that you want to hide
visually, while still have its content accessible to screen readers.</p>
<h4 id="invisible" tabindex="-1"><a class="header-anchor" href="#invisible" aria-hidden="true">#</a> <code>.invisible</code></h4>
<p>The <code>invisible</code> class can be added to any element that you want to hide
visually and from screen readers, but without affecting the layout.</p>
<p>As opposed to the <code>hidden</code> class that effectively removes the element from the
layout, the <code>invisible</code> class will simply make the element invisible while
keeping it in the flow and not affecting the positioning of the surrounding
content.</p>
<h4 id="clearfix" tabindex="-1"><a class="header-anchor" href="#clearfix" aria-hidden="true">#</a> <code>.clearfix</code></h4>
<p>The <code>clearfix</code> class can be added to any element to ensure that it always fully
contains its floated children.</p>
<p>Over the years there have been many variants of the clearfix hack, but currently, we use the <a href="http://nicolasgallagher.com/micro-clearfix-hack/" target="_blank" rel="noopener noreferrer">micro clearfix<ExternalLinkIcon/></a>.</p>
<h3 id="mqs-css" tabindex="-1"><a class="header-anchor" href="#mqs-css" aria-hidden="true">#</a> _mqs.css</h3>
<p>We include placeholder media queries to help you build up your mobile styles for
wider viewports and high-resolution displays. It's recommended that you adapt
these media queries based on the content of your site rather than mirroring the
fixed dimensions of specific devices.</p>
<p>If you do not want to take the <em>mobile first</em> approach, you can simply edit or
remove these placeholder media queries. One possibility would be to work from
wide viewports down, and use <code>max-width</code> media queries instead (e.g.:
<code>@media only screen and (max-width: 480px)</code>).</p>
<h3 id="print-css" tabindex="-1"><a class="header-anchor" href="#print-css" aria-hidden="true">#</a> _print.css</h3>
<p>Lastly, we provide some useful print styles that will optimize the printing
process, as well as make the printed pages easier to read.</p>
<p>At printing time, these styles will:</p>
<ul>
<li>
<p>strip all background colors, change the font color to black, and remove the
<code>text-shadow</code> — done in order to help save printer ink and speed up the
printing process</p>
</li>
<li>
<p>underline and expand links to include the URL — done in order to allow users
to know where to refer to<br>
(exceptions to this are: the links that are
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href" target="_blank" rel="noopener noreferrer">fragment identifiers<ExternalLinkIcon/></a>,
or use the
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void#JavaScript_URIs" target="_blank" rel="noopener noreferrer"><code>javascript:</code> pseudo protocol<ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>expand abbreviations to include the full description — done in order to allow
users to know what the abbreviations stands for</p>
</li>
<li>
<p>provide instructions on how browsers should break the content into pages and
on <a href="https://en.wikipedia.org/wiki/Widows_and_orphans" target="_blank" rel="noopener noreferrer">orphans/widows<ExternalLinkIcon/></a>, namely,
we instruct
<a href="https://en.wikipedia.org/wiki/Comparison_of_layout_engines_%28Cascading_Style_Sheets%29#Grammar_and_rules" target="_blank" rel="noopener noreferrer">supporting browsers<ExternalLinkIcon/></a>
that they should:</p>
<ul>
<li>ensure the table header (<code>&lt;thead&gt;</code>) is <a href="https://web.archive.org/web/20180815150934/http://css-discuss.incutio.com/wiki/Printing_Tables" target="_blank" rel="noopener noreferrer">printed on each page spanned by the
table<ExternalLinkIcon/></a></li>
<li>prevent block quotations, preformatted text, images and table rows from
being split onto two different pages</li>
<li>ensure that headings never appear on a different page than the text they
are associated with</li>
<li>ensure that
<a href="https://en.wikipedia.org/wiki/Widows_and_orphans" target="_blank" rel="noopener noreferrer">orphans and widows<ExternalLinkIcon/></a> do
<a href="https://css-tricks.com/almanac/properties/o/orphans/" target="_blank" rel="noopener noreferrer">not appear on printed pages<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<p>The print styles are included along with the other <code>css</code> to <a href="http://www.phpied.com/delay-loading-your-print-css/" target="_blank" rel="noopener noreferrer">avoid the
additional HTTP request<ExternalLinkIcon/></a>.
Also, they should always be included last, so that the other styles can be
overwritten.</p>
<h2 id="browser-support" tabindex="-1"><a class="header-anchor" href="#browser-support" aria-hidden="true">#</a> Browser support</h2>
<p>We use the following browserlist configuration:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> " browserslist": [
    "> 0.5%",
    "last 2 versions",
    "Firefox ESR",
    "not dead",
    "IE 11"
  ],
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><a href="https://browserl.ist/?q=%22%3E+0.5%25%22%2C%22last+2+versions%22%2C%22Firefox+ESR%22%2C%22not+dead%22%2C%22IE+11%22" target="_blank" rel="noopener noreferrer">That configuration translates to this full list of browsers.<ExternalLinkIcon/></a></p>
</template>
