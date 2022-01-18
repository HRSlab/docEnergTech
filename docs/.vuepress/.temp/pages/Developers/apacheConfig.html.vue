<template><h1 id="apache-server-configs" tabindex="-1"><a class="header-anchor" href="#apache-server-configs" aria-hidden="true">#</a> Apache Server Configs</h1>
<p><img src="https://github.com/h5bp/server-configs-apache/workflows/server/badge.svg" alt="Test"></p>
<p><strong>Apache Server Configs</strong> is a collection of configuration snippets that can help
your server improve the website's performance and security, while also
ensuring that resources are served with the correct content-type and are
accessible, if needed, even cross-domain.</p>
<h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2>
<p>There are two options for getting the Apache server configs:</p>
<ul>
<li>If you have access to the <a href="https://httpd.apache.org/docs/current/configuring.html#main" target="_blank" rel="noopener noreferrer">main server configuration
file<ExternalLinkIcon/></a>
(usually called <code>httpd.conf</code>), you should configure Apache this way.
This is usually the recommended way, as using <code>.htaccess</code> files <a href="https://httpd.apache.org/docs/current/howto/htaccess.html#when" target="_blank" rel="noopener noreferrer">slows
down<ExternalLinkIcon/></a>
Apache!</li>
<li>If you don't have access to it, which is quite common with hosting services,
checkout the <a href="#htaccess-file"><code>.htaccess</code> guide</a>.</li>
</ul>
<p>Using the Apache server configs repo directly has a few required steps to be able to work.</p>
<p>See also the <a href="https://httpd.apache.org/docs/current/getting-started.html" target="_blank" rel="noopener noreferrer">Apache Getting Started<ExternalLinkIcon/></a>.</p>
<h3 id="check-httpd-conf-settings" tabindex="-1"><a class="header-anchor" href="#check-httpd-conf-settings" aria-hidden="true">#</a> Check <code>httpd.conf</code> settings</h3>
<p>The first thing to check is that the <code>httpd.conf</code> file contains appropriate values for
your specific install.</p>
<p>Most specific variables are:</p>
<ul>
<li><code>ServerRoot</code></li>
<li><code>User</code></li>
<li><code>Group</code></li>
<li><code>ErrorLog</code></li>
<li><code>CustomLog</code></li>
<li><code>TypesConfig</code> (ensure that the path for the <code>mime.types</code> file is valid)</li>
</ul>
<h3 id="apache-test-and-restart" tabindex="-1"><a class="header-anchor" href="#apache-test-and-restart" aria-hidden="true">#</a> Apache test and restart</h3>
<ul>
<li>
<p>To verify Apache config</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>apache2 -t
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>To verify Apache config with a custom file</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>apache2 -t -f httpd.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>To reload Apache and apply the new config</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>apache2ctl reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<h3 id="enable-apache-httpd-modules" tabindex="-1"><a class="header-anchor" href="#enable-apache-httpd-modules" aria-hidden="true">#</a> Enable Apache httpd modules</h3>
<p>Some configurations won't have any effect if the
appropriate modules aren't enabled. So, in order for everything
to work as intended, you need to ensure you have the following
Apache modules enabled:</p>
<ul>
<li><a href="https://httpd.apache.org/docs/current/mod/mod_autoindex.html" target="_blank" rel="noopener noreferrer"><code>mod_autoindex.c</code> (autoindex_module)<ExternalLinkIcon/></a></li>
<li><a href="https://httpd.apache.org/docs/current/mod/mod_deflate.html" target="_blank" rel="noopener noreferrer"><code>mod_deflate.c</code> (deflate_module)<ExternalLinkIcon/></a></li>
<li><a href="https://httpd.apache.org/docs/current/mod/mod_expires.html" target="_blank" rel="noopener noreferrer"><code>mod_expires.c</code> (expires_module)<ExternalLinkIcon/></a></li>
<li><a href="https://httpd.apache.org/docs/current/mod/mod_filter.html" target="_blank" rel="noopener noreferrer"><code>mod_filter.c</code> (filter_module)<ExternalLinkIcon/></a></li>
<li><a href="https://httpd.apache.org/docs/current/mod/mod_headers.html" target="_blank" rel="noopener noreferrer"><code>mod_headers.c</code> (headers_module)<ExternalLinkIcon/></a></li>
<li><a href="https://httpd.apache.org/docs/current/mod/mod_include.html" target="_blank" rel="noopener noreferrer"><code>mod_include.c</code> (include_module)<ExternalLinkIcon/></a></li>
<li><a href="https://httpd.apache.org/docs/current/mod/mod_mime.html" target="_blank" rel="noopener noreferrer"><code>mod_mime.c</code> (mime_module)<ExternalLinkIcon/></a></li>
<li><a href="https://httpd.apache.org/docs/current/mod/mod_rewrite.html" target="_blank" rel="noopener noreferrer"><code>mod_rewrite.c</code> (rewrite_module)<ExternalLinkIcon/></a></li>
<li><a href="https://httpd.apache.org/docs/current/mod/mod_setenvif.html" target="_blank" rel="noopener noreferrer"><code>mod_setenvif.c</code> (setenvif_module)<ExternalLinkIcon/></a></li>
</ul>
<p>For more detailed information on configuration files and how to
use them, please check the appropriate Apache documentation:</p>
<ul>
<li><a href="https://httpd.apache.org/docs/current/configuring.html" target="_blank" rel="noopener noreferrer">https://httpd.apache.org/docs/current/configuring.html<ExternalLinkIcon/></a></li>
<li><a href="https://httpd.apache.org/docs/current/howto/htaccess.html" target="_blank" rel="noopener noreferrer">https://httpd.apache.org/docs/current/howto/htaccess.html<ExternalLinkIcon/></a></li>
</ul>
<h4 id="standalone" tabindex="-1"><a class="header-anchor" href="#standalone" aria-hidden="true">#</a> Standalone</h4>
<p>These instructions should work on any distribution where <code>apt-get</code> has been
used to install Apache.</p>
<ol>
<li>
<p>Open up a terminal and type the following command. Enter your password when
prompted.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> a2enmod setenvif headers deflate filter expires rewrite include
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>Restart apache by using the following command, so the new configuration takes
effect.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> /etc/init.d/apache2 restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ol>
<h4 id="with-mamp-wamp-xampp" tabindex="-1"><a class="header-anchor" href="#with-mamp-wamp-xampp" aria-hidden="true">#</a> With MAMP/WAMP/XAMPP</h4>
<ul>
<li>
<p><strong>MAMP PRO</strong>. On the main screen, click the <code>Apache</code> tab and ensure that all
the required modules are 'checked', indicating they are enabled.</p>
</li>
<li>
<p><strong>WampServer</strong>. If you have installed WampServer just click on the icon in the
task bar then <kbd>Apache</kbd> section then <kbd>modules</kbd> section.
You will be presented with a list of modules. Simply click on a module name
to enable it. WampServer will automatically restart the Apache service after
you enable a module.</p>
</li>
<li>
<p><strong>Others</strong>. Locate the <code>httpd.conf</code> file, which is typically found in:</p>
<ul>
<li><strong>MAMP</strong>: <code>/Applications/MAMP/conf/apache/httpd.conf</code></li>
<li><strong>XAMPP</strong>: <code>/Applications/XAMPP/etc/httpd.conf</code></li>
<li><strong>WAMP</strong>: <code>C:\apache\conf\httpd.conf</code></li>
</ul>
<p>Open the file in a text editor and uncomment all the required modules.
Once you have done so, reset MAMP/WAMP/XAMPP.</p>
</li>
</ul>
<h3 id="basic-structure" tabindex="-1"><a class="header-anchor" href="#basic-structure" aria-hidden="true">#</a> Basic structure</h3>
<p>This repository has the following structure:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>./
├── vhosts/
│   ├── 000-default.conf
│   └── templates/
├── hrs/
│   ├── basic.conf
│   └── .../
└── httpd.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>
<p><strong><code>vhosts/</code></strong></p>
<p>This directory should contain all the server definitions.</p>
<p>Except if they are dot prefixed or non <code>.conf</code> extension, all files in this
folder <strong>are</strong> loaded automatically.</p>
<ul>
<li>
<p><strong><code>templates</code> folder</strong></p>
<p>Files in this folder contain a <code>&lt;VirtualHost/&gt;</code> template for secure and non-secure hosts.
They are intended to be copied in the <code>vhosts</code> folder with all <code>example.com</code>
occurrences changed to the target host.</p>
</li>
</ul>
</li>
<li>
<p><strong><code>hrs/</code></strong></p>
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
</ul>
</li>
<li>
<p><strong><code>httpd.conf</code></strong></p>
<p>The main Apache config file.</p>
</li>
</ul>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<p>The <a href="https://httpd.apache.org/docs/current/getting-started.html#configuration" target="_blank" rel="noopener noreferrer">default location of the configuration files<ExternalLinkIcon/></a> is <code>/usr/local/apache2/</code>, but these files may be located any of a variety of places, depending on how exactly you installed the server.<br>
Common locations for these files may be found <a href="http://wiki.apache.org/httpd/DistrosDefaultLayout" target="_blank" rel="noopener noreferrer">in the httpd wiki<ExternalLinkIcon/></a>.</p>
<h3 id="as-a-reference" tabindex="-1"><a class="header-anchor" href="#as-a-reference" aria-hidden="true">#</a> As a reference</h3>
<p>To use as reference requires no special installation steps, download/checkout the
repository to a convenient location and adapt your existing httpd configuration
incorporating the desired functionality from this repository.</p>
<p>Download the <a href="https://github.com/hrs/server-configs-apache/releases/latest" target="_blank" rel="noopener noreferrer">latest release archive<ExternalLinkIcon/></a>.</p>
<h3 id="directly" tabindex="-1"><a class="header-anchor" href="#directly" aria-hidden="true">#</a> Directly</h3>
<p>To use directly, add httpd config files from this repository.<br>
For example:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>apache2ctl stop
<span class="token function">git</span> clone https://github.com/hrs/server-configs-apache.git /tmp/hrs-apache
<span class="token builtin class-name">cd</span> /usr/local
<span class="token function">cp</span> -r apache2 apache2-previous
<span class="token function">cp</span> -r /tmp/hrs-apache/* apache2
<span class="token comment"># install-specific edits</span>
apache2ctl start
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="manage-sites" tabindex="-1"><a class="header-anchor" href="#manage-sites" aria-hidden="true">#</a> Manage sites</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/apache2/vhosts
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
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>apache2ctl reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="htaccess-file" tabindex="-1"><a class="header-anchor" href="#htaccess-file" aria-hidden="true">#</a> <code>.htaccess</code> file</h2>
<h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3>
<p>Just copy the <code>.htaccess</code> file in the root of the website.</p>
<p>Getting options:</p>
<ul>
<li>Download the <code>hrs.htaccess</code> on the <a href="https://github.com/HRSlab/-prjdoc/blob/master/docs/.vuepress/public/htaccess.conf" target="_blank" rel="noopener noreferrer">latest release<ExternalLinkIcon/></a>
and rename the file to <code>.htaccess</code></li>
<li>Install them via <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm<ExternalLinkIcon/></a>:</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev apache-server-configs
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Inside the <code>dist/</code> folder, you'll find a ready-to-use <code>.htaccess</code> file.</p>
<h3 id="custom-htaccess-builds" tabindex="-1"><a class="header-anchor" href="#custom-htaccess-builds" aria-hidden="true">#</a> Custom <code>.htaccess</code> builds</h3>
<p>Security, mime-type, and caching best practices evolve, and so should do your
<code>.htaccess</code> file. In the past, with each new <em>Apache Server Configs</em> release
it was quite tedious to find out which <code>.htaccess</code> trick was just new or only
had changes in certain nuances.</p>
<p>The <a href="#build-script-buildsh"><strong>build script</strong></a> with its re-usable and customizable
<a href="#configuration-file-htaccessconf"><strong>build configuration</strong></a> lets you easily
update your <code>.htaccess</code> file. Each new <code>.htaccess</code> build will contain the
updated <em>Apache Server Configs</em> source files, enabled or commented-out according
to your settings in the <code>htaccess.conf</code> of your project root.</p>
<h4 id="configuration-file-htaccess-conf" tabindex="-1"><a class="header-anchor" href="#configuration-file-htaccess-conf" aria-hidden="true">#</a> Configuration file: <code>htaccess.conf</code></h4>
<p>It allows you to define which module to <a href="#enabling-modules">enable</a> or
<a href="#disabling-modules">disable</a> for your project. Just copy the default
<a href="https://github.com/hrs/server-configs-apache/blob/master/bin/htaccess.conf" target="_blank" rel="noopener noreferrer"><code>htaccess.conf</code><ExternalLinkIcon/></a>
from this repo into your project directory. Adjust to your needs, and/or
<a href="#adding-custom-modules">add custom code</a> snippets you need for your project.
Its syntax is straight and pretty much self-explanatory:</p>
<div class="language-apache ext-apache line-numbers-mode"><pre v-pre class="language-apache"><code># Example Module

title   &quot;example module&quot;
enable  &quot;src/example-module/images.conf&quot;
enable  &quot;src/example-module/web_fonts.conf&quot;
disable &quot;src/example-module/not-needed.conf&quot;
omit    &quot;src/example-module/not-needed-at-all.conf&quot;

#... more modules ...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h5 id="disabling-modules" tabindex="-1"><a class="header-anchor" href="#disabling-modules" aria-hidden="true">#</a> Disabling modules</h5>
<p>For example, the <em>“Cross-origin web fonts”</em> snippet is always included in
our pre-built <code>.htaccess</code> file and enabled. If your project does not deal
with web fonts, you can <code>disable</code> or <code>omit</code> this section:</p>
<p>This will comment out the section:</p>
<div class="language-apache ext-apache line-numbers-mode"><pre v-pre class="language-apache"><code>disable  &quot;hrs/cross-origin/web_fonts.conf&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>…and this will exclude the section, saving lines in output:</p>
<div class="language-apache ext-apache line-numbers-mode"><pre v-pre class="language-apache"><code>omit  &quot;hrs/cross-origin/web_fonts.conf&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="enabling-modules" tabindex="-1"><a class="header-anchor" href="#enabling-modules" aria-hidden="true">#</a> Enabling modules</h5>
<p>For example, the <em>“Forcing <code>https://</code>”</em> snippet is disabled by default,
although being included in our pre-built <code>.htaccess</code>. To enable this
snippet, change the <code>disable</code> keyword to <code>enable</code>:</p>
<div class="language-apache ext-apache line-numbers-mode"><pre v-pre class="language-apache"><code>enable &quot;hrs/rewrites/rewrite_http_to_https.conf&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="adding-custom-modules" tabindex="-1"><a class="header-anchor" href="#adding-custom-modules" aria-hidden="true">#</a> Adding custom modules</h5>
<p>Imagine you're passing all requests to non-existing files to your
favorite web framework. The according
<a href="https://httpd.apache.org/docs/trunk/mod/mod_dir.html#fallbackresource" target="_blank" rel="noopener noreferrer"><em>mod_dir</em><ExternalLinkIcon/></a>
snippet would go like this:</p>
<div class="language-apache ext-apache line-numbers-mode"><pre v-pre class="language-apache"><code>FallbackResource index.php
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Store this snippet in a file, e.g. <code>config/framework_rewrites.conf</code>, and add
a reference in your <code>htaccess.conf</code>:</p>
<div class="language-apache ext-apache line-numbers-mode"><pre v-pre class="language-apache"><code># PROJECT MODULES
enable &quot;config/framework_rewrites.conf&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="build-script-build-sh" tabindex="-1"><a class="header-anchor" href="#build-script-build-sh" aria-hidden="true">#</a> Build script: <code>build.sh</code></h4>
<p>Dive into your project root and call the build script from wherever you cloned
the repo. Here are three examples:</p>
<ol>
<li>Create a default <code>.htaccess</code></li>
</ol>
<p>Create a default <code>.htaccess</code> in the current work directory. An existing
<code>htaccess.conf</code> in this directory will be used; if none is present, the
<a href="https://github.com/hrs/server-configs-apache/blob/master/bin/htaccess.conf" target="_blank" rel="noopener noreferrer"><strong>default configuration</strong><ExternalLinkIcon/></a>
will apply.</p>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>$ path/to/server-configs-apache/bin/build.sh

# Output looks like:
[✔] Build .htaccess
[✔] Moved in place: './.htaccess'
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2">
<li>Custom output location</li>
</ol>
<p>Just add an output path and filename as a parameter. By the way, if there's an
existing <code>.htaccess</code> file, the build script will create a backup.</p>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>$ path/to/server-configs-apache/bin/build.sh htdocs/.htaccess
[✔] Build .htaccess
[✔] Create backup: 'htdocs/.htaccess~'
[✔] Moved in place: 'htdocs/.htaccess'
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3">
<li>Custom <code>.htaccess</code> configuration</li>
</ol>
<p>Why not maintain your personal <code>~/htaccess.conf</code>? This example creates a
<code>.htaccess</code> in the current work directory, according to your favorite settings
you may have stored in your <code>$HOME</code> directory:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>path/to/server-configs-apache/bin/build.sh ./.htaccess ~/htaccess.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="support" tabindex="-1"><a class="header-anchor" href="#support" aria-hidden="true">#</a> Support</h2>
<ul>
<li>Apache v<strong>2.4.10</strong>+</li>
</ul>
</template>
