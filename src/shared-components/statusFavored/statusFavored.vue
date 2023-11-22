
<script lang="ts" setup>
import { statusFavoredEnum } from './statusFavored.enum';
const props = defineProps<{
  status: string
}>()

function getStatusClass(): string { return statusFavoredEnum[props.status] }
</script>
<template>
  <div class="status" :class="getStatusClass()">
    <p>{{ status }}</p>
  </div>
</template>

<style lang="scss" scoped>
  .status {
    width: 188px;
    p {
      text-transform: capitalize;
      color: #FFF;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      margin-bottom: 0;
      line-height: normal;
    }
    padding: 7px 0;
    border-radius: 20px;
    &.draft {
      background-color: var(--gray-400);
    }
    &.validated {
      background-color: var(--blue-250);
    }
  }
</style>
