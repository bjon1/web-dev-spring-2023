
<script setup lang "ts">
    import { ref }  from 'vue';
    const user = ref<String | null>(null);
    function login() {
        user.value = 'John Doe';
    }

    /*
        v-if="user" //if there's anything in the user, display this
        v-else
    */




</script>

