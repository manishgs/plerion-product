import { z } from 'zod';

export enum ProductStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published'
}

export const ProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1, { message: 'This field is required' }).max(125, {
    message: 'The name must not exceed a maximum of 125 characters'
  }),
  description: z.string().min(1, { message: 'This field is required' }),
  price: z.number().positive().min(1, { message: 'This field is required' }).max(9999999),
  imageUrl: z.string().min(1, { message: 'This field is required' }).url(),
  status: z.nativeEnum(ProductStatus).optional(),
  createdAt: z.string().optional()
});

export type IProduct = z.infer<typeof ProductSchema>;
