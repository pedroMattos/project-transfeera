import type { TransactionData } from "@/types/transaction"
import TableDataDto from "@/views/Home/components/ListFavoredSection/dtos/table_data.dto"
import { ApiRepository } from "./apiRepository"

export default class FavoredApi {
  private readonly _API: ApiRepository

  constructor() {
    this._API = new ApiRepository('http://localhost:3000')
  }

  async getReceivers() {
    const response = await this._API.getAll()
    const receivers = response

    return receivers.map((receiver: TransactionData) => {
      const receiverData = new TableDataDto(receiver).data

      return receiverData
    })
  }
}