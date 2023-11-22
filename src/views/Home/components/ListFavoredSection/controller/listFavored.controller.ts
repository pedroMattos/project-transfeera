import FavoredApi from "@/services/favored.api"

export default class ListFavoredController {
  readonly $_repository
  constructor() {
    this.$_repository = new FavoredApi()
  }

  getAll() {
    return this.$_repository.getReceivers()
  }
}
