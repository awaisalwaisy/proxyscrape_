<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-title">
            <h1>Contact ProxyScrape</h1>
            <img src="https://cdn.proxyscrape.com/img/section-shape.png" alt="section-shape" />
            <p>Contact us if the FAQ doesn't answer your question.</p>
          </div>
        </div>
        <div class="col-md-12">
          <div class="itemcard">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ContactForm from '@/components/help/ContactForm.vue';
</script>
