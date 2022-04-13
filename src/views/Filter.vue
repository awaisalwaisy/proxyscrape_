<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title">
            <h1>Online proxy filter</h1>
            <img src="https://cdn.proxyscrape.com/img/section-shape.png" alt="section-shape" />
            <p>Filter proxies to ip:port</p>
          </div>
        </div>
        <div class="col-md-12">
          <div class="itemcard">
            <h4 id="linesremoved"></h4>
            <FilterInput />
            <FilterHandler />
          </div>
        </div>
        <BlogSection />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import BlogSection from '@/components/shared/BlogSection.vue';
import FilterInput from '@/components/freebies/filter/FilterInput.vue';
import FilterHandler from '@/components/freebies/filter/FilterHandler.vue';
</script>

<style scoped></style>
