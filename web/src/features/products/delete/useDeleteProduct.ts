import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { API_URL } from "../../../config";

export const useDeleteProduct = (id: string) => {
  const queryClient = useQueryClient();

  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const DeleteProduct = async () => {
    setLoading(true);
    setSuccess(false);
    return fetch(`${API_URL}/products/${id}`, { method: "DELETE" })
      .then((res) => {
        if (res.status === 204) {
          setSuccess(true);
          return;
        }
        return res ? res.json() : null;
      })
      .then((res) => {
        return res;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const mutation = useMutation({
    mutationFn: DeleteProduct,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });

  return {
    isSuccess,
    mutation,
    isLoading,
  };
};
