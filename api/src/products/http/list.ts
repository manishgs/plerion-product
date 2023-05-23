import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { responseOK, resposeError } from 'src/core/utils/response.util';
import { ProductService } from 'src/products/services/product.service';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const products = await ProductService.paginate(event.queryStringParameters?.cursor);
    return responseOK(products);
  } catch (e) {
    return resposeError(500, 'Unable to fetch product');
  }
};
