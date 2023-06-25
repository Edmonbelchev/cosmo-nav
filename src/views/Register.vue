<template>
    <div class="container">
        <div class="auth-form">
            <RouterLink to="/" class="go-back">
                <i class="cs-left-arrow"></i>
            </RouterLink>
            
            <div class="form-wrapper">
                <div class="heading">
                    <h1>
                        Hi there!
                    </h1>
                    <span class="sub-title">
                        Welcome to Cosmo Nav.
                    </span>
                </div>

                <div class="input-wrapper">
                    <i class="cs-user"></i>
                    <input type="email" v-model="register_form.email" placeholder="Email" />
                </div>

                <div class="input-wrapper">
                    <i class="cs-password"></i>
                    <input type="password" v-model="register_form.password" placeholder="Password" />
                </div>

                <div class="input-wrapper">
                    <i class="cs-location"></i>
                    <input type="text" v-model="register_form.address" placeholder="Address" />
                </div>

                <div class="input-wrapper">
                    <i class="cs-calendar"></i>
                    <input type="input" v-model="register_form.age" placeholder="Age" />
                </div>

                <span class="register-label">
                    Already have an account?
                    <RouterLink :to="{ name: 'login' }">
                        Login
                    </RouterLink>
                </span>
                <button @click="register">Register</button>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import { useStore } from 'vuex'

const register_form = ref({
    email: '',
    password: '',
    age: '',
    address: ''
})

const store = useStore()

const register = async () => {
    store.dispatch('register', register_form.value)
}

</script>

<style lang="scss" scoped>
@import '@/dist/scss/auth.scss';
</style>