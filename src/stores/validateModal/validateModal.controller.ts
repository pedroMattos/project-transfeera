import { ApiRepository } from "@/services/apiRepository"
import type { PatchParamsValidate } from "@/types/transaction"

export class ValidateModalController {
  private repository

  constructor() {
    this.repository = new ApiRepository('http://localhost:3000')
  }
  
  delete(id: string) {
    this.repository.remove(id)
  }

  getReceiver(id: string) {
    return this.repository.getOne(id)
  }

  savePatch(id: string, params: PatchParamsValidate) {
    this.repository.update(id, { ...params })
  }
}