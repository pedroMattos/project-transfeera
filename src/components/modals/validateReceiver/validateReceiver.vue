<script lang="ts" setup>
import { computed, ref } from 'vue';

import buttonApp from '../../../shared-components/buttons/buttonApp/buttonApp.vue';
import { useValidateModal } from '../../../stores/validateModal/validateModal.store';
import StatusFavored from '../../../shared-components/statusFavored/statusFavored.vue';
import TextField from '../../../shared-components/textField/textField.vue';
import SelectField from '../../../shared-components/selectField/selectField.vue';
import IconButtonApp from '@/shared-components/buttons/iconButton/iconButtonApp.vue';

const modalStore = useValidateModal()
const modalIsdOpen = computed(() => modalStore.isOpen)
const modalData = computed(() => modalStore.modalData)
const selectOptions = [
  { value: 'aleatoria', text: 'Chave Aleatória' },
  { value: 'cpf', text: 'CPF' },
  { value: 'cnpj', text: 'CNPJ' },
  { value: 'email', text: 'E-mail' },
]

</script>
<template>
  <v-dialog
    v-model="modalIsdOpen"
    width="auto"
  >
    <v-card>
      <v-toolbar dark color="transparent">
        <v-spacer></v-spacer>
        <v-btn icon dark @click="modalStore.toggleOpen">
          <i class="fa-solid fa-xmark"></i>
        </v-btn>
      </v-toolbar>
        <p class="title">{{ modalData?.name }}</p>
        <status-favored v-if="modalData?.status" :status="modalData.status" />
        <br/>
        <p class="title">Quais os dados do favorecido?</p>
        <br>
        <v-row no-gutters>
          <v-col cols="12" sm="6">
            <text-field
              v-if="modalData?.name"
              :value="modalData.name"
              placeholder="Nome/Razão social"
              type="text"
              label="Qual o nome completo ou razão social do favorecido?"
              @update:model="(value?: string) => modalData.name = value as string" />
              <br>
            <text-field
              v-if="modalData?.email"
              :value="modalData.email"
              placeholder="E-mail"
              type="email"
              label="Qual o e-mail para o envio do comprovante?"
              @update:model="(value?: string) => modalData.email = value as string" />
          </v-col>
          
          <v-col cols="12" sm="6">
            <text-field
              v-if="modalData?.tax_id"
              :value="modalData.tax_id"
              placeholder="CPF/CNPJ"
              type="text"
              label="Qual o CPF ou CNPJ?"
              @update:model="(value?: string) => modalData.tax_id = value as string" />
          </v-col>
        </v-row>
        <br>
        <br>
        <p class="title">Quais os dados bancários do favorecido?</p>
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <select-field
              v-if="modalData?.pix_key_type"
              label="Tipo de chave"
              name-field="key_type"
              :options="selectOptions" :value="modalData?.pix_key_type"
              @change:model="(value) => modalData.pix_key_type = value"
              />
              <br>
              <text-field
                v-if="modalData?.pix_key"
                :value="modalData.pix_key"
                placeholder="Chave pix"
                :type="modalData?.pix_key_type === 'email' ? 'email' : 'text'"
                label="Chave"
                @update:model="(value?: string) => modalData.pix_key = value as string" />
            </v-col>
          </v-row>
  
        <div class="actions">
          <div class="first">
            <button-app label="Voltar" theme="outlined" @click="modalStore.toggleOpen" />
          </div>
          <icon-button-app theme="danger" @click="() => modalData && modalStore.deleteReceiver(modalData.id)">
            <i class="fa-solid fa-trash"></i>
          </icon-button-app>
          <button-app label="Salvar" theme="primary" @click="() => modalData && modalStore.saveData(modalData.id, modalData)" />
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
    margin-bottom: 36px;
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
