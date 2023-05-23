import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(1, { message: "This field is required" }).max(125, {
    message: "The name must not exceed a maximum of 125 characters",
  }),
  description: z.string().min(1, { message: "This field is required" }),
  price: z
    .string()
    .refine((value) => {
      const parsedValue = parseFloat(value);
      return !isNaN(parsedValue) && parsedValue > 0 && parsedValue < 99999;
    }, "Invalid price")
    .transform(Number),
  imageUrl: z.string().min(1, { message: "This field is required" }).url(),
});

export type ProductInputs = z.infer<typeof ProductSchema>;
export type Product = ProductInputs & { id: string };
