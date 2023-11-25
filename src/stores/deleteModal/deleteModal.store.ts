import { ref } from 'vue'
import { defineStore } from 'pinia'
import { DeleteModalController } from './deleteModal.controller'
import { useRefetch } from '../refetch'

const useDeleteFavoredModal = defineStore('delete-favored-modal', () => {
  const modalIsdOpen = ref<boolean>(false)
  const controller = new DeleteModalController()
  const refetch = useRefetch()
  const selecteds = ref<string[]>([''])
  const modalText = ref<string>('')

  function confirmDelete(ids: string[]) {
    controller.delete(ids)
    
    modalIsdOpen.value = false
  }

  const cancelDelete = () => modalIsdOpen.value = false
  const openModal = (selectedsIds: string[]) => {
    modalIsdOpen.value = true
    selecteds.value = selectedsIds
    getModalText()
  }

  async function getModalText() {
    if (selecteds.value.length === 1) {
      const receiver = await controller.getReceiver(selecteds.value.at(0))
      modalText.value = `Você confirma a exclusão do favorecido ${receiver.name}?`

      return
    }

    modalText.value = `Você confirma a exclusão de ${selecteds.value.length} favorecidos?`
  }


  return { modalIsdOpen, confirmDelete, cancelDelete, openModal, selecteds, modalText }
})

export default useDeleteFavoredModal
