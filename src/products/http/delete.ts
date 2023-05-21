import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { responseNoContent, resposeError } from '../../core/utils/response.util';
import { ProductService } from '../services/product.service';
import { validate } from 'uuid';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  if (!event.pathParameters?.id || !validate(event.pathParameters?.id)) {
    return resposeError(422, 'Invalid product id');
  }

  try {
    await ProductService.delete(event.pathParameters.id);
  } catch (e) {
    return resposeError(500, 'Unable to delete product');
  }

  return responseNoContent();
};
