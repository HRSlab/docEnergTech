<template><h1 id="node-js-server-configuration" tabindex="-1"><a class="header-anchor" href="#node-js-server-configuration" aria-hidden="true">#</a> Node.js Server Configuration <img src="https://secure.travis-ci.org/h5bp/server-configs-node.svg" alt="Build Status"></h1>
<div class="custom-container danger"><p class="custom-container-title">Attenzione</p>
<p>Questo Modulo (Express 3.x) è deprecato ed è in procinto di essere <a href="https://github.com%22" target="_blank" rel="noopener noreferrer">riscritto<ExternalLinkIcon/></a></p>
</div>
<p><strong>HTML5</strong> server config for node.js.</p>
<p><code>h5bp</code> for node.js follows the guidelines of the <a href="https://github.com/h5bp/server-configs-apache" target="_blank" rel="noopener noreferrer">Apache<ExternalLinkIcon/></a> version:</p>
<ul>
<li>secures backup and hidden files.</li>
<li>optionally redirects <code>www.yoursite.tld</code> to <code>yoursite.tld</code> or vice versa.</li>
<li>offers a simple cache busting mechanism.</li>
<li>normalize content types.</li>
<li>optionally enables CORS.</li>
<li>sets correct cache expires depending of the type of resource.</li>
<li>and some others...</li>
</ul>
<p>It also focuses on offering additional features such as on-the-fly script concatenation using <strong>CommonJS</strong> or <strong>AMD</strong>.</p>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save h5bp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h2>
<h3 id="create-a-simple-http-server" tabindex="-1"><a class="header-anchor" href="#create-a-simple-http-server" aria-hidden="true">#</a> Create a simple http server</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> h5bp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'h5bp'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> app <span class="token operator">=</span> h5bp<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">root</span><span class="token operator">:</span> __dirname <span class="token operator">+</span> <span class="token string">'/public'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>app</code> is an instance of an <code>express</code> application. You can add additional middlewares or routes if you like.</p>
<h3 id="use-it-as-a-connect-express-middleware" tabindex="-1"><a class="header-anchor" href="#use-it-as-a-connect-express-middleware" aria-hidden="true">#</a> Use it as a connect / express middleware</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    h5bp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'h5bp'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">h5bp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">root</span><span class="token operator">:</span> __dirname <span class="token operator">+</span> <span class="token string">'/public'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// in order to serve files, you should add the two following middlewares</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">compress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">'/public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="concatenate-scripts-on-the-fly" tabindex="-1"><a class="header-anchor" href="#concatenate-scripts-on-the-fly" aria-hidden="true">#</a> Concatenate scripts on-the-fly</h3>
<p>If you want to split your application source files but only serve one file, you can use the on-the-fly concatenation.
If you are familiar with node.js, you can use the <strong>CommonJS</strong> style. You can also use the <strong>AMD</strong> style.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">h5bp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> __dirname <span class="token operator">+</span> <span class="token string">'/public'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">scripts</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">files</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'app.js'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">processor</span><span class="token operator">:</span> <span class="token string">'commonjs'</span>   <span class="token comment">// can also be "amd"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>At the first request hit to <code>/app.js</code>, the server will compile, cache and serve the file. Any subsequent request will
serve the cached file without any performance impact.</p>
<p>So, this feature is meant to be used with the <a href="https://github.com/h5bp/server-configs/tree/master/apache#cache-busting" target="_blank" rel="noopener noreferrer">cache busting mechanism<ExternalLinkIcon/></a> in order to ensure the client always has the
latest resource version. If you restart your server, the cache will be flushed.</p>
<p>Note that the next release will provide a <em>development mode</em> where the server will simply disable its cache and
always serve the latest version of the file.</p>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>
<p>There are several options you can pass to the middleware.</p>
<p><code>app.use(h5bp(options));</code></p>
<h3 id="root" tabindex="-1"><a class="header-anchor" href="#root" aria-hidden="true">#</a> root</h3>
<p>Tells the filesystem path to the root directory of static resources. This options is mandatory if you serve static files.</p>
<h3 id="www" tabindex="-1"><a class="header-anchor" href="#www" aria-hidden="true">#</a> www</h3>
<p>Forces <strong>www</strong> if <code>true</code>, forces <strong>non-www</strong> if <code>false</code>, does nothing if not defined. By default, this is disabled.</p>
<h3 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> cors</h3>
<p>Enables <strong>CORS</strong> for everything. By default this is disabled.</p>
<h3 id="dotfiles" tabindex="-1"><a class="header-anchor" href="#dotfiles" aria-hidden="true">#</a> dotfiles</h3>
<p>Enables access to dotfiles. By default this is disabled.</p>
<h3 id="scripts" tabindex="-1"><a class="header-anchor" href="#scripts" aria-hidden="true">#</a> scripts</h3>
<p>Tells which scripts to concatenate.</p>
<p>This is an object with the following properties:</p>
<h4 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> files</h4>
<p>This is an array of files to concatenate. Their path is relative to the <code>root</code> option. Their URL will be absolute.</p>
<p>For example, if you set <strong>files</strong> to <code>['scripts/app.js']</code> and <strong>root</strong> to <code>/home/h5bp/app/</code>:</p>
<ul>
<li>The path will be: <code>/home/h5bp/app/scripts/app.js</code>.</li>
<li>The served URL will be: <code>yoursite.tld/scripts/app.js</code>.</li>
</ul>
<h4 id="processor" tabindex="-1"><a class="header-anchor" href="#processor" aria-hidden="true">#</a> processor</h4>
<p>Tells which processor to use for scripts concatenation.</p>
<p>For now, it can be one of the following values:</p>
<ul>
<li><code>commonjs</code>: will concatenate files using the <strong>CommonJS</strong> method (<code>require/exports</code>).</li>
<li><code>amd</code>: will concatenate files using the <strong>AMD</strong> method (<code>require/define</code>).</li>
</ul>
<h2 id="additional-options" tabindex="-1"><a class="header-anchor" href="#additional-options" aria-hidden="true">#</a> Additional options</h2>
<p>The <code>h5bp.createServer</code> function takes the same options, plus additional ones.</p>
<p>The <code>callback</code> is optional. It is a custom middleware that you can register directly if you want to.</p>
<p><code>h5bp.createServer(options, [callback]);</code></p>
<h3 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server</h3>
<p>Tells which type of server you want to use.</p>
<p>It can be one of the following values:</p>
<ul>
<li><code>express</code>: uses <strong>express</strong>, this is the default value.</li>
<li><code>connect</code>: uses <strong>connect</strong>.</li>
</ul>
<h3 id="logger" tabindex="-1"><a class="header-anchor" href="#logger" aria-hidden="true">#</a> logger</h3>
<p>Tells if you want to log server requests or not. This can also be an object containing <a href="http://www.senchalabs.org/connect/middleware-logger.html" target="_blank" rel="noopener noreferrer">logger options<ExternalLinkIcon/></a>.</p>
<h3 id="compress" tabindex="-1"><a class="header-anchor" href="#compress" aria-hidden="true">#</a> compress</h3>
<p>Tells if you want to serve <code>gzipped</code> content or not. By default this is <code>true</code>.</p>
<p>If you are using <code>h5bp</code> as a middleware, we strongly encourage you to use the <code>compress</code> middleware provided by
<strong>express</strong> / <strong>connect</strong>.</p>
</template>
