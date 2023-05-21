import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { responseCreated, resposeError } from "../../core/utils/response.util";
import { ProductService } from "../services/product.service";
import { IProduct } from "../types";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  if (!event.body) {
    return resposeError(400, "Bad request");
  }

  ProductService.create(JSON.parse(event.body) as IProduct);

  return responseCreated();
};
