import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TransactionData } from '@/types/transaction'
import { DetailsModalController } from './detailsModal.controller'

export const useDetailsModal = defineStore('details-modal', () => {
 const modalData = ref<TransactionData>()
 const isOpen = ref<boolean>(false)
 const controller = new DetailsModalController()

 function saveData(id: string, email: string) {
  controller.savePatch(id, email)
 }

 function deleteReceiver(id: string) {
  controller.delete(id)
 }

 const toggleOpen = () => isOpen.value = !isOpen.value


 return { saveData, modalData, isOpen, deleteReceiver, toggleOpen }
})