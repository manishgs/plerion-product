import { Entity } from 'src/core/entity/base-entity';
import { v4 as uuidv4 } from 'uuid';
import { IProduct, ProductStatus } from 'src/products/types';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export class ProductEntity extends Entity {
  constructor() {
    super('plerion-product-dev');
  }

  public async paginate(cursor?: string) {
    const params: DocumentClient.ScanInput = {
      TableName: this.tableName,
      Limit: 3,
      FilterExpression: '#productStatus = :value',
      ExpressionAttributeValues: {
        ':value': ProductStatus.PUBLISHED
      },
      ExpressionAttributeNames: {
        '#productStatus': 'status'
      }
    };

    if (cursor) {
      const [id, createdAt] = cursor.split('$');
      params.ExclusiveStartKey = { id, createdAt };
    }

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
        imageUrl: product.imageUrl,
        status: ProductStatus.PUBLISHED,
        createdAt: new Date().toISOString()
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
