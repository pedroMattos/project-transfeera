import { useSelectToDelete } from "@/stores/selectToDelete/selectToDelete.store";
import useDeleteFavoredModal from "@/stores/deleteModal/deleteModal.store";
import type { FavoredData } from "@/types/favored";

export class TableViewModel {
  private _selectStore = useSelectToDelete()

  selectFavored(id: string) {
    const selectedIndex = this._selectStore.selecteds.indexOf(id)
    if (selectedIndex >= 0) {
      this._selectStore.removeSelecion(selectedIndex)
      return
    }
    this._selectStore.selectOne(id)
  }

  selectAll(favoreds: any[]) {
    this._selectStore.setSelecteds(favoreds.map((favored: FavoredData) => favored.id))
  }

  openDeleteModal() {
    useDeleteFavoredModal().openModal()
  }
}