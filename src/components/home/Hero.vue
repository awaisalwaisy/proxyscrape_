<template>
  <div class="jumbotron">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 infotext">
          <div class="text">
            <div class="row">
              <div class="col-12">
                <h1>Scrape websites without limits</h1>
              </div>
            </div>
            <ul>
              <li>Up to 50 000 datacenter proxies</li>
              <li>99% uptime guarantee</li>
              <li>Unlimited bandwidth</li>
            </ul>
            <div class="row">
              <div class="col-lg-5 col-12">
                <a class="btn w-100" href="/premium?ref=home">Start now</a>
              </div>
              <div class="col-lg-5 col-12">
                <button
                  id="playvideo"
                  onclick="videoId();"
                  class="lets-play btn-outline-jum w-100"
                  data-video="https://vimeo.com/644945961"
                  style="background-color: unset; display: flex; justify-content: center"
                >
                  <img
                    src="@/assets/img/svg/videoplay.svg"
                    style="width: 20px; margin-right: 5px"
                    alt=""
                  />
                  Welcome video
                </button>
              </div>
            </div>

            <div id="video-wrap"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped src="../../assets/css/home.css"></style>
