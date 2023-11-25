import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TransactionData } from '@/types/transaction'
import { DetailsModalController } from './detailsModal.controller'

export const useDetailsModal = defineStore('details-modal', () => {
 const modalData = ref<TransactionData>()
 const isOpen = ref<boolean>(false)
 const controller = new DetailsModalController()
 const isLoading = ref<boolean>(true)

 const toggleOpen = () => isOpen.value = !isOpen.value


 function saveData(id: string, email: string) {
  controller.savePatch(id, email)
  toggleOpen()
 }

 function deleteReceiver(id: string) {
  controller.delete(id)
  toggleOpen()
 }

 async function setModalData(id: string) {
  isLoading.value = true
  modalData.value = await controller.getReceiver(id)
  isLoading.value = false
 }


 return { saveData, modalData, isOpen, deleteReceiver, toggleOpen, setModalData, isLoading }
})