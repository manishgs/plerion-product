import { ProductEntity } from 'src/products/entity/product.entity';
import { IProduct, ProductSchema } from 'src/products/types';
import { z } from 'zod';

class ProductServiceClass {
  private readonly productEntity: ProductEntity;

  constructor(productEntity: ProductEntity) {
    this.productEntity = productEntity;
  }

  public async getAll(): Promise<ReadonlyArray<IProduct>> {
    const res = await this.productEntity.getAll();

    if (res?.Items) {
      const parsedData = z.array(ProductSchema).safeParse(res.Items);
      if (!parsedData.success) {
        return [];
      }

      return parsedData.data;
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
