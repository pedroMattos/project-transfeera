<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HeaderApp from '@/components/header/headerApp.vue'
</script>

<template>
  <header-app /> 

  <RouterView />
</template>
