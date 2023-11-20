<script setup lang="ts">
import SearchInput from '@/shared-components/searchInput/SearchInput.vue'
</script>

<template>
  <main>
    <section>
      <div class="favoreds">
        <h1>Seus Favorecidos</h1>
        <v-btn icon>
          <slot name="icon"><i class="fa-solid fa-plus"></i></slot>
        </v-btn>
      </div>
      <search-input placeholder="Nome, CPF, agência ou conta" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
  main {
    flex: 1;
    section {
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
      margin: 45px 0 42px 44px;
      gap: 3px;
      flex: 1;
      button {
        background-color: var(--green-300);
        color: white;
        &.v-btn--icon {
          width: 41px;
          height: 41px;
        }
      }
    }
  }
</style>
