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

  const { onSubmit, isSuccess, isLoading } = usePostProduct(methods);

  return (
    <ProductWrapper
      left={<h1 className="text-2xl">Products</h1>}
      right={
        <Link
          className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          to="/"
        >
          Back
        </Link>
      }
    >
      <FormProvider {...methods}>
        {isSuccess && (
          <div
            className="p-4 m-6 text-sm text-green-800 rounded-lg bg-green-50 "
            role="alert"
          >
            Product created successfully
          </div>
        )}

        <CreateProductForm
          isLoading={isLoading}
          methods={methods}
          onSubmit={onSubmit}
        />
      </FormProvider>
    </ProductWrapper>
  );
}
