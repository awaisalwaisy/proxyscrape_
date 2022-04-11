<template>
  <div class="col-lg-4 col-md-6 col-12">
    <div class="itemcard downloadcard">
      <a
        href="https://api.proxyscrape.com/?request=getproxies&proxytype=socks4&timeout=10000&country=all"
        id="downloadiconsocks4"
        onclick="dataLayer.push(
          {'event' : 'GAEvent', 'eventAction' : 'downloadfpl', 'eventCategory' : 'fpl'}
        );"
        download
      >
        <img src="@/assets/img/svg/free-proxy-list.svg" alt="" />
        <h2>Socks4 Proxies</h2>
      </a>
      <p>
        Last updated: <span id="socks4lastupdated">Around 5 minute ago</span> <br /><span
          id="socks4proxyamount"
          >1000</span
        >
        proxies
      </p>
      <div class="selectors">
        <label for="socks4timeoutslide">Timeout: <span id="socks4timeoutoutput"></span>ms</label>
        <input
          type="range"
          step="50"
          min="50"
          max="10000"
          value="10000"
          class="slider"
          id="socks4timeoutslide"
        />
        <div class="premium" style="display: none">
          <span>Average timeout: <span id="socks4averagetimeoutoutput">10000</span>ms</span>
          <input
            type="range"
            step="50"
            min="50"
            max="10000"
            value="10000"
            class="slider"
            id="socks4averagetimeoutslide"
          />
          <span>Minimum uptime: <span id="socks4uptimeoutput"></span>%</span>
          <input
            type="range"
            step="1"
            min="0"
            max="100"
            value="0"
            class="slider"
            id="socks4uptimeslide"
          />
          <span
            >Status: <span id="socks4statusoutput"></span
            ><span id="socks4dead"> days dead</span></span
          >
          <input
            type="range"
            step="1"
            min="0"
            max="30"
            value="0"
            class="slider"
            id="socks4statusslide"
          />
          <span
            >Maximum age: <span id="socks4ageoutput"></span
            ><span id="socks4old"> days old</span></span
          >
          <input
            type="range"
            step="1"
            min="1"
            max="100"
            value="100"
            class="slider"
            id="socks4ageslide"
          />
          <span>Minimum score: <span id="socks4scoreoutput"></span></span>
          <input
            type="range"
            step="0.05"
            min="0"
            max="4"
            value="0"
            class="slider"
            id="socks4scoreslide"
          />
          <div class="nice-select selectortypes" tabindex="0">
            <span>Organization: <span class="current">all</span></span>
            <ul class="list socks4organization">
              <li data-value="all" class="option selected">all</li>
              <li data-value="DigitalOcean LLC" class="option">DigitalOcean LLC</li>
              <li data-value="OVH SAS" class="option">OVH SAS</li>
            </ul>
          </div>
          <div class="nice-select selectortypes" tabindex="0">
            <span>Port: <span class="current">all</span></span>
            <ul class="list socks4port">
              <li data-value="all" class="option selected">all</li>
              <li data-value="4145" class="option">4145</li>
              <li data-value="8080" class="option">8080</li>
              <li data-value="80" class="option">80</li>
              <li data-value="1080" class="option">1080</li>
              <li data-value="3128" class="option">3128</li>
            </ul>
          </div>
        </div>
        <div class="nice-select selectortypes" tabindex="0">
          <span>Country: <span class="current">all</span></span>
          <ul class="list socks4country countryselect">
            <li data-value="all" class="option selected">all</li>
          </ul>
        </div>

        <div class="nice-select selectortypes" tabindex="0">
          <span>Anonymity: <span class="current">only for http proxies</span></span>
          <ul class="list">
            <li data-value="only for http proxies" class="option selected">
              only for http proxies
            </li>
          </ul>
        </div>

        <select class="nice-select" name="option" style="display: none">
          <option value="">only for http proxies</option>
        </select>
        <div class="nice-select selectortypes" tabindex="0">
          <span>SSL: <span class="current">only for http proxies</span></span>
          <ul class="list">
            <li data-value="only for http proxies" class="option selected">
              only for http proxies
            </li>
          </ul>
        </div>
      </div>
      <div class="downloadbtn">
        <a
          href=""
          id="downloadsocks4"
          onclick="dataLayer.push(
            {'event' : 'GAEvent', 'eventAction' : 'downloadfpl', 'eventCategory' : 'fpl'}
          );"
          download
          >Download</a
        >
        or <a href="" id="sharesocks4">Share</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
