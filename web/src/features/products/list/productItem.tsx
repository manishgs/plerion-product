import { Button } from "../../../ui/button";
import { useDeleteProduct } from "../delete/useDeleteProduct";

interface ItemProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

export const Item = ({ title, price, imageUrl, id }: ItemProps) => {
  const { isLoading, mutation, isSuccess } = useDeleteProduct(id);

  const handleDelete = async () => {
    await mutation.mutate();
  };

  if (isSuccess) {
    return null;
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="bg-red-200 opacity-50 rounded-md absolute top-0 bottom-0 right-0 w-full z-10"></div>
      )}

      <a href="#" className="group z-0">
        <div className="relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src={imageUrl}
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">Rs.{price}</p>

          <Button
            onClick={handleDelete}
            className="absolute top-2 right-2 p-2 bg-red-400 rounded-md text-gray-500 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <img width="15px" height="15px" src="/delete.svg" />
          </Button>
        </div>
      </a>
    </div>
  );
};
