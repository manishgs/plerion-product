import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { ProductInputs } from "./createProduct.schema";

export const usePostProduct = (methods: UseFormReturn<ProductInputs>) => {
  const queryClient = useQueryClient();

  const [isLoading, setLoading] = useState(false);

  const postProduct = async (data: ProductInputs) => {
    setLoading(true);
    return fetch("http://localhost:3000/products", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 201) {
          methods.reset();
        }
        return res ? res.json() : null;
      })
      .then((res) => {
        if (res && res.errors) {
          for (const k in res.errors) {
            const key = k as keyof ProductInputs;
            methods.setError(key, { type: "server", message: res.errors[k] });
          }
        }

        return res;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const mutation = useMutation({
    mutationFn: postProduct,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });

  const onSubmit: SubmitHandler<ProductInputs> = (data) => {
    return mutation.mutate(data);
  };

  return {
    onSubmit,
    isLoading,
  };
};
