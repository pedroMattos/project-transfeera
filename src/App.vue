<script setup lang="ts">
import { RouterView } from 'vue-router'
import layout from '@/shared-components/mainLayout/mainLayout.vue'
</script>

<template>
  <layout>
    <RouterView />
  </layout>
</template>

<style lang="scss" scoped>
  .main-app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style>
