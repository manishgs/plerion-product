import { Link } from "react-router-dom";
import { Product } from "../../features/products/create/createProduct.schema";
import { Item } from "../../features/products/list/productItem";
import { ProductWrapper } from "../../features/products/list/productWrapper";
import { useListProduct } from "../../features/products/list/useListProduct";
import { Button } from "../../ui/button";
import { Loading } from "../../ui/loading";

export const ListProductPage = () => {
  const { products, isLoading, isFetchingNextPage, loadMore, hasNextPage } =
    useListProduct();

  const renderItems = (products: readonly Product[]) => {
    if (!products || !products.length) {
      return <div>Product not found.</div>;
    }

    return products.map((product) => (
      <Item
        key={product.id}
        id={product.id}
        title={product.name}
        price={product.price}
        imageUrl={product.imageUrl}
      />
    ));
  };

  return (
    <ProductWrapper
      left={<h1 className="text-2xl">Products</h1>}
      right={
        <Link
          className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          to="product/create"
        >
          Add Product
        </Link>
      }
    >
      <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading && <Loading repeat={3} />}

        {!isLoading && renderItems(products)}
      </div>

      {hasNextPage && (
        <div className="text-center mt-12 mb-4">
          <Button
            isLoading={isLoading || isFetchingNextPage}
            onClick={loadMore}
          >
            Load More
          </Button>
        </div>
      )}
    </ProductWrapper>
  );
};
