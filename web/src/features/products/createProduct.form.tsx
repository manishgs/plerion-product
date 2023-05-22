import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductInputs, ProductSchema } from "./createProduct.schema";
import { InputText } from "../../ui/form/input";
import { TextArea } from "../../ui/form/textarea";
import { Button } from "../../ui/button";

interface Props {
  onSubmit: SubmitHandler<ProductInputs>;
}

export default function CreateProductForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductInputs>({
    resolver: zodResolver(ProductSchema),
  });

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputText
        label="Product Name"
        error={errors.name}
        {...register("name")}
      />

      <TextArea
        label="Description"
        error={errors.description}
        {...register("description")}
      />

      <InputText
        label="Price"
        type="number"
        error={errors.price}
        {...register("price", { valueAsNumber: true })}
      />

      <InputText
        label="Image Url"
        error={errors.imageUrl}
        {...register("imageUrl")}
      />

      <Button label="Submit" type="submit" />
    </form>
  );
}
