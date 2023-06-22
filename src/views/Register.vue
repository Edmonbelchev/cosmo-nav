<template>
    <div class="container">
        <div class="auth-form">
            <input type="email" v-model="register_form.email" placeholder="Email" />
            <input type="password" v-model="register_form.password" placeholder="Password" />
            <button @click="register">Register</button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import { useStore } from 'vuex'

const register_form = ref({})
const store = useStore()

const register = async () => {
    store.dispatch('register', register_form.value)
}

</script>