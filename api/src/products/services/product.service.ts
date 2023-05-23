import { ProductEntity } from 'src/products/entity/product.entity';
import { IProduct, ProductSchema } from 'src/products/types';
import { z } from 'zod';

interface Paginate<T> {
  items: ReadonlyArray<T>;
  cursor?: string;
}

class ProductServiceClass {
  private readonly productEntity: ProductEntity;

  constructor(productEntity: ProductEntity) {
    this.productEntity = productEntity;
  }

  public async paginate(cursor?: string): Promise<Paginate<IProduct>> {
    const res = await this.productEntity.paginate(cursor);

    if (res?.Items) {
      const parsedData = z.array(ProductSchema).safeParse(res.Items);
      if (!parsedData.success) {
        return { items: [] };
      }

      return { items: parsedData.data, cursor: res.LastEvaluatedKey?.id };
    }

    return { items: [] };
  }

  public async create(product: IProduct) {
    return await this.productEntity.create(product);
  }

  public async delete(productId: string) {
    return await this.productEntity.delete(productId);
  }
}

export const ProductService = new ProductServiceClass(new ProductEntity());
