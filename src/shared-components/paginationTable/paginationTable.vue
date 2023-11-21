<script lang="ts" setup>
import { ref } from 'vue';

const page = ref<number>(1)
defineProps<{
  pages: number
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
    :total-visible="3">
  </v-pagination>
</template>

<style lang="scss" scoped>
.v-pagination {
  margin-top: 70px;
}
</style>
