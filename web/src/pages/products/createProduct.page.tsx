import { FormProvider, useForm } from "react-hook-form";
import {
  ProductInputs,
  ProductSchema,
} from "../../features/products/create/createProduct.schema";
import CreateProductForm from "../../features/products/create/createProduct.form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostProduct } from "../../features/products/create/usePostProduct";
import { Link } from "react-router-dom";
import { ProductWrapper } from "../../features/products/list/productWrapper";

export default function CreateProductPage() {
  const methods = useForm<ProductInputs>({
    resolver: zodResolver(ProductSchema),
  });

  const { onSubmit, isLoading } = usePostProduct(methods);

  return (
    <ProductWrapper
      left={<h1 className="text-2xl">Products</h1>}
      right={<Link to="/">Back</Link>}
    >
      <FormProvider {...methods}>
        <CreateProductForm
          isLoading={isLoading}
          methods={methods}
          onSubmit={onSubmit}
        />
      </FormProvider>
    </ProductWrapper>
  );
}
