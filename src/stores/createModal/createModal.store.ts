import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { FavoredData } from '@/types/favored'
import { CreateModalDto } from './createModal.dto'

export const useCreateModal = defineStore('create-modal', () => {
  const empty = new CreateModalDto({})
  const isOpen = ref<boolean>(false)
  const modalData = ref<FavoredData>(empty)

  function setModaData(payload: FavoredData) {
    modalData.value = payload
  }

  function toggleOpen() {
    isOpen.value = !isOpen.value
  }

  return { isOpen, setModaData, toggleOpen }
})
