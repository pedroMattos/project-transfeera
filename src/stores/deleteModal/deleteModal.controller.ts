import { ApiRepository } from "@/services/apiRepository"
import { useRefetch } from "../refetch"

export class DeleteModalController {
  private repository

  constructor() {
    this.repository = new ApiRepository('http://localhost:3000')
  }
  
  delete(ids: string[]) {
    ids.forEach(async (id) => {
      await this.repository.remove(id)
      useRefetch().doARefetch()
    })
  }

  getReceiver(id: string) {
    return this.repository.getOne(id)
  }
}