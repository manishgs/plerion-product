import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { IEntity } from "../types/entity";

export class Entity implements IEntity {
  readonly tableName: string;

  readonly client: DocumentClient;

  constructor(tableName: string) {
    this.client = new DocumentClient({
      region: "ap-southeast-2",
    });
    this.tableName = tableName;
  }
}
