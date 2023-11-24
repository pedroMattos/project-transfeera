
export class CreateModalDto {
  public name: string = "";
  public id: string = "";
  public created_at: string = "";
  public updated_at: string = "";
  public email: string = "";
  public tax_id: string = "";
  public branch?: string | null;
  public account_type?: string | null;
  public account?: string | null;
  public bank_name?: string | null;
  public bank_code?: string | null;
  public status: string = "rascunho";
  public pix_key?: string | string;
  public pix_key_type?: string;

  constructor(data: Partial<CreateModalDto>) {
    Object.assign(this, data);
  }
}