import { ref } from 'vue'
import { defineStore } from 'pinia'

type SnackData = {
  text: string,
  variant: string,
  timestamp: number,
  open: boolean
}

export const useSnackbar = defineStore('vsnackbar', () => {
  const isOpen = ref<boolean>(false)
  const snackText = ref<string>('')
  const snackData = ref<SnackData>({ text: '', variant: '', timestamp: 0, open: false })

  const toggleOpen = () => isOpen.value = !isOpen.value
  
  function setSnackText(text: string) {
    snackText.value = text
  }

  function setSnackdata(data: SnackData) {
    console.log(data)
    snackData.value = data
  }


  return { isOpen, toggleOpen, setSnackText, snackText, setSnackdata, snackData }
})