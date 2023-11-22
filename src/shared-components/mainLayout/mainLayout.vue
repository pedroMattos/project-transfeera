<script setup lang="ts">
import HeaderApp from '@/components/header/index.vue'
import CreateFavoredModal from '@/components/modals/createFavored/createFavored.vue'
</script>

<template>
  <section class="main-app">
    <header-app /> 
    <slot></slot>

    <create-favored-modal />
  </section>
</template>

<style lang="scss" scoped>
  .main-app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>
