import { FC } from "react";
import { Link } from "react-router-dom";

interface CustomLinkProps {
  children: string;
  to: string;
}

const CustomLink: FC<CustomLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-blue-400 font-semibold hover:text-blue-500 transition-all"
    >
      {children}
    </Link>
  );
};

export default CustomLink;
