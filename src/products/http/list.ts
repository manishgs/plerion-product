import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { responseOK, resposeError } from "../../core/utils/response.util";
import { ProductService } from "../services/product.service";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const products = await ProductService.getAll();
    return responseOK(products);
  } catch (e) {
    return resposeError(500, "Unable to fetch product");
  }
};
