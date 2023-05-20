import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { responseNoContent } from "../../utils/response.util";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return responseNoContent();
};
