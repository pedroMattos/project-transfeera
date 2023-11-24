import type { TransactionData } from "@/types/transaction"

export default class TableDataDto {
	private _transaction: TransactionData

	constructor(transaction: TransactionData) {
		this._transaction = transaction
	}

  get data() {
    return {
      id: this._transaction.id,
      name: this._transaction.name,
      uniqueIdentifyPFPJ: this._transaction.tax_id,
      bank: this._transaction.bank_name,
      branch: this._transaction.branch,
      account: this._transaction.account,
      status: this._transaction.status
    }
  }
}
