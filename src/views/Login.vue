<template>
    <div class="container">
        <div class="auth-form">
            <div class="form-wrapper">
                <div class="input-wrapper">
                    <label for="username">E-mail</label>
                    <input type="text" name="username" v-model="login_form.email">
                </div>
    
                <div class="input-wrapper">
                    <label for="username">Password</label>
                    <input type="password" name="password" v-model="login_form.password">
                </div>
    
                <button @click="login">Sign In</button>
            </div>
            </div>
    </div>
</template>

<script setup langs="ts">
import { ref } from "vue";
import { useStore } from 'vuex'

const login_form = ref({})
const store = useStore()

const login = async () => {
    store.dispatch('login', login_form.value)
}
</script>

<style lang="scss">
    .auth-form{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: url('../assets/images/auth_background.webp');
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 20px;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background: rgba(0,0,0, .5);
            z-index: -1;
        }
        .form-wrapper{
            max-width: 480px;
            width: 100%;
            .input-wrapper{
                margin-bottom: 20px;
                display: flex;
                flex-direction: column;
                input{
                    padding: 10px;
                    border-radius: 5px;
                    border: none;
                    background: $light;
                    font-size: 15px;
                    &:focus{
                        outline: none;
                    }
                }
            }
            button{
                padding: 12px;
                background: #e30631;
                color: $light;
                border: none;
                border-radius: 5px;
                width: 100%;
                font-size: 15px;
                cursor: pointer;
                transition: background .3s;
                &:hover{
                    background: darken(#e30631, 10%);
                }
            }
        }
    }
</style>