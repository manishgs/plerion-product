/* eslint-disable @typescript-eslint/no-explicit-any */
import { APIGatewayProxyResult } from 'aws-lambda';

export const responseOK = (data?: Record<string, any>) => {
  return resposeSucess(200, data);
};

export const responseCreated = (data?: Record<string, any>) => {
  return resposeSucess(201, data);
};

export const responseNoContent = (data?: Record<string, any>) => {
  return resposeSucess(204, data);
};

export const resposeSucess = (statusCode: number, data?: Record<string, any>): APIGatewayProxyResult => {
  return {
    statusCode,
    body: data ? JSON.stringify(data, null, 2) : ''
  };
};

export const resposeError = (statusCode: number, message: string, e?: unknown): APIGatewayProxyResult => {
  // eslint-disable-next-line no-console
  console.log(e);
  return {
    statusCode,
    body: JSON.stringify({ message }, null, 2)
  };
};

export const resposeValidationError = (errors: Record<string, string>): APIGatewayProxyResult => {
  return {
    statusCode: 422,
    body: JSON.stringify({ errors }, null, 2)
  };
};
