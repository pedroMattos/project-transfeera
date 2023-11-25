import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TransactionData } from '@/types/transaction'
import { DetailsModalController } from './detailsModal.controller'
import { useRefetch } from '../refetch'

export const useDetailsModal = defineStore('details-modal', () => {
 const modalData = ref<TransactionData>()
 const isOpen = ref<boolean>(false)
 const refetch = useRefetch()
 const controller = new DetailsModalController()
 const isLoading = ref<boolean>(true)

 const toggleOpen = () => isOpen.value = !isOpen.value


 async function saveData(id: string, email: string) {
  await controller.savePatch(id, email)
  refetch.doARefetch()
  toggleOpen()
 }

 async function deleteReceiver(id: string) {
  await controller.delete(id)
  refetch.doARefetch()
  toggleOpen()
 }

 async function setModalData(id: string) {
  isLoading.value = true
  modalData.value = await controller.getReceiver(id)
  isLoading.value = false
 }


 return { saveData, modalData, isOpen, deleteReceiver, toggleOpen, setModalData, isLoading }
})