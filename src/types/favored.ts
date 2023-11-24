import type { TransactionData } from "./transaction";

export interface FavoredData extends TransactionData {}

export interface FavoredTableData {
  id: string;
  name: string;
  uniqueIdentifyPFPJ: string;
  bank?: string | null;
  branch?: string | null;
  account?: string | null;
  status: string;
}
