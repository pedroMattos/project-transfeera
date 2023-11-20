<script setup lang="ts">
defineProps<{
  placeholder: string,
}>()
</script>

<template>
  <div class="search-wrapper">
    <v-text-field
      variant="outlined"
      :placeholder="placeholder"
      base-color="white"
      flat
      density="compact"
      single-line
      rounded="5"
      hide-details
    >
      <slot name="append-inner-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
      </slot>
    </v-text-field>
  </div>
</template>

<style lang="scss" scoped>
  :deep(.v-field__input) {
    min-height: 31px;
    width: 254px;
    padding: 8px 5px;
    color: var(--gray-300);
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    background-color: white;
  }
  .v-input {
    width: 254px;
    height: 31px;
  }
  :deep(.v-input__control, .v-input) {
    width: 254px;
    height: 31px;
    .v-field.v-field--appended {
      padding: 0;
    }
  }
  .search-wrapper {
    width: fit-content;
    margin-right: 45px;
  }
</style>
