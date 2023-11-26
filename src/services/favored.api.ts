import type { TransactionData } from "@/types/transaction"
import TableDataDto from "@/views/Home/components/ListFavoredSection/dtos/table_data.dto"
import { ApiRepository } from "./apiRepository"

export default class FavoredApi {
  private readonly _API: ApiRepository

  constructor() {
    this._API = new ApiRepository('http://localhost:3000')
  }

  async getReceivers(page: number) {
    const response = await this._API.getAll(page)
    const receivers = response.reverse()

    return receivers.map((receiver: TransactionData) => {
      const receiverData = new TableDataDto(receiver).data

      return receiverData
    })
  }

  async search(term: string) {
    const response = await this._API.search(term)
    const receivers = response.reverse()

    return receivers.map((receiver: TransactionData) => {
      const receiverData = new TableDataDto(receiver).data

      return receiverData
    })
  }
}