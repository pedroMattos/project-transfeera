export interface TransactionData {
  id: string,
  name: string,
  email: string,
  tax_id: string,
  branch?: string | null,
  account_type?: string | null,
  account?: string | null,
  bank_name?: string | null,
  bank_code?: string | null,
  pix_key?: string | string,
  pix_key_type?: string,
  status: string | Status,
  created_at: string,
  updated_at: string
}

export type Status = 'validado' | 'rascunho'

export type PatchParamsValidate = {
  name: string,
  tax_id: string,
  email: string,
  status: 'rascunho',
  pix_key: string,
  pix_key_type: 'aleatoria' | 'cpf' | 'cnpj' | 'email',
  branch: string,
  bank_name: string,
  bank_code: string,
  account: string,
  account_type: 'Conta Corrent' | 'Conta Poupança',
  updated_at: string
}