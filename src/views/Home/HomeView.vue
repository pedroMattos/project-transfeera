<script setup lang="ts">
import SearchInput from '@/shared-components/searchInput/SearchInput.vue'
import SectionView from './components/ListFavoredSection/views/SectionView.vue'
import { useCreateModal } from '@/stores/createModal/createModal.store';
const createModalStore = useCreateModal()
</script>

<template>
  <main>
    <section class="favored-section">
      <div class="favoreds">
        <h1>Seus Favorecidos</h1>
        <v-btn icon @click="createModalStore.toggleOpen">
          <slot name="icon"><i class="fa-solid fa-plus"></i></slot>
        </v-btn>
      </div>
      <search-input placeholder="Nome, CPF, agência ou conta" />
    </section>

    <section-view />
  </main>
</template>

<style lang="scss" scoped>
  main {
    flex: 1;
    section.favored-section {
      display: flex;
      align-items: center;
    }
    h1 {
      color: var(--gray-450);
      font-size: 28px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
    .favoreds {
      display: flex;
      align-items: center;
      margin: var(--margin-favoreds) 0 var(--margin-favoreds) 44px;
      gap: 3px;
      flex: 1;
      button {
        background-color: var(--green-300);
        color: white;
        &.v-btn--icon {
          width: 41px;
          height: var(--button-height);
        }
      }
    }
  }
</style>
