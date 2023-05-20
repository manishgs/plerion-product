import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { responseOK } from "../../../utils/response.util";
import { Product } from "../../../types/product";
import { ProductService } from "../services/product.service";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const products = ProductService.getAll();
  return responseOK(products);
};
