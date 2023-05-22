import { ReactNode } from "react";

interface ProductWrapperProps {
  children: ReactNode;
  left: ReactNode;
  right: ReactNode;
}

export const ProductWrapper = ({
  children,
  left,
  right,
}: ProductWrapperProps) => {
  return (
    <div className="w-full h-full">
      <div style={{ maxWidth: "1000px" }} className="m-auto mt-20">
        <div className="mb-6">
          <div className="float-right">{right}</div>
          {left}
        </div>

        <div className="bg-white mx-auto p-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
