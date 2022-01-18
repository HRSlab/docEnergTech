<template><h1 id="the-css" tabindex="-1"><a class="header-anchor" href="#the-css" aria-hidden="true">#</a> The CSS</h1>
<p>CSS includes:</p>
<ul>
<li><a href="#normalizecss">Normalize.css</a></li>
<li><a href="#maincss">main.css</a></li>
</ul>
<h2 id="normalize-css" tabindex="-1"><a class="header-anchor" href="#normalize-css" aria-hidden="true">#</a> Normalize.css</h2>
<p>In order to make browsers render all elements more consistently and in line with
modern standards, we include Normalize.css — a modern, HTML5-ready alternative
to CSS resets.</p>
<p>As opposed to CSS resets, Normalize.css:</p>
<ul>
<li>targets only the styles that need normalizing</li>
<li>preserves useful browser defaults rather than erasing them</li>
<li>corrects bugs and common browser inconsistencies</li>
<li>improves usability with subtle improvements</li>
<li>doesn't clutter the debugging tools</li>
<li>has better documentation</li>
</ul>
<p>For more information about Normalize.css, please refer to its <a href="https://necolas.github.io/normalize.css/" target="_blank" rel="noopener noreferrer">project
page<ExternalLinkIcon/></a>.</p>
<h2 id="main-css" tabindex="-1"><a class="header-anchor" href="#main-css" aria-hidden="true">#</a> main.css</h2>
<p>Several base styles are included that build upon <code>Normalize.css</code>. These styles:</p>
<ul>
<li>provide basic typography settings that improve text readability</li>
<li>protect against unwanted <code>text-shadow</code> during text highlighting</li>
<li>tweak the default alignment of some elements (e.g.: <code>img</code>, <code>video</code>,
<code>fieldset</code>, <code>textarea</code>)</li>
<li>style the prompt that is displayed to users using an outdated browser</li>
<li>and more...</li>
</ul>
<p>These styles are included in
<RouterLink to="/developers/maincss.html">main.css</RouterLink>.
See the <a href="https://github.com/HRSlab/-prjdoc/blob/master/docs/.vuepress/public/main.css" target="_blank" rel="noopener noreferrer">main.css<ExternalLinkIcon/></a></p>
</template>
