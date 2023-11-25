import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { FavoredData } from '@/types/favored'
import { CreateModalDto } from './createModal.dto'
import { CreateModalController } from './createModal.controller'
import type { TransactionData } from '@/types/transaction'
import { useRefetch } from '../refetch'

export const useCreateModal = defineStore('create-modal', () => {
  const empty = new CreateModalDto({})
  const controller = new CreateModalController()
  const isOpen = ref<boolean>(false)
  const refetch = useRefetch()
  const modalData = ref<FavoredData>(empty)

  function setModaData(payload: FavoredData) {
    modalData.value = payload
  }

  function toggleOpen() {
    isOpen.value = !isOpen.value
  }

  function save(data: TransactionData) {
    controller.save(data)
    refetch.doARefetch()
    toggleOpen()
  }

  return { isOpen, setModaData, toggleOpen, empty, save }
})
