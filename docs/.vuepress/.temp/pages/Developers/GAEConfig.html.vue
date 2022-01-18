<template><h1 id="google-app-engine-server-configs" tabindex="-1"><a class="header-anchor" href="#google-app-engine-server-configs" aria-hidden="true">#</a> Google App Engine Server Configs</h1>
<ol>
<li>[Install Cloud SDK][1] and select Option 2 - Python and PHP - when prompted about App Engine.</li>
<li>Install App Engine command line interface component of Cloud SDK
by executing</li>
</ol>
<p><code>gcloud components update app</code></p>
<p>Your command line tool is all set now.</p>
<ol start="3">
<li>Copy <code>app.yaml</code> file from this repo into your app build root folder:</li>
</ol>
<p><code>curl https://raw.githubusercontent.com/h5bp/server-configs-gae/master/app.yaml &gt; app.yaml</code></p>
<ol start="4">
<li>Create a new project in [Google Developers Console][2] if you don't have one already,
and modify <code>application</code> field in the <code>app.yaml</code> to reflect your Project ID.
It is a good idea to look through the rest of <code>app.yaml</code> file in case it needs some adjustments
for your specific case.</li>
</ol>
<p>Also, let <code>gcloud</code> tool know what project you are using by executing:</p>
<p><code>gcloud config set project my-project-id</code></p>
<ol start="5">
<li>You should be all set now. Any time you want to update your website,
execute the following command from the root of your app build directory:</li>
</ol>
<p><code>gcloud preview app deploy .</code></p>
<p>It might be a good idea to keep a master version of your <code>app.yaml</code> file and copy it over to the app root directory as the last build step.</p>
</template>
