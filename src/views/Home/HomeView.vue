<script setup lang="ts">
import SearchInput from '@/shared-components/searchInput/SearchInput.vue'
import SectionView from './components/ListFavoredSection/views/SectionView.vue'
import { useCreateModal } from '@/stores/createModal/createModal.store';
import { useSearch } from '../../stores/search';
import ListFavoredController from './components/ListFavoredSection/controller/listFavored.controller';
import debounce from 'debounce';
const createModalStore = useCreateModal()
const searchStore = useSearch()
const controller = new ListFavoredController()

function handleSearch(value?: string) {
  const debouncer = debounce(async () => {
    const data = await controller.search(value as string)
    searchStore.setSearchData(data)
  }, 500)

  debouncer()
}
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
      <search-input placeholder="Nome, CPF, agência ou conta" @update:model="handleSearch" />
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
