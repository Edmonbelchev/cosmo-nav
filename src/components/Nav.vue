<template>
    <header>
        <RouterLink to="/" class="logo">
            <img alt="Vue logo" src="/assets/images/logo.svg" width="125" height="125" />
        </RouterLink>

        <a class="menu-toggler" ref="menuToggler" href="javascript:void(0);" @click="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
        </a>

        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink :to="{ name: 'dailyPic' }">Picture of the Day</RouterLink>
            <RouterLink :to="{ name: 'currentLocation' }">Current Location</RouterLink>
            <RouterLink :to="{ name: 'earthImage' }">Most Recent Earth Image</RouterLink>

            <div class="auth-wrapper" v-if="!store.state.user">
                <RouterLink :to="{ name: 'login' }" v-if="!store.state.user">
                    Login
                </RouterLink>
    
                <RouterLink :to="{ name: 'register' }" v-if="!store.state.user">
                    Register
                </RouterLink>
            </div>

            <div class="profile-wrapper" v-if="store.state.user">
                <span class="label">Profile</span>
                <div class="drop-down">
                    <RouterLink :to="{ name: 'profile' }">
                        <i class="cs-user"></i>
                        View Profile
                    </RouterLink>

                    <RouterLink :to="{ name: 'favoriteImages' }">
                        <i class="cs-heart"></i> 
                        Favorite Images
                    </RouterLink>

                    <a href="javascript:void(0);" @click="logout">
                        <i class="cs-sign-out"></i> 
                        Logout
                    </a>
                </div>
            </div>
        </nav>

    </header>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { RouterLink, useRoute } from "vue-router"
import { useStore } from "vuex"

const store = useStore()
const route = useRoute()

const logout = () => {
    store.dispatch("logout")
}

const toggleMenu = () => {
    const menuToggler: HTMLElement = document.querySelector(".menu-toggler")!
    const nav: HTMLElement = document.querySelector("nav")!

    if(!menuToggler.classList.contains("active")){
        menuToggler.classList.add("active")
        nav.classList.add("active")
    }else{
        menuToggler.classList.remove("active")
        nav.classList.remove("active")
    }
}

watch(route, (to, from, next) => {
    if(document.querySelector(".menu-toggler.active")){
        toggleMenu()
    }
});
</script>

<style lang="scss" scoped>
header {
    position: relative;
    z-index: 999;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    @media (min-width: 768px){
        padding: 0 40px;
    }
    .logo{
        width: 100%;
        max-width: 90px;
        max-height: 90px;
        @media (min-width: 768px){
            max-width: 130px;
            max-height: 130px;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }

    nav {
        display: flex;
        align-items: center;
        @media(max-width: 768px) {
            position: fixed;
            left: -100%;
            top: 0;
            background: #212121;
            width: 360px;
            height: 100%;
            flex-direction: column;
            transition: .5s left;
            padding: 20px;
            align-items: flex-start;
            &.active {
                left: 0;
            }

            .auth-wrapper{
                margin-top: auto;
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 20px 0;
                border-top: 1px solid #4a4a4a;
                a{
                    margin-bottom: 0;
                    padding: 5px 10px;
                    background: #e30631;
                    border-radius: 5px;
                    min-width: 150px;
                    text-align: center;
                }
            }

            .profile-wrapper{
                margin-top: auto;
                width: 100%;
                display: flex;
                flex-direction: column;
                padding: 20px 0;
                border-top: 1px solid #4a4a4a;
                color: $light;
                .label{
                    font-size: 20px;
                    margin-bottom: 20px;
                }
                .drop-down{
                    display: flex;
                    flex-direction: column;
                    a{
                        &:last-of-type{
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
        @media (max-width: 480px){
            width: 100%;
            padding-top: 80px;
        }

        a {
            text-decoration: none;
            color: $light;
            font-size: 16px;
            margin: 0 0 20px;

            @media (min-width: 769px) {
                margin: 0 20px 0;
            }
        }

        button{
            padding: 10px;
            background: #e30631;
            border: none;
            border-radius: 5px;
            color: $light;
            font-size: 15px;
        }
        
        .profile-wrapper{
            position: relative;
            cursor: pointer;
            @media (min-width: 768px){
                &:hover{
                    .drop-down{
                        display: flex;
                    }
                }
                &:before{
                    content: '';
                    position: absolute;
                    bottom: -40px;
                    height: 40px;
                    left: 0;
                    width: 100%;
                    min-width: 150px;
                    left: -50%;
                    transform: translateX(-50%);
                }
                .drop-down{
                    display: none;
                    position: absolute;
                    flex-direction: column;
                    top: 40px;
                    left: -50%;
                    transform: translateX(-50%);
                    background: #373737;
                    padding: 0 10px;
                    border-radius: 5px;
                    min-width: 180px;
                    a{
                        margin: 0;
                        padding: 10px;
                        &:not(:last-of-type){
                            border-bottom: 1px solid #181818;
                        }
                    }
                }
            }
        }

        .drop-down i{
            font-size: 14px;
            margin-right: 5px;
        }
    }

    .menu-toggler {
        z-index: 1;
        @media(min-width: 769px){
            display: none;
        }
        span {
            display: block;
            width: 33px;
            height: 4px;
            margin-bottom: 5px;
            position: relative;
            background: #cdcdcd;
            border-radius: 3px;
            z-index: 1;
            transform-origin: 4px 0px;
            transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
            opacity 0.55s ease;
            pointer-events: none;
            &:first-child {
                transform-origin: 0% 0%;
            }

            &:nth-last-child(2) {
                transform-origin: 0% 100%;
            }
        }

        &.active{
            span{
                opacity: 1;
                transform: rotate(-45deg) translate(-2px, -1px);
                &:nth-last-child(2)
                {
                    opacity: 0;
                    transform: rotate(0deg) scale(0.2, 0.2);
                }

                &:nth-last-child(3)
                {
                    transform: rotate(45deg) translate(0, -1px);
                }

            }
        }
    }
}
</style>