<template>
  <main>
    <Hero/>
    <div class="bottomjumbo">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div id="services" class="section-title services">
              <h2>Our services</h2>
              <p>for your proxy needs</p>
            </div>

          </div>
          <OurServices/>
          <ServicesDetail/>

          <div class="row serviceusecases">
            <div class="col-md-12">
              <div class="section-title services">
                <h2>Our proxy services</h2>

                <p>for all your needs</p>

              </div>
            </div>
            <UseCases />
            <div class="col-12 text-center"><a class="btn" href="#services">Start now</a></div>
          </div>

          <div class="col-12">
            <div class="section-title services clients">
              <h2>What our clients say</h2>
              <img
                alt="section-shape"
                src="https://cdn.proxyscrape.com/img/section-shape.png">
            </div>
          </div>
          <ClientReviews/>

          <div class="col-md-12">
            <div class="section-title " style="margin-bottom: 50px;">
              <h2>Blog</h2>
              <img alt="section-shape" src="https://cdn.proxyscrape.com/img/section-shape.png">
            </div>
          </div>
          <BlogSection/>
          <BannerSection/>

        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
// import '@/assets/css/home.css';
import Hero from '@/components/home/Hero.vue';
import OurServices from '@/components/home/OurServices.vue';
import ServicesDetail from '@/components/home/ServicesDetail.vue';
import UseCases from '@/components/shared/UseCases.vue';
import ClientReviews from '@/components/home/ClientReviews.vue';
import BlogSection from '@/components/home/BlogSection.vue';
import BannerSection from '@/components/home/BannerSection.vue'; </script>

<style scoped>
@import url('../assets/css/home.css');
</style>
