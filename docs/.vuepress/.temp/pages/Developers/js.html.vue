<template><h1 id="the-javascript" tabindex="-1"><a class="header-anchor" href="#the-javascript" aria-hidden="true">#</a> The JavaScript</h1>
<p>Information about the default JavaScript included in the project.</p>
<h2 id="main-js" tabindex="-1"><a class="header-anchor" href="#main-js" aria-hidden="true">#</a> main.js</h2>
<p>This file can be used to contain or reference your site/app JavaScript code. If
you're working on something more advanced you might replace this file entirely.
That's cool.</p>
<h2 id="plugins-js" tabindex="-1"><a class="header-anchor" href="#plugins-js" aria-hidden="true">#</a> plugins.js</h2>
<p>This file can be used to contain all your plugins, such as jQuery plugins and
other 3rd party scripts for a simple site.</p>
<p>One approach is to put jQuery plugins inside of a <code>(function($){ ...})(jQuery);</code>
closure to make sure they're in the jQuery namespace safety blanket. Read more
about <a href="https://learn.jquery.com/plugins/" target="_blank" rel="noopener noreferrer">jQuery plugin authoring<ExternalLinkIcon/></a>.</p>
<p>By default the <code>plugins.js</code> file contains a small script to avoid <code>console</code>
errors in browsers that lack a <code>console</code>. The script will make sure that, if a
console method isn't available, that method will have the value of empty
function, thus, preventing the browser from throwing an error.</p>
<h2 id="vendor" tabindex="-1"><a class="header-anchor" href="#vendor" aria-hidden="true">#</a> vendor</h2>
<p>This directory can be used to contain all 3rd party library code.</p>
<p>Our custom build of the Modernizr library is included by
default. You may wish to create your own <a href="https://modernizr.com/download/" target="_blank" rel="noopener noreferrer">custom Modernizr build with the online
builder<ExternalLinkIcon/></a> or <a href="https://modernizr.com/docs#command-line-config" target="_blank" rel="noopener noreferrer">command line
tool<ExternalLinkIcon/></a>.</p>
</template>
