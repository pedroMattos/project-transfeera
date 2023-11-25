<script lang="ts" setup>
import { ref } from 'vue';

const page = ref<number>(1)
defineProps<{
  pages: number | string
}>()
const emit = defineEmits<{
  (event: 'pageChange', value: number): void
}>()
</script>

<template>
  <v-pagination
    @update:modelValue="(value) => emit('pageChange', value)"
    :length="pages || 1"
    density="compact"
    v-model="page"
    next-icon="fa-solid fa-chevron-right"
    prev-icon="fa-solid fa-chevron-left"
    :total-visible="4">
  </v-pagination>
</template>

<style lang="scss" scoped>
.v-pagination {
  margin-top: 70px;
  :deep(.v-btn) span {
    color: #3D8CD8;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
