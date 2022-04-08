<template>
  <div class="col-lg-4 col-md-3 col-12">
    <div class="itemcard downloadcard">
      <img alt="" src='@/assets/img/svg/pricing-img.svg'>
      <h2
        id="bwtotal"
        style="margin-bottom: 5px;">{{ card.name }}GB bandwidth<br>Residential proxies</h2>
      <div class="pricing-amount" style="padding-top: 0;">

        <div class="monthly_price">

          <sup><span class="currency">$</span></sup>
          <span id="bwprice" class="price">{{ card.price }}</span>

        </div>

      </div>
      <ul style="text-align: left;">

        <li>7+ million residential pool.</li>
        <li>$10 per GB.</li>
        <li>HTTP and HTTPs proxies.</li>
        <li>User:pass proxy authentication</li>

      </ul>

      <div class="pricing-content">
        <a id="buybtn"
           class="pricing-btn blue-btn"
           href="https://proxyscrape.com/purchase?type=beta_new_residential&amp;bandwidth=1"
           onclick="gtag('event', 'purchase-checkout', {'event_category' : 'buykey'});">Purchase</a>
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
