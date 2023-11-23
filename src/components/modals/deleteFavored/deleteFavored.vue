<script lang="ts" setup>
import { computed } from 'vue';

import buttonApp from '@/shared-components/buttons/buttonApp/buttonApp.vue';
import useDeleteFavoredModal from '../../../stores/deleteModal/deleteModal.store';

const modalStore = useDeleteFavoredModal()
const modalIsdOpen = computed(() => modalStore.modalIsdOpen)

</script>
<template>
  <v-dialog
    v-model="modalIsdOpen"
  >
    <v-card>
      <v-toolbar dark color="transparent">
        <v-spacer></v-spacer>
        <v-btn icon dark @click="modalStore.cancelDelete">
          <i class="fa-solid fa-xmark"></i>
        </v-btn>
      </v-toolbar>
      <p class="title">Excluir favorecido</p>
      <p>Você confirma a exclusão do favorecido X?</p>
      <br/>
      <p>O Histórico de pagamentos para este favorecido será mantido, mas ele será removido da sua lista
        de favorecidos.
      </p>

      <div class="actions">
        <button-app label="Cancelar" theme="outlined" @click="modalStore.cancelDelete" />
        <button-app label="Confirmar exclusão" theme="danger" @click="modalStore.confirmDelete" />
      </div>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
  .v-card {
    padding: 20px 38px 31px;
  }
  .title {
    color: var(--gray-500);
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
  }
</style>
