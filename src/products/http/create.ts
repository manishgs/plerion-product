import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { responseCreated, resposeError } from 'src/core/utils/response.util';
import { ProductService } from 'src/products/services/product.service';
import { ProductSchema } from 'src/products/types';

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

  const parseData = ProductSchema.safeParse(body);

  if (!parseData.success) {
    return resposeError(400, 'Invalid reqeust body');
  }

  try {
    await ProductService.create(parseData.data);
  } catch (e) {
    return resposeError(500, 'Unable to create product');
  }

  return responseCreated();
};
