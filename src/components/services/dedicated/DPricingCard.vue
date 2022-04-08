<template>
  <div class="col-lg-4 col-md-3 col-12">
    <div class="itemcard downloadcard">
      <img src='@/assets/img/svg/dproxy-price.svg' alt="">
      <h2 style="margin-bottom: 5px;" id="bwtotal">{{ card.name }} dedicated proxies</h2>
      <div class="pricing-amount" style="padding-top: 0;">
        <div class="monthly_price">
          <sup><span class="currency">$</span></sup>
          <span class="price" id="bwprice">{{ card.price }}</span>
        </div>
      </div>
      <ul style="text-align: left;">

        <li>$1.30/proxy/month</li>
        <li>Unlimited bandwidth.</li>
        <li>HTTP/s & Socks4/5 proxies.</li>
        <li>No rate limit*</li>

      </ul>

      <div class="pricing-content">
        <a class="pricing-btn blue-btn"
           href="https://proxyscrape.com/purchase?type=beta_new_dedicated&proxies=5"
           id="buybtn" onclick="gtag('event', 'purchase-checkout', {'event_category' : 'buykey'});">
          Purchase</a>
      </div>
    </div>

  </div>
</template>

<script lang='ts' setup>
import { defineProps } from 'vue';

// eslint-disable-next-line vue/no-setup-props-destructure
const { card } = defineProps({
  card: Object,
});

</script>

<style scoped>

</style>
