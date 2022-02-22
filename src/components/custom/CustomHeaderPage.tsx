import { FC } from "react";
import { Custom } from ".";

interface CustomHeaderPageProps {
  children: string;
}

const CustomHeaderPage: FC<CustomHeaderPageProps> = ({ children }) => {
  return (
    <div className="relative w-full">
      <Custom.ButtonBack isProtectedView />
      <div className="flex justify-center">
        <Custom.Title>{children}</Custom.Title>
      </div>
    </div>
  );
};

export default CustomHeaderPage;
