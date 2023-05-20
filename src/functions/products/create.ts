import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { responseCreated } from "../../utils/response.util";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return responseCreated();
};
