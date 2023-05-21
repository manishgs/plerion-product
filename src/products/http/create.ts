import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { responseCreated, resposeError } from '../../core/utils/response.util';
import { ProductService } from '../services/product.service';
import { IProduct } from '../types';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  if (!event.body) {
    return resposeError(400, 'Bad request');
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return resposeError(400, 'Invalid Body');
  }

  if (!body) {
    return resposeError(400, 'Body can not be empty');
  }

  try {
    await ProductService.create(body as IProduct);
  } catch (e) {
    return resposeError(500, 'Unable to create product');
  }

  return responseCreated();
};
