<template>
  <div class="col-lg-4 col-md-6 col-12">
    <div class="itemcard downloadcard">
      <a
        href="https://api.proxyscrape.com/?request=getproxies&proxytype=http&timeout=10000&country=all&ssl=all&anonymity=all"
        id="downloadiconhttp"
        onclick="dataLayer.push(
           {'event' : 'GAEvent', 'eventAction' : 'downloadfpl', 'eventCategory' : 'fpl'}
           );"
        download
      >
        <img src="@/assets/img/svg/free-proxy-list.svg" alt="" />
        <h2>HTTP Proxies</h2>
      </a>
      <p>
        Last updated: <span id="httplastupdated">Around 5 minutes ago</span> <br /><span
          id="httpproxyamount"
          >1000</span
        >
        proxies
      </p>
      <div class="selectors">
        <label for="httptimeoutslide">Timeout: <span id="httptimeoutoutput"></span>ms</label>
        <input
          type="range"
          step="50"
          min="50"
          max="10000"
          value="10000"
          class="slider"
          id="httptimeoutslide"
        />
        <div class="premium" style="display: none">
          <span>Average timeout: <span id="httpaveragetimeoutoutput">10000</span>ms</span>
          <input
            type="range"
            step="50"
            min="50"
            max="10000"
            value="10000"
            class="slider"
            id="httpaveragetimeoutslide"
          />
          <span>Minimum uptime: <span id="httpuptimeoutput"></span>%</span>
          <input
            type="range"
            step="1"
            min="0"
            max="100"
            value="0"
            class="slider"
            id="httpuptimeslide"
          />
          <span>
            Status: <span id="httpstatusoutput"></span><span id="httpdead"> days dead</span></span
          >
          <input
            type="range"
            step="1"
            min="0"
            max="30"
            value="0"
            class="slider"
            id="httpstatusslide"
          />
          <span>
            Maximum age: <span id="httpageoutput"></span><span id="httpold"> days old</span></span
          >
          <input
            type="range"
            step="1"
            min="1"
            max="100"
            value="100"
            class="slider"
            id="httpageslide"
          />
          <span>Minimum score: <span id="httpscoreoutput"></span></span>
          <input
            type="range"
            step="0.05"
            min="0"
            max="4"
            value="0"
            class="slider"
            id="httpscoreslide"
          />
          <div class="nice-select selectortypes" tabindex="0">
            <span>Organization: <span class="current">all</span></span>
            <ul class="list httporganization">
              <li data-value="all" class="option selected">all</li>
              <li data-value="DigitalOcean LLC" class="option">DigitalOcean LLC</li>
              <li data-value="OVH SAS" class="option">OVH SAS</li>
            </ul>
          </div>
          <div class="nice-select selectortypes" tabindex="0">
            <span>Port: <span class="current">all</span></span>
            <ul class="list httpport">
              <li data-value="all" class="option selected">all</li>
              <li data-value="8080" class="option">8080</li>
              <li data-value="9999" class="option">9999</li>
              <li data-value="80" class="option">80</li>
              <li data-value="3128" class="option">3128</li>
              <li data-value="9000" class="option">9000</li>
            </ul>
          </div>
        </div>
        <div class="nice-select selectortypes" tabindex="0">
          <span>Country: <span class="current">all</span></span>
          <ul class="list httpcountry countryselect">
            <li data-value="all" class="option selected">all</li>
          </ul>
        </div>
        <div class="nice-select selectortypes" tabindex="0">
          <span>Anonymity: <span class="current">all</span></span>
          <ul class="list httpanonimity">
            <li data-value="all" class="option selected">all</li>
            <li data-value="elite" class="option">elite</li>
            <li data-value="anonymous" class="option">anonymous</li>
            <li data-value="transparent" class="option">transparent</li>
          </ul>
        </div>
        <div class="nice-select selectortypes" tabindex="0">
          <span>SSL: <span class="current">all</span></span>
          <ul class="list httpssl">
            <li data-value="all" class="option selected">all</li>
            <li data-value="yes" class="option">yes</li>
            <li data-value="no" class="option">no</li>
          </ul>
        </div>
      </div>
      <div class="downloadbtn">
        <a
          href=""
          id="downloadhttp"
          onclick="dataLayer.push(
             {'event' : 'GAEvent', 'eventAction' : 'downloadfpl', 'eventCategory' : 'fpl'});"
          download
          >Download</a
        >
        or <a href="" id="sharehttp">Share</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HttpProxies',
};
</script>

<style scoped></style>
