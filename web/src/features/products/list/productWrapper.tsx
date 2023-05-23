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
    <div style={{ maxWidth: "800px" }} className="m-auto my-20">
      <div className="mb-6">
        <div className="float-right">{right}</div>
        {left}
      </div>
      <div className="bg-white p-8">{children}</div>
    </div>
  );
};
