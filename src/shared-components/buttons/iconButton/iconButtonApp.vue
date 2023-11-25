<script lang="ts" setup>
import type { Theme } from '@/types/buttons'
import ButtonViewModel from '../viewModel'
defineProps<{
  theme: Theme,
  disabled?: boolean
}>()

const viewModel = new ButtonViewModel()
</script>

<template>
  <v-btn :variant="viewModel.getTheme(theme)" icon :class="viewModel.getThemeClass(theme)" :disabled="disabled">
    <slot></slot>
  </v-btn>
</template>

<style lang="scss" scoped>
  .v-btn {
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 17px 15px;
    max-width: 62px;
    min-width: 62px;
    border-radius: 4px;
    &.warn-btn {
      background-color: var(--red-100);
      height: unset;
    }
    &.primary-btn {
      background-color: var(--blue-350);
      height: unset;
    }
    &.outlined-btn {
      border: 1px solid var(--green-300);
      height: unset;
      color: var(--green-300);
    }
    &.danger-btn {
      background-color: var(--red-450);
      height: unset;
    }
  }
</style>