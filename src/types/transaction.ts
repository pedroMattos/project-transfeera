export interface TransactionData {
  id: string,
  name: string,
  email: string,
  tax_id: number | string,
  branch?: number | string | null,
  account_type?: string | null,
  account?: number | string | null,
  bank_name?: string | null,
  bank_code?: string | null,
  pix_key?: string | number | string,
  pix_key_type?: string,
  status: string | Status,
  created_at: string,
  updated_at: string
}

export type Status = 'validado' | 'rascunho'