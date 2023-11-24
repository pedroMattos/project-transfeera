import { ApiRepository } from "@/services/apiRepository"

export class DetailsModalController {
  private repository

  constructor() {
    this.repository = new ApiRepository('http://localhost:3000')
  }
  
  delete(id: string) {
    this.repository.remove(id)
  }

  savePatch(id: string, email: string) {
    this.repository.update(id, { email })
  }
}