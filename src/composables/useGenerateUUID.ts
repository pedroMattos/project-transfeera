export function useGenerateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (value: string) => {
    const randomNumber = Math.random() * 16 | 0,
        finalValue = value === 'x' ? randomNumber : (randomNumber & 0x3 | 0x8)
    return finalValue.toString(16)
  })
}