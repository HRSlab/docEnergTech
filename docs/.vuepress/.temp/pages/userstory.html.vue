<template><h1 id="user-story" tabindex="-1"><a class="header-anchor" href="#user-story" aria-hidden="true">#</a> User Story</h1>
<div class="border p-5">
As an end user, I want to access the human resource database to generate reports so that I can periodically update the company’s staffing contact list.
</div>
<h2 id="acceptance-criteria" tabindex="-1"><a class="header-anchor" href="#acceptance-criteria" aria-hidden="true">#</a> Acceptance Criteria</h2>
<ul>
<li>
<p>[x] Ability to gain access to human resource database</p>
</li>
<li>
<p>[x] Ability to generate a report which includes</p>
</li>
<li>
<p>[x] Employee names</p>
</li>
<li>
<p>[x] Dates of birth</p>
</li>
<li>
<p>[x] Social security numbers</p>
</li>
<li>
<p>[x] Addresses</p>
</li>
<li>
<p>[x] Telephone numbers</p>
</li>
<li>
<p>[x] <s><em>Ability to use report data to update staffing contact list</em></s> [2020-05-24]</p>
</li>
</ul>
<h2 id="acceptance-testing" tabindex="-1"><a class="header-anchor" href="#acceptance-testing" aria-hidden="true">#</a> Acceptance Testing</h2>
<ul>
<li>
<p>[x] Database is accessible internally but not from outside company firewall</p>
</li>
<li>
<p>[x] MS Access report can be generated from database based on query inputs</p>
</li>
<li>
<p>[x] <s><em>MS Access report data can be exported to MS Excel spreadsheet</em></s> [2020-05-24]</p>
</li>
<li>
<p>[x] Staffing contact list updates contain only most recent data from the database</p>
</li>
</ul>
<h2 id="develper-stuff" tabindex="-1"><a class="header-anchor" href="#develper-stuff" aria-hidden="true">#</a> Develper Stuff</h2>
<div class="language-Gherkin ext-Gherkin line-numbers-mode"><pre v-pre class="language-Gherkin"><code>
Feature: Guess the word

  # The first example has two steps
  Scenario: Maker starts a game
    When the Maker starts a game
    Then the Maker waits for a Breaker to join

  # The second example has three steps
  Scenario: Breaker joins a game
    Given the Maker has started a game with the word &quot;silky&quot;
    When the Breaker joins the Maker's game
    Then the Breaker must guess a word with 5 characters

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
