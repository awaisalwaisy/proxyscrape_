<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title ">
            <h1>Dedicated proxies</h1>
            <img
              alt="section-shape"
              src="https://cdn.proxyscrape.com/img/section-shape.png"
            />
            <p>Proxies that are only used by you!</p>
          </div>
        </div>

        <DPricingCard v-for='card in DProxiesPrice' :key='card.id' :card='card' />

      </div>
    </div>
  </main>
</template>

<script lang='ts' setup>

import DPricingCard from '@/components/services/dedicated/DPricingCard.vue';
import DProxiesPrice from '@/services/dproxies-price';
</script>

<style scoped>

</style>
