import { Link } from "react-router-dom";
import { Product } from "../../features/products/create/createProduct.schema";
import { Item } from "../../features/products/list/productItem";
import { ProductWrapper } from "../../features/products/list/productWrapper";
import { useListProduct } from "../../features/products/list/useListProduct";

export const ListProductPage = () => {
  const { products, isError, error, isLoading } = useListProduct();

  const renderItems = (products: readonly Product[]) => {
    if (!products || !products.length) {
      return <div>Product not found.</div>;
    }

    return products.map((product) => (
      <Item
        key={product.id}
        title={product.name}
        price={product.price}
        imageUrl={product.imageUrl}
      />
    ));
  };

  return (
    <ProductWrapper
      left={<h1 className="text-2xl">Products</h1>}
      right={<Link to="product/create">Add Product</Link>}
    >
      <>
        {isError && <div>{JSON.stringify(error)}</div>}

        {isLoading && <div>Loading...</div>}

        {!isLoading && renderItems(products)}
      </>
    </ProductWrapper>
  );
};
