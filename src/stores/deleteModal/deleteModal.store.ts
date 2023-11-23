import { ref } from 'vue'
import { defineStore } from 'pinia'
import { DeleteModalController } from './deleteModal.controller'

const useDeleteFavoredModal = defineStore('delete-favored-modal', () => {
  const modalIsdOpen = ref<boolean>(false)
  const controller = new DeleteModalController()

  function confirmDelete(id: string) {
    controller.delete(id)
  }

  const cancelDelete = () => modalIsdOpen.value = false
  const openModal = () => modalIsdOpen.value = true


  return { modalIsdOpen, confirmDelete, cancelDelete, openModal }
})

export default useDeleteFavoredModal
