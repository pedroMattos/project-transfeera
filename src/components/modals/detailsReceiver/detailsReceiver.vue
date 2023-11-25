<script lang="ts" setup>
import { computed } from 'vue';

import buttonApp from '@/shared-components/buttons/buttonApp/buttonApp.vue';
import IconButtonApp from '@/shared-components/buttons/iconButton/iconButtonApp.vue';
import { useDetailsModal } from '../../../stores/detailsModal/detailsModal.store';
import StatusFavored from '@/shared-components/statusFavored/statusFavored.vue';
import TextField from '@/shared-components/textField/textField.vue';

const modalStore = useDetailsModal()
const modalIsdOpen = computed(() => modalStore.isOpen)
const modalData = computed(() => modalStore.modalData)
const isLoading = computed(() => modalStore.isLoading)

</script>
<template>
  <v-dialog
    v-model="modalIsdOpen"
    width="635"
  >
    <v-card>
      <v-toolbar dark color="transparent">
        <v-spacer></v-spacer>
        <v-btn icon dark @click="modalStore.toggleOpen">
          <i class="fa-solid fa-xmark"></i>
        </v-btn>
      </v-toolbar>
      <div v-if="!isLoading">
        <p class="title">{{ modalData?.name }}</p>
        <status-favored v-if="modalData?.status" :status="modalData.status" />
        <br/>
        <p class="detail-title">CPF/CNPJ</p>
        <p class="detail">{{ modalData?.tax_id }}</p>
  
        <v-row no-gutters>
          <v-col cols="12" sm="6">
            <p class="detail-title">Banco</p>
            <p class="detail">{{ modalData?.bank_name }}</p>
            <p class="detail-title">Tipo de conta</p>
            <p class="detail">{{ modalData?.account_type }}</p>
          </v-col>
          <v-col cols="12" sm="6">
            <p class="detail-title">Agência</p>
            <p class="detail">{{ modalData?.branch }}</p>
            <p class="detail-title">{{ modalData?.account_type }}</p>
            <p class="detail">{{ modalData?.account }}</p>
          </v-col>
        </v-row>
        <br>
        <text-field
          v-if="modalData?.email"
          :value="modalData.email"
          placeholder="E-mail"
          type="email"
          label="E-mail do favorecido"
          @update:model="(value) => modalData.email = value as string"
        />
  
  
  
        <div class="actions">
          <div class="first">
            <button-app label="Voltar" theme="outlined" @click="modalStore.toggleOpen" />
          </div>
          <icon-button-app theme="danger" @click="() => modalData && modalStore.deleteReceiver(modalData.id)">
            <i class="fa-solid fa-trash"></i>
          </icon-button-app>
          <button-app label="Salvar" theme="primary" @click="() => modalData && modalStore.saveData(modalData.id, modalData?.email)" />
        </div>
      </div>
      <v-progress-circular v-else indeterminate :size="70"></v-progress-circular>
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
    margin-bottom: 36px;
  }
  .detail-title {
    color: var(--gray-450);
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 14px;
    margin-top: 30px;
  }
  .detail {
    color: var(--gray-500);
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    gap: 20px;
    .first {
      flex: 1;
    }
  }
</style>
