<script lang="ts" setup>
import { useCreateModal } from '@/stores/createModal/createModal.store';
import TextField from '@/shared-components/textField/textField.vue'
import buttonApp from '@/shared-components/buttons/buttonApp/buttonApp.vue';
import { ref } from 'vue';
import { computed } from 'vue';
import type { CreateModalDto } from '@/stores/createModal/createModal.dto';
import SelectField from '../../../shared-components/selectField/selectField.vue';

const selectOptions = [
  { value: 'aleatoria', text: 'Chave Aleatória' },
  { value: 'cpf', text: 'CPF' },
  { value: 'cnpj', text: 'CNPJ' },
  { value: 'email', text: 'E-mail' },
]

const modalStore = useCreateModal()
const createModalStore = useCreateModal()

const emptyModalValue = modalStore.empty
const isOpenModal = computed(() => createModalStore.isOpen)

const formData = ref<CreateModalDto>(emptyModalValue)
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

      <v-container>
        <p class="modal-title">Quais os dados favorecido?</p>
        <v-form>
          <v-row>
            <v-col cols="6">
              <text-field
                placeholder="Nome"
                type="text"
                label="Qual o nome completo ou  razão social do favorecido?"
                :value="formData.name"
                @update:model="(value?: string) => formData.name = value as string"
              />
            </v-col>
            <v-col cols="6">
              <text-field
                placeholder="CPF ou CNPJ"
                type="text"
                label="Qual o CPF ou CNPJ?"
                :value="formData.tax_id"
                @update:model="(value?: string) => formData.tax_id = value as string"
              />
            </v-col>
            <v-col cols="12">
              <text-field
                placeholder="E-mail"
                type="email"
                label="Qual o e-mail para o envio do comprovante?"
                :value="formData.email"
                @update:model="(value?: string) => formData.email = value as string"
              />
            </v-col>
          </v-row>
          <p class="form-title">Qual a chave pix?</p>
          <v-row>
            <v-col cols="12">
              <select-field
                label="Tipo de chave"
                name-field="key_type"
                :options="selectOptions" :value="formData.pix_key_type"
                @change:model="(value?: string) => formData.pix_key_type = value"
              />
            </v-col>
            <v-col cols="12">
              <text-field
                placeholder="Digite a chave"
                type="text"
                label="Chave"
                :value="formData.pix_key"
                @update:model="(value?: string) => formData.pix_key = value as string"
              />
            </v-col>
          </v-row>

          <div class="actions">
            <button-app label="Cancelar" theme="outlined" @click="modalStore.toggleOpen" />
            <button-app label="Salvar" theme="primary" @click="() => modalStore.save(formData)" />
          </div>
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
  .v-container {
    margin-top: 70px;
    .modal-title, .form-title {
      color: var(--gray-500);
      font-size: 28px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
    .form-title {
      margin: 40px 0;
    }
  }
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
  .v-form {
    margin-top: 50px;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
  }
</style>
