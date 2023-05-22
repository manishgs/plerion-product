import CreateProduct from "./pages/products/createProduct.page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ListProductPage } from "./pages/products/listProduct.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListProductPage />,
  },
  {
    path: "product/create",
    element: <CreateProduct title="Add Product" />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
