import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { responseOK } from "../../core/utils/response.util";
import { ProductService } from "../services/product.service";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const products = await ProductService.getAll();
  return responseOK(products);
};
