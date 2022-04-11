<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title">
            <h1>Free proxy list</h1>
            <img alt="section-shape" src="https://cdn.proxyscrape.com/img/section-shape.png" />
            <p id="descn">
              HTTP, Socks4 and Socks5 proxy lists updated 24/7. <br />Want better &amp; faster
              proxies?
              <a
                href="https://proxyscrape.com/premium?ref=topfpl"
                onclick="dataLayer.push(
                   {'event' : 'GAEvent',
                   'eventAction' : 'moreoptions',
                   'eventCategory' : 'buykey'}
                   );"
                style="text-decoration: underline"
                >go premium!</a
              >
            </p>
            <p id="descp" style="display: none">
              HTTP, Socks4 and Socks5 proxy lists updated 24/7 with premium features!
            </p>
          </div>
        </div>

        <div class="col-lg-12 col-md-12 col-12" id="nonepremium">
          <div class="itemcard full">
            <div id="ad1" class="box greenBox">
              Want premium proxies that always work?
              <router-link
                to="/premium"
                style="text-decoration: underline"
                onclick="dataLayer.push(
                   {'event' : 'GAEvent',
                   'eventAction' : 'rt',
                   'eventCategory' : 'buykey'
                   });"
                >GET STARTED
              </router-link>
            </div>
          </div>
        </div>
        <HttpProxies />
        <Socks4Proxies />
        <Socks5Proxies />

        <div class="col-lg-12 col-md-12 col-12">
          <div class="itemcard full">
            <iframe
              src="https://www.youtube.com/embed/rH7DwAFSbuA"
              width="100%"
              height="600"
              frameborder="0"
              allowfullscreen="true"
            ></iframe>
            <a href="/premium?ref=fastpwl"><button class="btn loginbtn">GET PROXIES</button></a>
          </div>
        </div>

        <ProxyTable />
        <WhyPremium />
        <BlogSection />

        <FProxiesFAQ />
        <FProxiesDisclaimer />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import HttpProxies from '@/components/freebies/free/HttpProxies.vue';
import Socks4Proxies from '@/components/freebies/free/Socks4Proxies.vue';
import Socks5Proxies from '@/components/freebies/free/Socks5Proxies.vue';
import ProxyTable from '@/components/freebies/free/ProxyTable.vue';
import WhyPremium from '@/components/freebies/free/WhyPremium.vue';
import BlogSection from '@/components/shared/BlogSection.vue';
import FProxiesFAQ from '@/components/freebies/free/FProxiesFAQ.vue';
import FProxiesDisclaimer from '@/components/freebies/free/FProxiesDisclaimer.vue';
</script>

<style scoped></style>
