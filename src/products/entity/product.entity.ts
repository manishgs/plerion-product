import { Entity } from "../../core/entity/entity";

export class ProductEntity extends Entity {
  constructor() {
    super("plerion-product-api-dev");
  }

  public async getAll() {
    const params = { TableName: this.tableName };

    return await this.client.scan(params).promise();
  }
}
