<template><div class="gantt_container">
<div class="language-mermaid ext-mermaid line-numbers-mode"><pre v-pre class="language-mermaid"><code><span class="token keyword">gantt</span>
    dateFormat  DD-MMM
    title       Project schedule
    excludes    weekends
    todayMarker stroke-width<span class="token operator">:</span>20px,stroke<span class="token operator">:</span>#BADA55,opacity<span class="token operator">:</span>0.23
    axisFormat  %H%p-%a-%d-%B

    section Project Start
    0.1 Setup first meetings<span class="token text string">(s)</span>                        <span class="token operator">:</span>active, 03/06/2021, 6h
    0.2 Define and collect briefing document               <span class="token operator">:</span>active, 8h
    0.3 Define and send project questionnaire              <span class="token operator">:</span>active, 8h
    0.4 Research client’s company                          <span class="token operator">:</span>active, 4h
    0.5 Research client’s industry                         <span class="token operator">:</span>active, 4h
    0.6 Estimate  development effort                       <span class="token operator">:</span>done, 1h
    0.7 Estimate   design work                             <span class="token operator">:</span>done, 1h
    0.9 Estimate for photography / video production        <span class="token operator">:</span>done, 1h
    0.10 Estimate  Hosting / Domain                        <span class="token operator">:</span>done, 1h
    0.11 Prepare and send Proposal                        <span class="token operator">:</span>active, 2h
    0.12 Approval  meeting                                <span class="token operator">:</span>active, 1h
    0.13  Project Acceptance timeline with milestones        <span class="token operator">:</span>active, 4h
    0.14  client signoff Meeting                           <span class="token operator">:</span>active, 4h
    section Design
    16 Create a sitemap <span class="token operator">:</span>active, 8h
    17 Research and buy template <span class="token operator">:</span>active, 8h
    18 Create a wireframe of custom designs <span class="token operator">:</span>active, 8h
    19. Allocate time and effort for a designer <span class="token operator">:</span>active, 8h
    20. Allocate time and effort for content creation/copy <span class="token operator">:</span>active, 8h
    21. Research, buy and tweak stock images or find free images you can use <span class="token operator">:</span>active, 8h
    22. Allocate time and effort for photography <span class="token text string">(based on estimates sent to the client)</span> <span class="token operator">:</span>active, 8h
    23. Allocate time and effort for video productions <span class="token text string">(based on estimates sent to the client)</span> <span class="token operator">:</span>active, 8h
    24. Define privacy policy and other legal text required for the website <span class="token operator">:</span>active, 8h
    25. Send design<span class="token text string">(s)</span> to the client for approval and wait for approval <span class="token operator">:</span>active, 8h
    26. Get designers to perform any required design changes <span class="token operator">:</span>active, 8h
    27. Send designs to web developers including template, together with designs, for the start of research and development <span class="token operator">:</span>active, 1d
    28. Send specifications and updates to the client and wait for sign off <span class="token operator">:</span>active, 8h
    section Development
    29. Send finalized designs to developers <span class="token operator">:</span>active, 8h
    30. Allocate development checklists to the various developers <span class="token operator">:</span>active, 8h
    31. Agree with all developers client on a date for Alpha <span class="token operator">:</span>active, 8h
    32. Reach out to content creators and ensure they are on target <span class="token operator">:</span>active, 8h
    33. Ensure you’ve bought hosting or created a hosting space for your website <span class="token operator">:</span>done, 3h
    34. Create a new database<span class="token text string">(s)</span> <span class="token operator">:</span>done, 3h
    35. Upload the website source files <span class="token operator">:</span>done, 3h
    36. Install/configure the CMS <span class="token operator">:</span>done, 3h
    37. export/import the database staging/production server <span class="token operator">:</span>done, 3h
    38. Change the nameservers <span class="token operator">:</span>done, 3h
    39. Create the website site map <span class="token operator">:</span>done, 3h
    40. Collect all content <span class="token operator">:</span>done, 23h
    41. Quality assure each piece of content <span class="token operator">:</span>done, 8h
    42. Populate the website content <span class="token operator">:</span>done, 3h
    43. Define a Contact Us page <span class="token operator">:</span>done, 3h
    44. Populate links/iconography with links to relevant social media details <span class="token operator">:</span>done, 3h
    45. Create a link to your website in the footer <span class="token operator">:</span>crit, 10h
    46. Send current iteration to client and request feedback <span class="token operator">:</span>done, 3h
    47. Fix and change any requests by the client <span class="token operator">:</span>done, 3h
    48. Send updates to client and wait for client sign-off <span class="token operator">:</span>done, 3h


    section Deployment


    section Content

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div></div>
<h2 id="stage-0-–-project-start-–-preparation" tabindex="-1"><a class="header-anchor" href="#stage-0-–-project-start-–-preparation" aria-hidden="true">#</a> Stage 0 – Project Start – Preparation</h2>
<p>Is web design only about design? Not really! Although most of us love the creative part of designing and developing a website, there are quite a few things we need to do before we actually get to that. Before we get down to the nitty-gritty – we’ll need to lay the groundwork and set a few rules.</p>
<ul>
<li>
<p>[ ] 1. Setup first meetings(s) with client</p>
</li>
<li>
<p>[ ] 2. Define and collect briefing document from the client</p>
</li>
<li>
<p>[ ] 3. Define and send a project questionnaire to the client and wait for the client’s response. Iterate on doubts you have until everybody is in agreement. Finalize project questionnaire from client</p>
</li>
<li>
<p>[ ] 4. Research client’s company to understand their brand, the way they communicate, their demographics, target audience</p>
</li>
<li>
<p>[ ] 5. Research client’s industry to find ways of communicating specifically to the industry, strengths and weaknesses, trends and other industry specifics</p>
</li>
<li>
<p>[ ] 6. Get quotation(s) for development effort for the project</p>
</li>
<li>
<p>[ ] 7. Get quotations(s) for design or estimate design work with your own designers</p>
</li>
<li>
<p>[ ] 8. Get quotation(s) for copy/content or estimate work with your copywriters</p>
</li>
<li>
<p>[ ] 9. Get quotation(s) for photography / video production or estimate effort involved</p>
</li>
<li>
<p>[ ] 10. Get quotation(s) for Hosting / Domain, particularly if specialized hosting is involved such as VPS hosting, cloud hosting, or special hosting or environment requirements</p>
</li>
<li>
<p>[ ] 11. Prepare and send a great web design proposal to the client – use the web design quotation tool to send an itemized quotation</p>
</li>
<li>
<p>[ ] 12. Get approval from the client of proposal and features to be implemented</p>
</li>
<li>
<p>[ ] 13. Create the Project Acceptance Form, and propose a timeline with milestones</p>
</li>
</ul>
<ol start="14">
<li>Send Project Acceptance Form, with timelines to the client and wait for client signoff</li>
</ol>
<h2 id="stage-1-–-project-kick-off" tabindex="-1"><a class="header-anchor" href="#stage-1-–-project-kick-off" aria-hidden="true">#</a> Stage 1 – Project Kick off</h2>
<ol start="15">
<li>
<p>Kick-off email to developers, designers, and other stakeholders</p>
</li>
<li>
<p>Create a sitemap of the website with proposed sections, pages</p>
</li>
<li>
<p>Research and buy template used as a basis for the design</p>
</li>
<li>
<p>Create a wireframe of specific pages which require custom designs</p>
</li>
<li>
<p>Allocate time and effort for a designer to create the wireframes based on the estimates sent to the client and brief designers on wireframe designs.</p>
</li>
<li>
<p>Allocate time and effort for content creation/copy</p>
</li>
<li>
<p>Research, buy and tweak stock images or find free images you can use</p>
</li>
<li>
<p>Allocate time and effort for photography (based on estimates sent to the client)</p>
</li>
<li>
<p>Allocate time and effort for video productions (based on estimates sent to the client)</p>
</li>
<li>
<p>Define privacy policy and other legal text required for the website</p>
</li>
<li>
<p>Send design(s) to the client for approval and wait for approval</p>
</li>
<li>
<p>Get designers to perform any required design changes</p>
</li>
<li>
<p>Send designs to web developers including template, together with designs, for the start of research and development</p>
</li>
<li>
<p>Send specifications and updates to the client and wait for sign off</p>
</li>
</ol>
<p>Once the designs have been completed and you’ve set the stage for what you want the final result to be like, it’s time to start developing. Besides the developers per se, you’ve also got to set the environment, ensure the domain is in place and set up correctly, create databases and ensure the production environments are ready.</p>
<h2 id="stage-2-–-development" tabindex="-1"><a class="header-anchor" href="#stage-2-–-development" aria-hidden="true">#</a> Stage 2 – Development</h2>
<ol start="29">
<li>
<p>Send finalized designs to developers</p>
</li>
<li>
<p>Allocate development checklists to the various developers</p>
</li>
<li>
<p>Agree with all developers + client on a date for Alpha</p>
</li>
<li>
<p>Reach out to content creators and ensure they are on target</p>
</li>
</ol>
<h3 id="stage-2-1-–-set-up-hosting-account" tabindex="-1"><a class="header-anchor" href="#stage-2-1-–-set-up-hosting-account" aria-hidden="true">#</a> Stage 2.1 – Set up Hosting Account</h3>
<ol start="33">
<li>
<p>Ensure you’ve bought hosting or created a hosting space for your website</p>
</li>
<li>
<p>Create a new database(s), and database users as necessary if you are using a CMS, or a website which requires a database</p>
</li>
<li>
<p>Upload the website source files</p>
</li>
<li>
<p>Install/configure the CMS to use the database you have created</p>
</li>
<li>
<p>If your website has been created already and you need to migrate it, export the database from the testing/staging server and import it to the production server</p>
</li>
<li>
<p>Change the nameservers of the domain you will be using to the nameservers of the hosting server you will be using
Stage 2.2 – Set Up Website Content</p>
</li>
<li>
<p>Create the website site map and structure you had defined with the client via your favourite CMS or the framework/technology you have chosen to develop your website</p>
</li>
<li>
<p>Collect all content from the various content creators you have outsourced</p>
</li>
<li>
<p>Quality assure each piece of content you have outsourced or bought – and ask for changes where necessary</p>
</li>
<li>
<p>Populate the website content with the various content items you have agreed with the client</p>
</li>
<li>
<p>Define a Contact Us page with correct client details and a map</p>
</li>
<li>
<p>Populate links/iconography with links to relevant social media details</p>
</li>
<li>
<p>Create a link to your website in the footer (if agreed with the client to do this)</p>
</li>
<li>
<p>Send current iteration to client and request feedback</p>
</li>
<li>
<p>Fix and change any requests by the client</p>
</li>
<li>
<p>Send updates to client and wait for client sign-off</p>
</li>
</ol>
<p>There is nothing more important than ensuring the developed product is fit for purpose through several types of quality assurance. After all, this is what will keep your clients coming back for more. An eye for detail here will ensure you will keep getting recommendations and repeat business. Most of all, the things which might not be immediately apparent, but make a significant difference, need to be given due importance.</p>
<h2 id="stage-3-–-quality-assurance" tabindex="-1"><a class="header-anchor" href="#stage-3-–-quality-assurance" aria-hidden="true">#</a> Stage 3 – Quality Assurance</h2>
<h3 id="stage-3-1-–-code-quality" tabindex="-1"><a class="header-anchor" href="#stage-3-1-–-code-quality" aria-hidden="true">#</a> Stage 3.1 – Code Quality</h3>
<ol start="49">
<li>
<p>Validate HTML using W3C HTML Validator, or your preferred Browser extension such as Validity Chrome Extension, or Html Validator plugin for FireFox</p>
</li>
<li>
<p>Validate CSS using this CSS Validator, Validity for Chrome, or Html Validator</p>
</li>
<li>
<p>Lint your CSS to make it better</p>
</li>
<li>
<p>Use JSLint and JSHint to make your JavaScript better</p>
</li>
<li>
<p>Check whether your website is internationalization ready here</p>
</li>
<li>
<p>Ask for changes from developers based on the results of the above tests</p>
</li>
</ol>
<h3 id="stage-3-2-–-page-content" tabindex="-1"><a class="header-anchor" href="#stage-3-2-–-page-content" aria-hidden="true">#</a> Stage 3.2 – Page Content</h3>
<ol start="55">
<li>
<p>Make sure web copywriting has been proofread and ran through a spelling and grammar checker to check for correctness. Use online tools such as Reverso, or Spellcheckplus.com</p>
</li>
<li>
<p>Check that generic content, such as lorem ipsum, has been properly removed and replaced.</p>
</li>
<li>
<p>See that all images are in the correct places, smushed, formatted, width and height specified and working on all devices.</p>
</li>
<li>
<p>Confirm that videos and audio files are in the correct places, formatted and working on all devices.</p>
</li>
<li>
<p>Test all linked content, such as case studies, ebooks, and whitepapers, and verify that they are correctly linked.</p>
</li>
<li>
<p>Test to see that all internal links across web pages are working properly</p>
</li>
<li>
<p>Ensure that Contact Us and other forms are submitting data properly. If the form is sent to an email address ensure that email is received on a mailbox that is monitored, or ensure that content is correctly stored in your database.</p>
</li>
<li>
<p>Verify the Thank-you message or page displayed after the form is submitted</p>
</li>
<li>
<p>Check that Auto-responders are working properly and text in emails has been proofed</p>
</li>
<li>
<p>External links across web pages are working properly, and open in a new tab (Fix any broken links using this tool)</p>
</li>
<li>
<p>Ensure that Social media share icons are working properly – that there is a good image for sharing and that the description for sharing is appropriate.</p>
</li>
<li>
<p>Correct your metadata as necessary to ensure social media sharing is working ok.</p>
</li>
<li>
<p>Use the Facebook linter to ensure your Facebook sharing will work well</p>
</li>
<li>
<p>Implement Twitter Cards and confirm it works well on the Preview tool</p>
</li>
<li>
<p>Ensure that the company logo is linked to the homepage.</p>
</li>
<li>
<p>Check that load time for site pages is optimized (confirm with multiple sources) such as GTMetrix and Pingdom tools. If not – do the following steps to make your WordPress website load faster</p>
</li>
<li>
<p>Try a non-existing address on your page to check the 404 pages and 404 redirect pages are in place</p>
</li>
<li>
<p>Integrations with third-party tools, such as your CRM, e-commerce software, and/or marketing platform should be tested to ensure they are running smoothly</p>
</li>
<li>
<p>Choose www vs no-www and make sure that ONLY one of them is working to ensure you don’t get penalized for duplicate content. After choosing one, make sure one redirects to the other.</p>
</li>
<li>
<p>Check on multiple browsers using browsershots or browserling</p>
</li>
</ol>
<h3 id="stage-3-4-–-responsive-and-mobile-friendly" tabindex="-1"><a class="header-anchor" href="#stage-3-4-–-responsive-and-mobile-friendly" aria-hidden="true">#</a> Stage 3.4 – Responsive and Mobile Friendly</h3>
<ol start="75">
<li>
<p>Make sure you are using the viewport meta tag: <code>&lt;meta name=”viewport” content=”initial-scale=1″&gt;</code></p>
</li>
<li>
<p>Check that Google sees your page as Mobile-Friendly. You should have fixed most of the Google Mobile Insights problems here</p>
</li>
<li>
<p>Use correct input types for email, phone and URL input form fields to ensure these are rendered correctly on mobile phones</p>
</li>
<li>
<p>Check how the site looks on emulators such as ipads, screenfly, mobilephonesimulator.</p>
</li>
<li>
<p>Test the site using real devices you have accessible to you or use opendevicelab.com</p>
</li>
<li>
<p>Send the finished site to your client and get feedback</p>
</li>
<li>
<p>Fix and change any requests by the client</p>
</li>
<li>
<p>Send updates to client and wait for client sign-off</p>
</li>
</ol>
<p>Once you’re happy with the site you have developed you can start thinking about the Launch process and of course how to get the maximum value out of the launched site. There are many tools out there to help you reap maximum benefit for yourself and for your clients.</p>
<h2 id="stage-4-–-launch" tabindex="-1"><a class="header-anchor" href="#stage-4-–-launch" aria-hidden="true">#</a> Stage 4 – Launch</h2>
<h3 id="stage-4-1-–-analytics" tabindex="-1"><a class="header-anchor" href="#stage-4-1-–-analytics" aria-hidden="true">#</a> Stage 4.1 – Analytics</h3>
<ol start="83">
<li>
<p>Register and verify the site with Google WebMasters aka Google Search Console</p>
</li>
<li>
<p>Create a new property and implement Google Analytics code.</p>
</li>
<li>
<p>Make sure you link Google WebMasters and Google Analytics to be able to get better insights from within Google Analytics</p>
</li>
<li>
<p>Exclude relevant IP addresses (such as office IP) from analytics tracking to ensure your own company’s and the client’s company do not inflate their website hits</p>
</li>
<li>
<p>Set up any funnels, goals, or tracking events which have been properly created in your analytics software</p>
</li>
<li>
<p>Implement visitor tracking software such as HotJar, CrazyEgg, or Optimizely</p>
</li>
<li>
<p>Implement any site uptime monitor such as Pingdom</p>
</li>
<li>
<p>Implement a website backup service as necessary and make sure site is fully secure, so that it is well protected from hackers and you are not a victim of WordPress site hacking.</p>
</li>
<li>
<p>Sign-off the deliverables and invoice your client 🙂</p>
</li>
</ol>
<h3 id="stage-4-2-–-search-engine-optimization" tabindex="-1"><a class="header-anchor" href="#stage-4-2-–-search-engine-optimization" aria-hidden="true">#</a> Stage 4.2 – Search Engine Optimization</h3>
<ol start="92">
<li>
<p>Check that all pages have unique page titles (with a recommended length of fewer than 70 characters, including any keywords).</p>
</li>
<li>
<p>Check that all pages have unique meta descriptions (with a recommended length of fewer than 156 characters, including keywords) – the meta description should be human-friendly – not optimized for search engines. Think about it this way: “If you wanted to use 156 characters to describe exactly what that article contains, what would you say?”</p>
</li>
<li>
<p>Verify that pages have your chosen keywords included without any keyword stuffing (do not over-emphasize particular keywords)</p>
</li>
<li>
<p>See that all pages have metadata which is properly in place (with correct spelling and grammar) for any content which you want to be shared via Social</p>
</li>
<li>
<p>Ensure that relevant Alt tags have been added to every image.</p>
</li>
<li>
<p>Make sure that a dynamic XML sitemap (which gets updated with every post you make) has been created and verify that the XML sitemap has been submitted to search engines via Google WebMasters.</p>
</li>
<li>
<p>Ensure that Google is able to read it correctly.</p>
</li>
<li>
<p>Submit to Bing and possibly Yandex WebMasters too.</p>
</li>
<li>
<p>See that all page URLs consistently reflect site information architecture.</p>
</li>
<li>
<p>If you have had another older website, make sure you have 301 redirects in place for all old URLs (redirecting old pages to new ones).</p>
</li>
<li>
<p>Where necessary ensure that rel=”nofollow” tags are in place on applicable links and pages.</p>
</li>
<li>
<p>Use schema creator to insert Microdata into your pages (or tag your content in google WebMasters Data Highlighter)</p>
</li>
<li>
<p>Check the semantics of your site using this</p>
</li>
</ol>
<h3 id="stage-4-3-–-speed-and-performance" tabindex="-1"><a class="header-anchor" href="#stage-4-3-–-speed-and-performance" aria-hidden="true">#</a> Stage 4.3 – Speed and Performance</h3>
<ul>
<li>
<p>[ ] 105. Try to get a PageSpeed score of 90+ – this PageSpeed Insights guide from Kinsta will surely help.</p>
</li>
<li>
<p>[ ] 106. Minify your javascript</p>
</li>
<li>
<p>[ ] 107. Minify your CSS</p>
</li>
<li>
<p>[ ] 108. Add Expires Header – Leverage browser caching to ensure that files which don’t change often are fetched from the browser cache rather than downloaded again</p>
</li>
<li>
<p>[ ] 109. Ensure a Yslow score of 85+</p>
</li>
<li>
<p>[ ] 110. Optimize the size of images using Y! Smush.It and replace the existing images with the optimized images</p>
</li>
<li>
<p>[ ] 111. Specify image dimensions for each image</p>
</li>
<li>
<p>[ ] 112. Enable gzip compression on your hosting server</p>
</li>
<li>
<p>[ ] 113. Ensure there are no bad requests, such as missing images or files</p>
</li>
<li>
<p>[ ] 114. Combine images using CSS Sprites (use SpriteMe.org to help you generate the sprite image)</p>
</li>
<li>
<p>[ ] 115. Reduce the number of HTTP requests by combining the CSS and JS files into as few files as possible</p>
</li>
</ul>
<h3 id="stage-4-4-–-usability" tabindex="-1"><a class="header-anchor" href="#stage-4-4-–-usability" aria-hidden="true">#</a> Stage 4.4 – Usability</h3>
<ol start="116">
<li>
<p>Check for HTML5 compatibility using modernizr, and Compat Inspector</p>
</li>
<li>
<p>Create a Favicon generator for each platform here</p>
</li>
<li>
<p>Enable user and search engine friendly URLs</p>
</li>
<li>
<p>Set up a print stylesheet</p>
</li>
</ol>
<h3 id="stage-4-5-–-social-media" tabindex="-1"><a class="header-anchor" href="#stage-4-5-–-social-media" aria-hidden="true">#</a> Stage 4.5 – Social Media</h3>
<ol start="120">
<li>Check Facebook Audience Insights to see how people are interacting with your website on Facebook</li>
</ol>
<p>(Update: Facebook is no longer accepting Facebook Domain Insights applications)</p>
<ol start="121">
<li>
<p>Link your website to your Google+ Brand page via instructions found here</p>
</li>
<li>
<p>Add humans.txt</p>
</li>
<li>
<p>Create new cover images for other Social Media you use such as Facebook, Twitter, LinkedIn company page, Pinterest, Instagram or others as necessary</p>
</li>
<li>
<p>Send the finished site to your client and get feedback</p>
</li>
<li>
<p>Fix and change any requests by the client</p>
</li>
<li>
<p>Give access to client to all accounts created on their behalf</p>
</li>
<li>
<p>Send updates to client and wait for client sign-off</p>
</li>
<li>
<p>Close project</p>
</li>
</ol>
</template>

<style scoped >

.gantt_container{
    max-width: 200%;
    max-height: 550px;
    overflow: scroll;
}

div.theme-default-content:not(.custom) {
    max-width: 100%;
}



.grid .tick {
    stroke: blue;
    opacity: 0.3;
    shape-rendering: crispEdges;
}
.grid path {
    stroke-width: 25;
}

#tag {
    color: #fafafa !important;
    background: #bada55;
    width: 150px;
    position: absolute;
    display: none;
    padding:3px 6px;
    margin-left: -80px;
    font-size: 11px;
}

#tag:before {
    border: solid transparent;
    content: ' ';
    height: 0;
    left: 50%;
    margin-left: -5px;
    position: absolute;
    width: 0;
    border-width: 10px;
    border-bottom-color: #BADA55 !important;
    top: -20px;
}
.taskText {
    fill: #BADA55;
    text-anchor:middle;
}
.taskTextOutsideRight {
    fill:black;
    text-anchor:start;
}
.taskTextOutsideLeft {
    fill:black;
    text-anchor:end;
}

</style>