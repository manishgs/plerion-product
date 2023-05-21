import { APIGatewayProxyResult } from 'aws-lambda';
import { responseOK, resposeError } from 'src/core/utils/response.util';
import { ProductService } from 'src/products/services/product.service';

export const handler = async (): Promise<APIGatewayProxyResult> => {
  try {
    const products = await ProductService.getAll();
    return responseOK(products);
  } catch (e) {
    return resposeError(500, 'Unable to fetch product');
  }
};
