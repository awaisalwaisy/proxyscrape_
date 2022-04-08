<template>
  <div
    class="col-12 payment-methods"
    style=""
  >
    <img
      alt="visa"
      height="37" src="@/assets/img/svg/visa.svg" style="">
    <img
      alt="paypal"
      height="37" src="@/assets/img/paypal.webp" style="">
    <img
      alt="bitcoin"
      height="37" src="@/assets/img/svg/bitcoin.svg" style="">
    <img
      alt="litecoin"
      height="37" src="@/assets/img/svg/litecoin.svg">
    <img
      alt="master"
      height="37" src="@/assets/img/svg/mastercard.svg" style="">
    <span style="font-size: 20px">+12 more</span>
  </div>
</template>

<script lang='ts' setup>

</script>

<style scoped>
.payment-methods {
  display: flex;
  justify-content: space-between;
  margin: 20px 0 20px;
}
</style>
