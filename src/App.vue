<template>
  <Navigation />
  <router-view />
  <Footer />
</template>

<script lang="ts" setup>
import Navigation from '@/components/shared/Navigation.vue';
import Footer from '@/components/shared/FooterSection.vue';
</script>

<style>
@import url('./assets/css/fonts.css');

/* body {
  background-size: 100% 100%;
} */
</style>
