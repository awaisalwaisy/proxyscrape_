<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title">
            <h1>Online proxy checker</h1>
            <img src="https://cdn.proxyscrape.com/img/section-shape.png" alt="section-shape" />
            <p>Put your proxies in the textbox and start checking your proxies!</p>
          </div>
        </div>

        <div class="col-lg-12 col-md-12 col-12">
          <CheckerOutput />
          <CheckerHandler />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import CheckerOutput from '@/components/freebies/checker/CheckerOutput.vue';
import CheckerHandler from '@/components/freebies/checker/CheckerHandler.vue';
</script>

<style scoped src="../assets/css/online-proxy-checker.css"></style>
