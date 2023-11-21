<script lang="ts" setup>
import TableDataDto from '../dtos/table_data.dto';
import PaginationTable from '@/shared-components/paginationTable/paginationTable.vue'

const tableData = new TableDataDto({
      "id": "0accb825-db24-4288-9f29-c88b9ec656da",
      "name": "Julia Silva",
      "email": "julia.silva@exemplo.com",
      "tax_id": "59738860000170",
      "branch": null,
      "account": null,
      "account_type": null,
      "bank_name": null,
      "bank_code": null,
      "pix_key": "9afe6a96-6b27-4acc-acf0-59159076c578",
      "pix_key_type": "aleatoria",
      "status": "rascunho",
      "created_at": "2023-10-25 16:00:10-03",
      "updated_at": "2023-10-25 16:00:10-03"
    }).data

const TABLE_HEADER_TITLES = ['Favorecido', 'CPF/CNPJ', 'Banco', 'Agência', 'CC', 'Status do favorecido']
</script>

<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th v-for="(title, index) in TABLE_HEADER_TITLES" :key="index" class="text-left">
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ tableData.name }}</td>
        <td>{{ tableData.uniqueIdentifyPFPJ }}</td>
        <td>{{ tableData.bank }}</td>
        <td>{{ tableData.branch }}</td>
        <td>{{ tableData.account }}</td>
        <td>{{ tableData.status }}</td>
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
  }
}

.center {
  text-align: center;
  margin: 40px 0 0 0;
}
</style>