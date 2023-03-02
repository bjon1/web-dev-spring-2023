<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue';
  import Login from './components/Login.vue';
</script>

<template>
    <NavBar />
    <RouterView />
    <Login />
</template>

<style scoped>
</style>