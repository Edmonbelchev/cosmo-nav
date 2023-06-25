
<template>
  <Nav />
  <RouterView />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import Nav from './components/Nav.vue'

const store = useStore()
onBeforeMount(() => {
  store.dispatch('fetchUser')
})

</script>
  
<style scoped></style>
