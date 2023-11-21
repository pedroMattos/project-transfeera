<script lang="ts" setup>
import ButtonApp from '@/shared-components/buttons/buttonApp/buttonApp.vue'
import TableView from './TableView.vue'
</script>

<template>
  <section>
    <button-app label="Excluir selecionados" theme="warn" />
    <table-view />
  </section>
</template>

<style lang="scss" scoped>
  section {
    background-color: white;
    height: var(--section-height);
    width: 100vw;
    padding: 39px 45px;
  }
</style>