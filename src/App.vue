<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderApp from '@/components/header/index.vue'
</script>

<template>
  <section class="main-app">
    <header-app /> 
    <RouterView />
  </section>
</template>

<style lang="scss" scoped>
  .main-app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>
