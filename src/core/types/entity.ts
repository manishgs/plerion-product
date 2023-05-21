import { DocumentClient } from "aws-sdk/clients/dynamodb";

export interface IEntity {
  readonly tableName: string;
  readonly client: DocumentClient;
}
