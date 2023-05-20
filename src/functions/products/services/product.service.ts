import { Product } from "../../../types/product";

class ProductServiceClass {
  public create(product: Product) {
    console.log(product);
  }

  public getAll(): ReadonlyArray<Product> {
    return [];
  }

  public delete(id: string) {
    return true;
  }
}

export const ProductService = new ProductServiceClass();
