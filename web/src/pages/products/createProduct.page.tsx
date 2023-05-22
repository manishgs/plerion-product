import { SubmitHandler } from "react-hook-form";
import { ProductInputs } from "../../features/products/createProduct.schema";
import CreateProductForm from "../../features/products/createProduct.form";

interface Props {
  readonly title: string;
}

export default function CreateProductPage({ title }: Props) {
  const onSubmit: SubmitHandler<ProductInputs> = (data) => console.log(data);

  return (
    <div className="w-full max-w-xl m-auto mt-20">
      <h1 className="text-3xl">{title}</h1>
      <CreateProductForm onSubmit={onSubmit} />;
    </div>
  );
}
