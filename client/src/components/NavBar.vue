<script setup lang="ts">
    //import Router Link
    import { RouterLink } from 'vue-router';
    const isMenuActive=false;
</script>

<template>
<nav class="navbar is-dark-blue is-link is-spaced has-shadow">
    <div class="navbar-brand">
        <a class="navbar-item" href="#">
            <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28">
        </a>

        <a class="navbar-burger">

        </a>
    </div>
    <div class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item">
                Home
            </a>
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
        </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-danger">
            <strong>Sign up</strong>
          </a>
          <a class="button is-danger">
            Log in
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>



