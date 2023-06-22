<template>
    <header>
        <RouterLink to="/">
            <img alt="Vue logo" class="logo" src="@/assets/images/logo.svg" width="125" height="125" />
        </RouterLink>

        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink :to="{ name: 'dailyPic' }">Picture of the Day</RouterLink>
            <RouterLink :to="{ name: 'currentLocation' }">Current Location</RouterLink>
            <RouterLink :to="{ name: 'earthImage' }">Most Recent Earth Image</RouterLink>

            <RouterLink :to="{ name: 'login' }" v-if="!$store.state.user">
                Login
            </RouterLink>
            <RouterLink :to="{ name: 'register' }" v-if="!$store.state.user">
                Register
            </RouterLink>

            <button v-if="$store.state.user" @click="logout">Logout</button>
        </nav>

    </header>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()

const logout = () => {
    store.dispatch('logout')
}
</script>

<style lang="scss" scoped>
header {
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;

        a {
            text-decoration: none;
            color: $light;
            font-size: 16px;

            &:not(:last-of-type) {
                margin-right: 20px;
            }
        }
    }
}</style>