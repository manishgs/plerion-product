import {
  useForm,
  SubmitHandler,
  FormProvider,
  UseFormReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductInputs, ProductSchema } from "./createProduct.schema";
import { InputText } from "../../../ui/form/input";
import { TextArea } from "../../../ui/form/textarea";
import { Button } from "../../../ui/button";

interface Props {
  onSubmit: SubmitHandler<ProductInputs>;
  methods: UseFormReturn<ProductInputs>;
  isLoading: boolean;
}

export default function CreateProductForm({
  methods,
  isLoading,
  onSubmit,
}: Props) {
  return (
    <form className="m-6" onSubmit={methods.handleSubmit(onSubmit)}>
      <InputText label="Product Name" name="name" />
      <TextArea label="Description" name="description" />
      <InputText label="price" name="price" />
      <InputText label="imageUrl" name="imageUrl" />
      <Button isLoading={isLoading} label="Submit" type="submit" />
    </form>
  );
}
