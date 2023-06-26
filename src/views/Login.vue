<template>
    <Transition>
    <div class="container">
        <div class="auth-form">
            <RouterLink to="/" class="go-back">
                <i class="cs-left-arrow"></i>
            </RouterLink>

            <div class="form-wrapper">
                <div class="heading">
                    <h1>
                        Let's sign you in.
                    </h1>
                    <span class="sub-title">
                        Welcome back. <br>
                        You've been missed!
                    </span>
                </div>

                <div class="input-wrapper">
                    <i class="cs-user"></i>
                    <input type="text" placeholder="E-mail" name="username" v-model="login_form.email">
                </div>
    
                <div class="input-wrapper">
                    <i class="cs-password"></i>
                    <input type="password" placeholder="Password" name="password" v-model="login_form.password">
                </div>
    
                <span class="register-label">
                    Don't have an account?
                    <RouterLink :to="{ name: 'register' }">
                        Register
                    </RouterLink>
                </span>
                <button @click="login">Sign In</button>
                
                <div class="google-btn" @click="loginWithGoogle">
                    <div class="google-icon-wrapper">
                        <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <p class="btn-text"><b>Sign in with Google</b></p>
                </div>
            </div>
        </div>
    </div>
    </Transition>
</template>

<script setup langs="ts">
import { ref } from "vue";
import { useStore } from 'vuex'

const login_form = ref({
  email: '',
  password: ''
})

const store = useStore()

const login = async () => {
    store.dispatch('login', login_form.value)
}

const loginWithGoogle = async () => {
  store.dispatch('loginWithGoogle')
};

</script>

<style lang="scss">
@import '@/dist/scss/auth.scss';

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>