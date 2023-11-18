
<script lang="ts" setup>
import HeaderApp from './headerApp.vue';
import HeaderViewModel from '../viewModel'
import { computed } from 'vue';

const viewModel = new HeaderViewModel()

const navLinks = computed(() => {
    return viewModel.getHeaderLinks()
})
</script>
<template>
    <header-app/>
    <nav>
        <div v-for="(navLink, index) in navLinks" :key="index">
            <router-link :to="navLink.routePath">{{ navLink.text }}</router-link>
        </div>
    </nav>
</template>