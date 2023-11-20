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

<style lang="scss" scoped>
    nav {
        height: 50px;
        padding: 17px 50px 0;
        background-color: var(--green-300);
        a {
            text-decoration: none;
            color: #FFF;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
</style>
