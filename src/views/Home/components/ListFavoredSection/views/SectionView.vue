<script lang="ts" setup>
import ButtonApp from '@/shared-components/buttons/buttonApp/buttonApp.vue'
import { useSelectToDelete } from '@/stores/selectToDelete/selectToDelete.store';
import DeleteFavoredModal from '@/components/modals/deleteFavored/deleteFavored.vue'
import { TableViewModel } from '../viewModel';
import TableView from './TableView.vue'
import { computed } from 'vue';

const selectedStore = useSelectToDelete()
const viewModel = new TableViewModel()

const selecteds = computed(() => selectedStore.selecteds)
</script>

<template>
  <section>
    <button-app
      label="Excluir selecionados"
      theme="warn"
      :disabled="!selecteds.length"
      @click="viewModel.openDeleteModal"
    />
    <table-view />
    <delete-favored-modal />
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