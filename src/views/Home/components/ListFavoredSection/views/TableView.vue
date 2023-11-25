<script lang="ts" setup>
import ListFavoredController from '../controller/listFavored.controller'
import { useSelectToDelete } from '@/stores/selectToDelete/selectToDelete.store'
import { TableViewModel } from '../viewModel'
import PaginationTable from '@/shared-components/paginationTable/paginationTable.vue'
import StatusFavored from '@/shared-components/statusFavored/statusFavored.vue'
import BankIcon from "@/shared-components/bankIcon/bankIcon.vue"
import { computed, onMounted, onBeforeMount, ref, watch } from 'vue'
import { type FavoredTableData } from '@/types/favored'
import { useRefetch } from '@/stores/refetch'

const TABLE_HEADER_TITLES = ['Favorecido', 'CPF/CNPJ', 'Banco', 'Agência', 'CC', 'Status do favorecido']
const tableData = ref<FavoredTableData[]>()
const viewModel = new TableViewModel()
const selectStore = useSelectToDelete()
const currentPage = ref<number>(1)
const refetch = useRefetch()
const totalPages = localStorage.getItem('totalPages')
const startRefetch = computed(() => refetch.refetch)
const reativeTableData = computed(() => tableData.value)

onBeforeMount(() => {
  getAll()
})

watch(startRefetch, (value) => {
  if (value) getAll()
})

onMounted(() => {
  selectStore.setTotalItems(tableData.value?.length)
})

const listOfSelecteds = computed(() => {
  return selectStore.selecteds
})

async function getAll() {
  tableData.value = await new ListFavoredController().getAll(currentPage.value)
  refetch.stopRefetch()
}

async function handleChangePage(page: number) {
  currentPage.value = page
  tableData.value = await new ListFavoredController().getAll(page)
}

function handleSelectAll() {
  if (tableData.value !== undefined) {
    viewModel.selectAll(tableData.value);
  }
}

</script>

<template>
  <v-table v-if="!startRefetch" density="compact" hover>
    <thead>
      <tr>
        <th v-for="(title, index) in TABLE_HEADER_TITLES" :key="index" class="text-left">
          <input v-if="index === 0" type="checkbox" @change="handleSelectAll">
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(receiver, index) in reativeTableData" :key="index" @click="() => viewModel.openDetailsModal(receiver)">
        <td>
          <input
            type="checkbox"
            v-model="listOfSelecteds"
            @click.stop="() => viewModel.selectFavored(receiver.id)"
            :value="receiver.id">
          {{ receiver.name }}
        </td>
        <td>{{ receiver.uniqueIdentifyPFPJ }}</td>
        <td><bank-icon :name="receiver.bank" /></td>
        <td>{{ receiver.branch }}</td>
        <td>{{ receiver.account }}</td>
        <td><status-favored :status="receiver.status" /></td>
      </tr>
    </tbody>
  </v-table>
  <v-progress-circular v-else indeterminate :size="50"></v-progress-circular>

  <pagination-table v-if="totalPages" :pages="totalPages" @page-change="handleChangePage" />
  <p class="center">
    <img src="../../../../../assets/transfeera-logo-mini.png">
  </p>
</template>

<style lang="scss" scoped>
.v-table {
  margin-top: 39px;
  th.text-left {
    color: var(--gray-400);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  tr td {
    color: var(--gray-500);
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    cursor: pointer;
    user-select: none;
  }
}

.v-table .v-table__wrapper > table > thead > tr > th {
  border-bottom: 1px solid transparent;
}

.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
  border-bottom: 1px solid transparent;
}

.v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > tbody > tr > th, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > thead > tr > th, .v-table > .v-table__wrapper > table > tfoot > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > th {
  padding: 15px 16px;
}

.center {
  text-align: center;
  margin: 40px 0 0 0;
}
</style>