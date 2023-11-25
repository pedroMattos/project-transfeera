import FavoredApi from "@/services/favored.api"

export default class ListFavoredController {
  readonly repository
  constructor() {
    this.repository = new FavoredApi()
  }

  async getAll(page: number) {
    return await this.repository.getReceivers(page)
  }
  
  async changePage(page: number) {
    return await this.repository.getReceivers(page)
  }
}
