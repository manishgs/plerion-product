import { Entity } from "../../../core/entity/entity";

export class ProductEntity extends Entity {
  constructor() {
    super("products");
  }

  public async getAll() {
    const params = { TableName: this.tableName };

    return await this.client.scan(params).promise();
  }
}
