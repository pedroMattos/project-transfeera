import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { PatchParamsValidate, TransactionData } from '@/types/transaction'
import { ValidateModalController } from './validateModal.controller'
import { useGetCurrentDateTime } from '@/composables/useGetCurrentDateTime'
import { useRefetch } from '../refetch'

export const useValidateModal = defineStore('validate-modal', () => {
  const modalData = ref<TransactionData>()
  const controller = new ValidateModalController()
  const refetch = useRefetch()
  const isOpen = ref<boolean>(false)

  const toggleOpen = () => isOpen.value = !isOpen.value

  async function saveData(id: string, params: PatchParamsValidate) {
    params.updated_at = useGetCurrentDateTime()
    await controller.savePatch(id, params)
    refetch.doARefetch()
    toggleOpen()
   }

   async function deleteReceiver(id: string) {
    await controller.delete(id)
    refetch.doARefetch()
    toggleOpen()
   }

   async function setModalData(id: string) {
    modalData.value = await controller.getReceiver(id)
   }

   return { saveData, modalData, isOpen, deleteReceiver, toggleOpen, setModalData }
})