<script setup lang="ts">



</script>

<template>

    <div class="modal" :class="{ 'is-active': showModal }" id="signup">
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
        <button class="modal-close is-large" aria-label="close"></button>

        <button class="js-modal-trigger is-warning" data-target="signup">
            Signup
        </button>
    </div>

</template>





<style scoped></style>