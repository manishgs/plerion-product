import { useInfiniteQuery } from "@tanstack/react-query";

export const useListProduct = () => {
  const {
    isLoading,
    data,
    isFetchingNextPage,
    refetch,
    hasNextPage,
    isError,
    error,
    fetchNextPage,
  } = useInfiniteQuery(
    ["products"],
    ({ pageParam }) => {
      const query = pageParam ? `?cursor=${pageParam}` : "";
      return fetch(`http://localhost:3000/products${query}`).then((res) =>
        res.json()
      );
    },
    {
      getNextPageParam: (data) => {
        return data?.cursor ?? undefined;
      },
      refetchOnWindowFocus: false,
    }
  );

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const products = data?.pages?.map((page) => page.items || []).flat() || [];

  return {
    isLoading,
    data,
    isFetchingNextPage,
    refetch,
    hasNextPage,
    isError,
    error,
    loadMore,
    products,
  };
};
