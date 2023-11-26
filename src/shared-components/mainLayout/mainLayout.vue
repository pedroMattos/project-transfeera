<script setup lang="ts">
import HeaderApp from '@/components/header/index.vue'
import CreateFavoredModal from '@/components/modals/createFavored/createFavored.vue'
import DetailsReceiver from '@/components/modals/detailsReceiver/detailsReceiver.vue'
import ValidateReceiver from '@/components/modals/validateReceiver/validateReceiver.vue'
import SnackbarApp from '../../components/snackbar/snackbarApp.vue'
</script>

<template>
  <section class="main-app">
    <header-app /> 
    <slot></slot>
    <create-favored-modal />
    <details-receiver />
    <validate-receiver />
    <snackbar-app />
  </section>
</template>

<style lang="scss" scoped>
  .main-app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>
