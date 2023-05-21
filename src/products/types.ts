import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  description: z.string(),
  price: z.string(),
  imageUrl: z.string()
});

export type IProduct = z.infer<typeof ProductSchema>;
