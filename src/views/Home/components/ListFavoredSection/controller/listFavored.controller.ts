import FavoredApi from "@/services/favored.api"

export default class ListFavoredController {
  readonly repository
  constructor() {
    this.repository = new FavoredApi()
  }

  async getAll() {
    return await this.repository.getReceivers()
  }
}
