import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRefetch = defineStore('refetch', () => {
  const refetch = ref<boolean>(false)

  function doARefetch() {
    refetch.value = true
  }

  function stopRefetch() {
    refetch.value = false
  }

  return { refetch, doARefetch, stopRefetch }
})
