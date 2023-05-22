import { FormProvider, useForm } from "react-hook-form";
import {
  ProductInputs,
  ProductSchema,
} from "../../features/products/create/createProduct.schema";
import CreateProductForm from "../../features/products/create/createProduct.form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePostProduct } from "../../features/products/create/usePostProduct";
import { Link } from "react-router-dom";

interface Props {
  readonly title: string;
}

export default function CreateProductPage({ title }: Props) {
  const methods = useForm<ProductInputs>({
    resolver: zodResolver(ProductSchema),
  });

  const { onSubmit, isLoading } = usePostProduct(methods);

  return (
    <div className="w-full h-full">
      <div className="max-w-xl m-auto mt-20">
        <Link to="/" className="uppercase text-sm">
          Back
        </Link>
        <h1 className="text-3xl mb-6">{title}</h1>
        <FormProvider {...methods}>
          <CreateProductForm
            isLoading={isLoading}
            methods={methods}
            onSubmit={onSubmit}
          />
        </FormProvider>
      </div>
    </div>
  );
}
