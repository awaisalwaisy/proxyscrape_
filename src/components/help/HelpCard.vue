<template>
  <div class="col-lg-4 col-md-6 col-12">
    <div class="itemcard downloadcard">
      <a :href="card.link">
        <img :src="card.img" alt="" />
        <h2>{{ card.title }}</h2>
      </a>
      <p>{{ card.description }}</p>
      <div class="downloadbtn">
        <a :href="card.link">{{ card.linkTitle }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
// eslint-disable-next-line vue/no-setup-props-destructure
const { card } = defineProps({
  card: Object,
});
</script>
