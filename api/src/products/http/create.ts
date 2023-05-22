import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { responseCreated, resposeError, resposeValidationError } from 'src/core/utils/response.util';
import { ProductService } from 'src/products/services/product.service';
import { IProduct, ProductSchema } from 'src/products/types';
import { ZodFormattedError } from 'zod';

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
    return resposeValidationError(formatZodErrors(parseData.error.format()));
  }

  try {
    await ProductService.create(parseData.data);
  } catch (e) {
    return resposeError(500, 'Unable to create product');
  }

  return responseCreated();
};

const formatZodErrors = (errors: ZodFormattedError<IProduct, string>) => {
  const errorObj: Record<string, string> = {};

  for (const k in errors) {
    const key = k as keyof IProduct;
    if (errors[key] && errors[key]?._errors?.length) {
      errorObj[key] = errors[key]?._errors[0] as string;
    }
  }

  return errorObj;
};
