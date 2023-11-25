import { useGenerateUUID } from "@/composables/useGenerateUUID"
import { useGetCurrentDateTime } from "@/composables/useGetCurrentDateTime"
import { ApiRepository } from "@/services/apiRepository"
import type { TransactionData } from "@/types/transaction"

export class CreateModalController {
  private repository

  constructor() {
    this.repository = new ApiRepository('http://localhost:3000')
  }

  save(params: TransactionData) {
    params.id = useGenerateUUID()
    params.created_at = useGetCurrentDateTime()
    console.log(params)
    this.repository.create({ ...params })
  }
}