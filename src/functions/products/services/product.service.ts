import { ProductEntity } from "../entity/product.entity";
import { IProduct } from "../types";

class ProductServiceClass {
  private readonly productEntity: ProductEntity;

  constructor(productEntity: ProductEntity) {
    this.productEntity = productEntity;
  }

  public create(product: IProduct) {
    console.log(product);
  }

  public async getAll(): Promise<ReadonlyArray<IProduct>> {
    const res = await this.productEntity.getAll();

    if (res?.Items) {
      return res.Items as any;
    }

    return [];
  }

  public delete(id: string) {
    return true;
  }
}

export const ProductService = new ProductServiceClass(new ProductEntity());
