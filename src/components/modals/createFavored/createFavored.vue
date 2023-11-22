<script lang="ts" setup>
import { useCreateModal } from '@/stores/createModal/createModal.store';
import { computed } from 'vue';
const createModalStore = useCreateModal()

const isOpenModal = computed(() => createModalStore.isOpen)
</script>
<template>
  <v-dialog
    :scrim="false"
    fullscreen
    transition="dialog-bottom-transition"
    v-model="isOpenModal"
  >
    <v-card>
      <v-toolbar dark color="var(--green-300)">
        <v-spacer></v-spacer>
        <v-btn icon dark @click="createModalStore.toggleOpen">
          <i class="fa-solid fa-xmark"></i>
        </v-btn>
      </v-toolbar>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
  :deep(.v-card header .v-toolbar__content) {
    max-height: 50px;
    i {
      color: white;
    }
  }

  .v-dialog--fullscreen > .v-overlay__content > .v-card, .v-dialog--fullscreen > .v-overlay__content > .v-sheet, .v-dialog--fullscreen > .v-overlay__content > form > .v-card, .v-dialog--fullscreen > .v-overlay__content > form > .v-sheet {
    min-height: calc(100vh - var(--header-height));
  }

  :deep(.v-overlay__content) {
    top: var(--header-height) !important;
  }
</style>
