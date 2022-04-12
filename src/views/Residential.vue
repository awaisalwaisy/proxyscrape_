<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title">
            <h1>Residential proxies</h1>
            <img alt="section-shape" src="https://cdn.proxyscrape.com/img/section-shape.png" />
            <p>7+ million residential proxy pool<br /></p>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-xs-12">
          <div class="textcard">
            <h2>7 Million+ Rotating <br />Residential Proxies</h2>
            <br />
            <ul>
              <li>Back-connect rotating proxies</li>
              <li>Unlimited concurrent connections</li>
              <li>HTTP and HTTPs proxies.</li>
              <li>7 million IP proxy network</li>
              <li>Username & password authentication</li>
              <li>Select countries all around the globe</li>
            </ul>
            <a class="pricing-btn blue-btn mt-4" href="#pricing">PRICING</a>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-xs-12">
          <div class="imagecard">
            <img
              alt="how a residential proxy works"
              src="https://cdn.proxyscrape.com/img/how_residential_work.jpg"
            />
          </div>
        </div>
        <ResidentialProxies />
        <DProxyTypes />
        <TopLocations />

        <div class="col-12 text-center" style="margin-bottom: 30px">
          <h2 class="h4 mb-3">and 121 other countries</h2>
          <a class="btn" href="#pricing"> pricing </a>
        </div>

        <WhyResidential />

        <UseCases />

        <div class="col-12 text-center">
          <a class="btn" href="#pricing" style="margin-bottom: 30px"> pricing </a>
        </div>

        <RQuickRecap />
        <RPricingCard v-for="card in RProxiesPrice.slice(0, 6)" :key="card.id" :card="card" />
        <RPricingCardLG v-for="card in RProxiesPrice.slice(6, 8)" :key="card.id" :card="card" />
        <div class="textcard disclaimer">
          The residential proxies are currently in beta. By purchasing, you understand that there
          might be little problems with the proxies. If you encounter any issues, please report them
          as soon as possible.
        </div>
      </div>

      <div class="row">
        <PaymentMethods />
        <div class="col-12" style="padding-top: 10px; padding-bottom: 10px">
          <div class="elfsight-app-c349f1d8-7c7e-4b27-93c1-be19944e141b"></div>
        </div>
        <ResidentialFAQ />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import ResidentialProxies from '@/components/services/residential/ResidentialProxies.vue';
import DProxyTypes from '@/components/services/residential/RProxyTypes.vue';
import TopLocations from '@/components/services/residential/TopLocations.vue';
import WhyResidential from '@/components/services/residential/WhyResidential.vue';
import UseCases from '@/components/shared/UseCases.vue';
import RQuickRecap from '@/components/services/residential/RQuickRecap.vue';
import RPricingCard from '@/components/services/residential/RPricingCard.vue';
import RProxiesPrice from '@/services/rproxies-price';
import RPricingCardLG from '@/components/services/residential/RPricingCardLG.vue';
import PaymentMethods from '@/components/shared/PaymentMethods.vue';
import ResidentialFAQ from '@/components/services/residential/ResidentialFAQ.vue';
</script>

<style scoped></style>
