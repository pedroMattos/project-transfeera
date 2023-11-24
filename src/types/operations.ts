import type { TransactionData } from "./transaction";

export interface RequestData {
}

export interface ResponseData extends TransactionData {}

export interface Operations<T> {
  getAll(): Promise<T[]>;
  getOne(id: string): Promise<T>;
  create(data: RequestData): Promise<T>;
  update(id: string, data: RequestData): Promise<T>;
  remove(id: string): Promise<void>;
}