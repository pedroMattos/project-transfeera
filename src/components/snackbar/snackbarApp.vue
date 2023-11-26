<script lang="ts" setup>
import { useSnackbar } from '../../stores/snackbar/snackbar.store'
import { computed } from 'vue'

const snackbarStore = useSnackbar()
const data = computed(() => snackbarStore.snackData)
const t = true
</script>
<template>
  <v-snackbar
    v-model="data.open"
    :theme="data.variant"
    location="top right"
    :timeout="data.timestamp"
  >
    {{ data.text }}
  </v-snackbar>
</template>

<style lang="scss" scoped>
    .v-theme--error {
      :deep(.v-snackbar--variant-elevated, .v-snackbar--variant-flat) {
        background-color: var(--red-300);
      }
    }
    .v-theme--success {
    :deep(.v-snackbar--variant-elevated, .v-snackbar--variant-flat) {
      background-color: var(--blue-350);
    }
  }
</style>