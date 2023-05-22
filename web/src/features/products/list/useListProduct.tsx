import { useQuery } from "@tanstack/react-query";

export const useListProduct = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:3000/products").then((res) => res.json()),
  });

  return {
    isError,
    error,
    products: data,
    isLoading,
  };
};
