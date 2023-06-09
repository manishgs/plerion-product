import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { API_URL } from "../../../config";
import { ProductInputs } from "./createProduct.schema";

export const usePostProduct = (methods: UseFormReturn<ProductInputs>) => {
  const queryClient = useQueryClient();

  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const postProduct = async (data: ProductInputs) => {
    setLoading(true);
    setSuccess(false);
    return fetch(`${API_URL}/products`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 201) {
          setSuccess(true);
          methods.reset();
          return;
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
    isSuccess,
    onSubmit,
    isLoading,
  };
};
