import * as AWS from 'aws-sdk';
import { IEntity } from 'src/core/types/entity';
import { AWS_ACCESS_KEY, AWS_REGION, AWS_SECRET_KEY } from '../config';

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  region: AWS_REGION
});

export class Entity implements IEntity {
  readonly tableName: string;

  readonly client: AWS.DynamoDB.DocumentClient;

  constructor(tableName: string) {
    this.client = new AWS.DynamoDB.DocumentClient({
      region: AWS_REGION
    });
    this.tableName = tableName;
  }
}
