<script lang="ts" setup>
import ListFavoredController from '../controller/listFavored.controller'
import PaginationTable from '@/shared-components/paginationTable/paginationTable.vue'
import StatusFavored from '@/shared-components/statusFavored/statusFavored.vue'
import BankIcon from "@/shared-components/bankIcon/bankIcon.vue"

const tableData = new ListFavoredController().getAll()

const TABLE_HEADER_TITLES = ['Favorecido', 'CPF/CNPJ', 'Banco', 'Agência', 'CC', 'Status do favorecido']
</script>

<template>
  <v-table density="compact" hover>
    <thead>
      <tr>
        <th v-for="(title, index) in TABLE_HEADER_TITLES" :key="index" class="text-left">
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(receiver, index) in tableData" :key="index">
        <td>{{ receiver.name }}</td>
        <td>{{ receiver.uniqueIdentifyPFPJ }}</td>
        <td><bank-icon /></td>
        <td>{{ receiver.branch }}</td>
        <td>{{ receiver.account }}</td>
        <td><status-favored :status="receiver.status" /></td>
      </tr>
    </tbody>
  </v-table>

  <pagination-table :pages="1" @page-change="console.log" />
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