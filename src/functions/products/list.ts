import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { responseOK } from "../../utils/response.util";
import { Product } from "../../types/product";

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const products: Product[] = [
    {
      name: "Product 1",
      description: "Description of Product 1",
      price: "$10",
      imageUrl: "https://example.com/product1.jpg",
    },
    {
      name: "Product 2",
      description: "Description of Product 2",
      price: "$20",
      imageUrl: "https://example.com/product2.jpg",
    },
  ];
  return responseOK(products);
};
