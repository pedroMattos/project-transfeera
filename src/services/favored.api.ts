import type { TransactionData } from "@/types/transaction"
import TableDataDto from "@/views/Home/components/ListFavoredSection/dtos/table_data.dto"

export default class FavoredApi {
  private readonly _API: string

  constructor() {
    this._API = '/api/path'
  }

  getReceivers() {
    // const endpoint = 'my/endpoint'
    const response = {
        "receivers": [
          {
            "id": "0accb825-db24-4288-9f29-c88b9ec656da",
            "name": "Julia Silva",
            "email": "julia.silva@exemplo.com",
            "tax_id": "59738860000170",
            "branch": null,
            "account": null,
            "account_type": null,
            "bank_name": null,
            "bank_code": null,
            "pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
            "pix_key_type": "aleatoria",
            "status": "rascunho",
            "created_at": "2023-10-25 16:00:10-03",
            "updated_at": "2023-10-25 16:00:10-03"
          },
          {
            "id": "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
            "name": "Rafael Costa",
            "email": "rafael.costa@exemplo.com",
            "tax_id": "79915139000115",
            "branch": "3402",
            "account": "517638",
            "account_type": "Conta Poupança",
            "bank_name": "Santander",
            "bank_code": "033",
            "pix_key": "79915139000115",
            "pix_key_type": "cnpj",
            "status": "validado",
            "created_at": "2023-10-25 16:01:10-03",
            "updated_at": "2023-10-25 16:01:10-03"
          },
        ]
    }

    const receivers = response.receivers

    return receivers.map((receiver: TransactionData) => {
      const receiverData = new TableDataDto(receiver).data

      return receiverData
    })
  }
}