import { ProductEntity } from '../entity/product.entity';
import { IProduct } from '../types';

class ProductServiceClass {
  private readonly productEntity: ProductEntity;

  constructor(productEntity: ProductEntity) {
    this.productEntity = productEntity;
  }

  public async getAll(): Promise<ReadonlyArray<IProduct>> {
    const res = await this.productEntity.getAll();

    if (res?.Items) {
      return res.Items as unknown as ReadonlyArray<IProduct>;
    }

    return [];
  }

  public async create(product: IProduct) {
    return await this.productEntity.create(product);
  }

  public async delete(productId: string) {
    return await this.productEntity.delete(productId);
  }
}

export const ProductService = new ProductServiceClass(new ProductEntity());
