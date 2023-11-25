import { useSelectToDelete } from "@/stores/selectToDelete/selectToDelete.store";
import useDeleteFavoredModal from "@/stores/deleteModal/deleteModal.store";
import type { FavoredTableData } from "@/types/favored";
import { useDetailsModal } from "@/stores/detailsModal/detailsModal.store";

enum Status {
  RASCUNHO = 'rascunho',
  VALIDADO = 'validado'
}
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

  selectAll(favoreds: FavoredTableData[]) {
    if (favoreds) {
      this._selectStore.setSelecteds(favoreds.map((favored: FavoredTableData) => favored.id))
    }
  }

  openDetailsModal(data: FavoredTableData) {
    if (data.status === Status.RASCUNHO) {
      console.log('abri rascunho')
    } else if (data.status === Status.VALIDADO) {
      useDetailsModal().setModalData(data.id)
      useDetailsModal().toggleOpen()
    }
  }

  openDeleteModal() {
    useDeleteFavoredModal().openModal()
  }
}