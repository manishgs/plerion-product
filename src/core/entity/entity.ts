import * as AWS from "aws-sdk";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { IEntity } from "../types/entity";

export class Entity implements IEntity {
  readonly tableName: string;

  readonly client: DocumentClient;

  constructor(tableName: string) {
    AWS.config.update({ region: "ap-southeast-2" });
    this.client = new AWS.DynamoDB.DocumentClient();
    this.tableName = tableName;
  }
}
