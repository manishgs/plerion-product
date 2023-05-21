import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {
  responseNoContent,
  resposeError,
} from "../../core/utils/response.util";
import { ProductService } from "../services/product.service";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  if (!event.pathParameters?.id) {
    return resposeError(422, "Invalid product id");
  }

  ProductService.delete(event.pathParameters.id);

  return responseNoContent();
};
