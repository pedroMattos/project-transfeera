
export function useFormat() {

    const cnpjCpf = (value: string) => {
      const numbers = value.replace(/\D/g, '')
      if (numbers.length === 11) {
        return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
      } else if (numbers.length === 14) {
        return numbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
      }
    }

    return { cnpjCpf }
}