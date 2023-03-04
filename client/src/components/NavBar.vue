<script setup lang="ts">
    //import Router Link
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue';

    let isMenuActive = ref(false);
    let isModalActive = ref(false);

    function toggleMenu() {
      isMenuActive.value = !isMenuActive.value;
    }
</script>

<template>
<nav class="navbar is-spaced is-link"> <!--#2D1E2F-->
    <div class="navbar-brand">
        <a class="navbar-item logo" href="/">
            <img src="../assets/eLogger-logo.png" style="margin-right: 0.3em;">
            <div class="subtitle is-5 has-text-white">ELOGGER</div>
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
          <a class="button is-light is-rounded" @click="isModalActive=true">
            Log in
          </a>
        </div>
      </div>
    </div>
  </nav>


  <!--Login screen-->
<div class="modal" :class="{ 'is-active': isModalActive }" id="signup">
  <div class="modal-background"></div>
  <div class="modal-content">
      <form action="" class="box">
          <div class="column field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                  <input type="email" placeholder="Enter your email" class="input" required>
                  <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                  </span>
              </div>
          </div>
          <div class="column field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                  <input type="password" placeholder="Enter your password" class="input" required>
                  <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                  </span>
              </div>
              <a href="forget.html" class="is-size-7 has-text-primary">forgot your password?</a>
          </div>
          <div class="column">
              <button class="button is-primary is-fullwidth" type="submit">Login</button>
          </div>
          <div class="has-text-centered">
              <p class="is-size-7"> Don't have an account? <a href="#" class="has-text-primary">Sign up</a>
              </p>
          </div>
      </form>
  </div>
  <button class="modal-close is-large" @click="isModalActive=false" aria-label="close"></button>

  <button class="js-modal-trigger is-warning" data-target="signup">
      Signup
  </button>
</div> 







</template>

<style scoped></style>



