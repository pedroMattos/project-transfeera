<script setup lang="ts">
import { useFormat } from '@/composables/useFormat';
import { ref } from 'vue'
const props = defineProps<{
  placeholder?: string,
  type?: 'email' | 'text',
  label?: string,
  value?: string
}>()

const emit = defineEmits<{
  (event: 'update:model', value: string | undefined): void
}>()

const fieldValue = ref<string | undefined>(props.value)
</script>

<template>
  <div class="wrapper">
    <div class="input-label">{{ label }}</div>
    <v-text-field
      variant="outlined"
      focused
      :placeholder="placeholder"
      :type="type || 'text'"
      base-color="white"
      flat
      density="compact"
      single-line
      v-model="fieldValue"
      rounded="5"
      hide-details
      @update:modelValue="emit('update:model', fieldValue)"
    />
  </div>
</template>

<style lang="scss" scoped>
  :deep(.v-field__input) {
    min-height: 31px;
    padding: 8px 5px;
    color: var(--gray-300);
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    background-color: white;
  }
  .v-input {
    height: 31px;
  }
  :deep(.v-input__control, .v-input) {
    min-width: 350px;
    height: 31px;
    .v-field.v-field--appended {
      padding: 0;
    }
  }
  :deep(.v-field__outline) {
    &:focus-visible {
      outline: none;
    }
    border-radius: 4px;
    border: 2px solid #EEE;
  }
  :deep(.v-field.v-field--focused .v-field__outline, .v-input.v-input--error .v-field__outline) {
    --v-field-border-opacity: 0;
  }
  .wrapper {
    width: fit-content;
    margin-right: 45px;
  }
  .input-label {
    color: #757575;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
</style>
