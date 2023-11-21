<script lang="ts" setup>
import type { Theme } from '@/types/buttons'
import ButtonViewModel from './viewModel'
defineProps<{
  label: string,
  theme: Theme
}>()

const viewModel = new ButtonViewModel()
</script>

<template>
  <v-btn :variant="viewModel.getTheme(theme)" :class="viewModel.getThemeClass(theme)">
    {{ label }}
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
    &.warn-btn {
      background-color: var(--red-100);
      height: unset;
    }
  }
</style>