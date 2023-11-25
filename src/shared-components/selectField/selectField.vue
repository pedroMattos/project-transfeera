<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
type selectType = {
  value: string,
  text: string
}

const props = defineProps<{
  nameField: string,
  label?: string,
  value?: string,
  options: selectType
}>()

const emit = defineEmits<{
  (event: 'change:model', value: string): void
}>()

const selected = ref<selectType>(props.value)
</script>

<template>
  <div class="wrapper">
    <label :for="nameField">{{ label }}</label>
    <select v-model="selected" :id="nameField" @change="emit('change:model', selected)">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value">
      {{ option.text }}
    </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
  label {
    color: var(--gray-450);
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    width: 350px;
    &:before {
      position: absolute;
      content: '▾';
      right:10px;
      bottom: 3px;
      color: #D8D8D8;
      font-size: 20px;
    }
  }

  select {
    border-radius: 4px;
    border: 2px solid #EEE;
    padding: 5px 10px;
    cursor: pointer;
    color: var(--gray-300);
    font-size: 14px;
    &:focus-visible {
      outline: none;
    }
  }
</style>