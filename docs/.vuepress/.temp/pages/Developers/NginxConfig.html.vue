<template><h1 id="nginx-server-configs" tabindex="-1"><a class="header-anchor" href="#nginx-server-configs" aria-hidden="true">#</a> Nginx Server Configs</h1>
<p>[<img src="https://github.com/h5bp/server-configs-nginx/workflows/server/badge.svg" alt="Test">]
<strong>Nginx Server Configs</strong> is a collection of configuration snippets that can help
your server improve the website's performance and security, while also
ensuring that resources are served with the correct content-type and are
accessible, if needed, even cross-domain.</p>
<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2>
<p>Using the Nginx server configs repo directly has a few required steps to be able to work.</p>
<ul>
<li><a href="https://nginx.org/en/docs/beginners_guide.html" target="_blank" rel="noopener noreferrer">Nginx Beginners Guide<ExternalLinkIcon/></a></li>
<li><a href="https://nginx.org/en/docs/http/request_processing.html" target="_blank" rel="noopener noreferrer">Nginx Request Processing<ExternalLinkIcon/></a></li>
</ul>
<h3 id="check-nginx-conf-settings" tabindex="-1"><a class="header-anchor" href="#check-nginx-conf-settings" aria-hidden="true">#</a> Check <code>nginx.conf</code> settings</h3>
<p>The first thing to check is that the <code>nginx.conf</code> file contains appropriate values for
your specific install.</p>
<p>Most specific variables are:</p>
<ul>
<li><code>user</code></li>
<li><code>error_log</code></li>
<li><code>pid</code></li>
<li><code>access_log</code></li>
</ul>
<h3 id="nginx-test-and-restart" tabindex="-1"><a class="header-anchor" href="#nginx-test-and-restart" aria-hidden="true">#</a> Nginx test and restart</h3>
<ul>
<li>
<p>To verify Nginx config</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nginx -t
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>To verify Nginx config with a custom file</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nginx -t -c nginx.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>To reload Nginx and apply the new config</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nginx -s reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<h3 id="basic-structure" tabindex="-1"><a class="header-anchor" href="#basic-structure" aria-hidden="true">#</a> Basic structure</h3>
<p>This repository has the following structure:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>./
├── conf.d/
│   ├── default.conf
│   └── templates/
├── h5bp/
│   ├── basic.conf
│   ├── location/
│   └── .../
├── mime.types
└── nginx.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li>
<p><strong><code>conf.d/</code></strong></p>
<p>This directory should contain all the <code>server</code> definitions.</p>
<p>Except if they are dot prefixed or non <code>.conf</code> extension, all files in this
folder <strong>are</strong> loaded automatically.</p>
<ul>
<li>
<p><strong><code>templates</code> folder</strong></p>
<p>Files in this folder contain a <code>server</code> template for secure and non-secure hosts.
They are intended to be copied in the <code>conf.d</code> folder with all <code>example.com</code>
occurrences changed to the target host.</p>
</li>
</ul>
</li>
<li>
<p><strong><code>h5bp/</code></strong></p>
<p>This directory contains config snippets (mixins) to be included as desired.</p>
<p>There are two types of config files provided, individual config snippets and
combined config files which provide convenient defaults.</p>
<ul>
<li>
<p><strong><code>basic.conf</code></strong></p>
<p>This file loads a small subset of the rules provided by this repository to add
expires headers, allow cross-domain fonts and protect system files from web
access.
The <code>basic.conf</code> file includes the rules which are recommended to always be
defined.</p>
</li>
<li>
<p><strong><code>location/</code></strong></p>
<p>Files in this folder contain one or more <code>location</code> directives. They are intended
to be loaded in the <code>server</code> context (or, in a nested <code>location</code> block).</p>
</li>
</ul>
</li>
<li>
<p><strong><code>mime.types</code></strong></p>
<p>The mime.types file is responsible for mapping file extensions to mime types.</p>
</li>
<li>
<p><strong><code>nginx.conf</code></strong></p>
<p>The main Nginx config file.</p>
</li>
</ul>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h3 id="as-a-reference" tabindex="-1"><a class="header-anchor" href="#as-a-reference" aria-hidden="true">#</a> As a reference</h3>
<p>To use as reference requires no special installation steps, download/checkout the
repository to a convenient location and adapt your existing Nginx configuration
incorporating the desired functionality from this repository.</p>
<p>Download the <a href="https://github.com/h5bp/server-configs-nginx/releases/latest" target="_blank" rel="noopener noreferrer">latest release archive<ExternalLinkIcon/></a>.</p>
<h3 id="directly" tabindex="-1"><a class="header-anchor" href="#directly" aria-hidden="true">#</a> Directly</h3>
<p>To use directly, replace the Nginx config directory with this repository.
For example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nginx -s stop
<span class="token builtin class-name">cd</span> /etc
<span class="token function">mv</span> nginx nginx-previous
<span class="token function">git</span> clone https://github.com/h5bp/server-configs-nginx.git nginx
<span class="token comment"># install-specific edits</span>
nginx
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="manage-sites" tabindex="-1"><a class="header-anchor" href="#manage-sites" aria-hidden="true">#</a> Manage sites</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/nginx/conf.d
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>Creating a new site</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> templates/example.com.conf .actual-hostname.conf
<span class="token function">sed</span> -i <span class="token string">'s/example.com/actual-hostname/g'</span> .actual-hostname.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>Enabling a site</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mv</span> .actual-hostname.conf actual-hostname.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>Disabling a site</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mv</span> actual-hostname.conf .actual-hostname.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nginx -s reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="support" tabindex="-1"><a class="header-anchor" href="#support" aria-hidden="true">#</a> Support</h2>
<ul>
<li>Nginx v<strong>1.8.0</strong>+</li>
</ul>
</template>
