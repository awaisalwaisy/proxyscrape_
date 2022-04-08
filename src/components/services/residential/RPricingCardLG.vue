<template>
  <div class="col-lg-6 col-md-3 col-12">
    <div class="itemcard downloadcard">

      <img src='@/assets/img/svg/pricing-img-lg.svg' alt="">

      <h2
        style="margin-bottom: 5px;"
        id="bwtotal">{{ card.name }}GB bandwidth<br>Residential proxies</h2>
      <div class="pricing-amount" style="padding-top: 0;">

        <div class="monthly_price">

          <sup><span class="currency">$</span></sup>
          <span class="price" id="bwprice">{{ card.price }}</span>

        </div>

      </div>
      <ul style="text-align: left;">

        <li>7+ million residential pool.</li>
        <li>$4.6 per GB.</li>
        <li>HTTP and HTTPs proxies.</li>
        <li>User:pass proxy authentication</li>

      </ul>

      <div class="pricing-content">
        <a class="pricing-btn blue-btn"
           href="https://proxyscrape.com/purchase?type=beta_new_residential&amp;bandwidth=75"
           id="buybtn"
           onclick="gtag('event', 'purchase-checkout', {'event_category' : 'buykey'});">Purchase</a>
      </div>
    </div>

  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';

// eslint-disable-next-line vue/no-setup-props-destructure
const { card } = defineProps({
  card: Object,
});

</script>

<style scoped>

</style>
