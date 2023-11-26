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

  async search(term: string) {
    if (term.length === 0) return await this.getAll(1)
    return await this.repository.search(term)
  }
}
