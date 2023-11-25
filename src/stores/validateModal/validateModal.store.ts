import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { PatchParamsValidate, TransactionData } from '@/types/transaction'
import { ValidateModalController } from './validateModal.controller'
import { useGetCurrentDateTime } from '@/composables/useGetCurrentDateTime'

export const useValidateModal = defineStore('validate-modal', () => {
  const modalData = ref<TransactionData>()
  const controller = new ValidateModalController()
  const isOpen = ref<boolean>(false)

  const toggleOpen = () => isOpen.value = !isOpen.value

  function saveData(id: string, params: PatchParamsValidate) {
    params.updated_at = useGetCurrentDateTime()
    controller.savePatch(id, params)
    toggleOpen()
   }

   function deleteReceiver(id: string) {
    controller.delete(id)
    toggleOpen()
   }

   async function setModalData(id: string) {
    modalData.value = await controller.getReceiver(id)
   }

   return { saveData, modalData, isOpen, deleteReceiver, toggleOpen, setModalData }
})