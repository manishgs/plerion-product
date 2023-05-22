import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(1, { message: "This field is required" }).max(125, {
    message: "The name must not exceed a maximum of 125 characters",
  }),
  description: z.string().min(1, { message: "This field is required" }),
  price: z
    .number()
    .positive()
    .min(1, { message: "This field is required" })
    .max(9999999),
  imageUrl: z.string().min(1, { message: "This field is required" }).url(),
});

export type ProductInputs = z.infer<typeof ProductSchema>;
export type Product = ProductInputs & { id: string };
