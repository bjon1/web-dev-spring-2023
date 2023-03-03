<script setup lang="ts">
    //import Router Link
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue';

    let isMenuActive = ref(false);

    function toggleMenu() {
      isMenuActive.value = !isMenuActive.value;
    }
</script>

<template>
<nav class="navbar is-spaced is-link"> <!--#2D1E2F-->
    <div class="navbar-brand">
        <a class="navbar-item logo" href="/">
            <img src="../assets/eLogger-black.png" class="scale-down">
        </a>

        <a class="navbar-burger is-active" data-target="navMenu" :class="{'is-active': isMenuActive}" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </a>

    </div>
    <div class="navbar-menu" id="navMenu">
        <div class="navbar-start">

        </div>
    </div>

    <div class="navbar-end">
        <RouterLink to="/" class="navbar-item">Home</RouterLink>
        <RouterLink to="/services" class="navbar-item">Services</RouterLink>
        <RouterLink to="/about" class="navbar-item">About</RouterLink>
        <RouterLink to="/contact" class="navbar-item">Contact</RouterLink>

        <!-- This stuff will be shown once the user logs in
        <div class="navbar-item has-dropdown is-hoverable">
            <a class ="navbar-link">
                My Statistics
            </a>
            <div class="navbar-dropdown">
                <a href="" class="navbar-item">
                    Cardio
                </a>
                <a href="" class="navbar-item">
                    Weights
                </a>
            </div>
        </div>
            <a class="navbar-item">
                My Friends
            </a>       
        -->

      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-danger is-rounded">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light is-rounded">
            Log in
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>



