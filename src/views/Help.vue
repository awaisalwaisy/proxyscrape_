<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title">
            <h1>Help center</h1>
            <img src="https://cdn.proxyscrape.com/img/section-shape.png" alt="section-shape" />
            <p>Have problems or want to help? Do it here.</p>
          </div>
        </div>
        <HelpCard v-for="card in HelpCenter" :key="card.id" :card="card" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import HelpCard from '@/components/help/HelpCard.vue';
import HelpCenter from '@/services/help-center';
</script>
