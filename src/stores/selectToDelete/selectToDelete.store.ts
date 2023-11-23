import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSelectToDelete = defineStore('select-to-delete', () => {
  const selecteds = ref<string[]>([])
  const totalItems = ref<number>()


  function setTotalItems(itemsLength?: number) {
    totalItems.value = itemsLength
  }

  function setSelecteds(payload: string[]) {
    console.log(totalItems.value, selecteds.value.length)
    if (totalItems.value && totalItems.value === selecteds.value.length) {
      selecteds.value = []
      return
    }
    selecteds.value = payload
  }

  function selectOne(payload: string) {
    selecteds.value.push(payload)
  }

  function removeSelecion(index: number) {
    selecteds.value.splice(index, 1)
  }

  return { selecteds, setSelecteds, removeSelecion, selectOne, setTotalItems }
})
