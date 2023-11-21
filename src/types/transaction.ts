export type TransactionData = {
  id: string,
  name: string,
  email: string,
  tax_id: number,
  branch: number | null,
  account_type: 'Conta Poupança' | 'Conta Corrente' | null,
  account: number | null,
  bank_name: string | null,
  bank_code: string | null,
  pix_key?: string | number,
  pix_key_type?: 'aleatoria' | 'cnpj' | 'cpf' | 'email',
  status: 'rascunho' | 'validado',
  created_at: Date,
  updated_at: Date
}