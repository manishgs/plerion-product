import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Product } from "../../../types/product";
import { responseCreated, resposeError } from "../../../utils/response.util";
import { ProductService } from "../services/product.service";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  if (!event.body) {
    return resposeError(400, "Bad request");
  }

  ProductService.create(JSON.parse(event.body) as Product);

  return responseCreated();
};
