<template>
  <div class="row shopcontainer" style="display: flex;">
    <div class="col-md-12">
      <div class="section-title ">
        <h1>ProxyScrape Premium</h1>
        <img alt="section-shape" src="https://cdn.proxyscrape.com/img/section-shape.png">
        <p>Fast static datacenter proxies</p>
      </div>
    </div>
    <div class="col-lg-6 col-md-12 col-xs-12">
      <div class="imagecard">
        <img alt="good proxies" src="https://cdn.proxyscrape.com/img/gp2.gif">
      </div>
    </div>
    <div class="col-lg-6 col-md-12 col-xs-12">
      <div class="textcard">
        <h2>The best premium proxies, at scale</h2>
        <br>
        <ul>
          <li>Unlimited bandwidth</li>
          <li>Unlimited concurrent connections</li>
          <li>Up to 50 000 HTTP/s and Socks4/5 datacenter proxies</li>
          <li>Whitelist up to 3 IPs with the datacenter proxies (upgrades available)</li>
          <li>Amazing shared datacenter proxies that always work</li>
        </ul>
        <a class="pricing-btn blue-btn mt-4" href="#pricing">PRICING</a>
      </div>
    </div>
    <div class="col-12" style="margin-bottom: 30px;">
    </div>

    <why-premium/>

    <div class="col-12" style="margin-bottom: 30px;">
    </div>

    <div class="col-lg-6 col-md-12 col-xs-12">
      <div class="imagecard">
        <img alt="uptime monitoring" src="https://cdn.proxyscrape.com/img/uptime_monitoring.png">
      </div>
    </div>

    <uptime-monitoring/>

    <div class="col-12" style="margin-bottom: 30px;">
    </div>

    <compare-us/>
    <div class="col-md-12">
      <div class="section-title mt-4">
        <h2>Already convinced?</h2>
        <a class="pricing-btn blue-btn mt-4" href="#pricing">VIEW PRICING</a>
      </div>
    </div>

    <sneakpeak-dashbaord/>

    <div class="col-12" style="margin-bottom: 30px;">
    </div>

    <ServiceSupport/>

    <div class="col-12" style="margin-bottom: 30px;">
    </div>

    <quick-recap/>

  </div>
</template>

<script lang='ts' setup>

import CompareUs from '@/components/services/premium/shop-container/compare-us.vue';
import SneakpeakDashbaord
  from '@/components/services/premium/shop-container/sneakpeak-dashbaord.vue';
import UptimeMonitoring from '@/components/services/premium/shop-container/uptime-monitoring.vue';
import WhyPremium from '@/components/services/premium/shop-container/why-premium.vue';
import ServiceSupport from '@/components/shared/ServiceSupport.vue';
import QuickRecap from '@/components/services/premium/shop-container/quick-recap.vue'; </script>

<style scoped>

</style>
