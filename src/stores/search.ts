import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearch = defineStore('search', () => {
  const searchData = ref(null)

  function setSearchData(data) {
    searchData.value = data
  }

  function clear() {
    searchData.value = null
  }

  return { setSearchData, clear, searchData }
})
