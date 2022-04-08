<template>
  <main style="min-height: 100vh;">
    <div class="container">
      <ShopContainer/>
      <CountryContainer/>
      <div class="row">
        <PaymentMethods/>
        <div class="col-12" style="padding-top: 10px;padding-bottom: 10px;">

          <div class="elfsight-app-c349f1d8-7c7e-4b27-93c1-be19944e141b"></div>
        </div>

        <div class="col-lg-12 col-md-12 col-xs-12">
          <div class="textcard disclaimer">
            <input id="countryselect" style="display: none;" type="number" value="2">
          </div>
        </div>

        <PremiumFAQ />
      </div>
      <div class="row" id="premiumsection">
        <div class="col-lg-12 col-md-12 col-12">
          <div class="itemcard">
            <div id="buy">
              <div id="slide1">
                <h2>Already have ProxyScrape premium?</h2>
                <a class="loginbtn">
                  <a href="/login">
                    <button type="submit" id="showhow" class="btn btn-blue">login</button>
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang='ts' setup>

import ShopContainer from '@/components/services/premium/ShopContainer.vue';
import CountryContainer from '@/components/services/premium/CountryContainer.vue';
import PaymentMethods from '@/components/shared/PaymentMethods.vue';
import PremiumFAQ from '@/components/services/premium/PremiumFAQ.vue'; </script>

<style scoped>

</style>
