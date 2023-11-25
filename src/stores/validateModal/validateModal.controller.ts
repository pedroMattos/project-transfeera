import { ApiRepository } from "@/services/apiRepository"
import type { PatchParamsValidate } from "@/types/transaction"

export class ValidateModalController {
  private repository

  constructor() {
    this.repository = new ApiRepository('http://localhost:3000')
  }
  
  async delete(id: string) {
    await this.repository.remove(id)
  }

  getReceiver(id: string) {
    return this.repository.getOne(id)
  }

  async savePatch(id: string, params: PatchParamsValidate) {
    await this.repository.update(id, { ...params })
  }
}