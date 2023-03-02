<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import HomeHero from './components/HomeHero.vue';
</script>

<template>
  <HomeHero />
  <NavBar />
  <div class="container">
    <RouterView />
  </div>

</template>

<style scoped>
</style>