import { Entity } from 'src/core/entity/base-entity';
import { v4 as uuidv4 } from 'uuid';
import { IProduct } from 'src/products/types';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export class ProductEntity extends Entity {
  constructor() {
    super('plerion-product-api-dev');
  }

  public async getAll() {
    const params = { TableName: this.tableName };

    return await this.client.scan(params).promise();
  }

  public async create(product: IProduct) {
    const params: DocumentClient.PutItemInput = {
      TableName: this.tableName,
      Item: {
        id: uuidv4(),
        name: product.name,
        description: product.description,
        price: product.price,
        imageUrl: product.imageUrl
      }
    };

    return await this.client.put(params).promise();
  }

  public async delete(productId: string) {
    const params: DocumentClient.DeleteItemInput = {
      TableName: this.tableName,
      Key: { id: productId }
    };

    return await this.client.delete(params).promise();
  }
}
