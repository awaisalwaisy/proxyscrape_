<template>
  <div class="col-lg-4 col-md-6 col-12">
    <div class="itemcard downloadcard">
      <a
        href="https://api.proxyscrape.com/?request=getproxies&proxytype=socks5&timeout=10000&country=all"
        id="downloadiconsocks5"
        onclick="dataLayer.push(
          {'event' : 'GAEvent', 'eventAction' : 'downloadfpl', 'eventCategory' : 'fpl'}
        );"
        download
      >
        <img src="@/assets/img/svg/free-proxy-list.svg" alt="" />
        <h2>Socks5 Proxies</h2>
      </a>
      <p>
        Last updated: <span id="socks5lastupdated">Around 5 minutes ago</span> <br /><span
          id="socks5proxyamount"
          >1000</span
        >
        proxies
      </p>
      <div class="selectors">
        <label for="socks5timeoutslide">Timeout: <span id="socks5timeoutoutput"></span>ms</label>
        <input
          type="range"
          step="50"
          min="50"
          max="10000"
          value="10000"
          class="slider"
          id="socks5timeoutslide"
        />
        <div class="premium" style="display: none">
          <span>Average timeout: <span id="socks5averagetimeoutoutput">10000</span>ms</span>
          <input
            type="range"
            step="50"
            min="50"
            max="10000"
            value="10000"
            class="slider"
            id="socks5averagetimeoutslide"
          />
          <span>Minimum uptime: <span id="socks5uptimeoutput"></span>%</span>
          <input
            type="range"
            step="1"
            min="0"
            max="100"
            value="0"
            class="slider"
            id="socks5uptimeslide"
          />
          <span
            >Status: <span id="socks5statusoutput"></span
            ><span id="socks5dead"> days dead</span></span
          >
          <input
            type="range"
            step="1"
            min="0"
            max="30"
            value="0"
            class="slider"
            id="socks5statusslide"
          />
          <span
            >Maximum age: <span id="socks5ageoutput"></span
            ><span id="socks5old"> days old</span></span
          >
          <input
            type="range"
            step="1"
            min="1"
            max="100"
            value="100"
            class="slider"
            id="socks5ageslide"
          />
          <span>Minimum score: <span id="socks5scoreoutput"></span></span>
          <input
            type="range"
            step="0.05"
            min="0"
            max="4"
            value="0"
            class="slider"
            id="socks5scoreslide"
          />
          <div class="nice-select selectortypes" tabindex="0">
            <span>Organization: <span class="current">all</span></span>
            <ul class="list socks5organization">
              <li data-value="all" class="option selected">all</li>
              <li data-value="DigitalOcean LLC" class="option">DigitalOcean LLC</li>
              <li data-value="OVH SAS" class="option">OVH SAS</li>
            </ul>
          </div>
          <div class="nice-select selectortypes" tabindex="0">
            <span>Port: <span class="current">all</span></span>
            <ul class="list socks5port">
              <li data-value="all" class="option selected">all</li>
              <li data-value="4145" class="option">4145</li>
              <li data-value="1080" class="option">1080</li>
              <li data-value="8080" class="option">8080</li>
              <li data-value="80" class="option">80</li>
              <li data-value="1085" class="option">1085</li>
            </ul>
          </div>
        </div>
        <div class="nice-select selectortypes" tabindex="0">
          <span>Country: <span class="current">all</span></span>
          <ul class="list socks5country countryselect">
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
          id="downloadsocks5"
          onclick="dataLayer.push(
            {'event' : 'GAEvent', 'eventAction' : 'downloadfpl', 'eventCategory' : 'fpl'}
          );"
          download
          >Download</a
        >
        or <a href="" id="sharesocks5">Share</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
