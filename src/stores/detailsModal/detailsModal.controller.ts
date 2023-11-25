import { ApiRepository } from "@/services/apiRepository"

export class DetailsModalController {
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

  async savePatch(id: string, email: string) {
    await this.repository.update(id, { email })
  }
}