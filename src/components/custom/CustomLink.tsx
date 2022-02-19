import { FC } from "react";
import { Link } from "react-router-dom";

interface CustomLinkProps {
  children: string;
  to: string;
}

const CustomLink: FC<CustomLinkProps> = ({ to, children }) => {
  return (
    <Link to={to} className="custom-link">
      {children}
    </Link>
  );
};

export default CustomLink;
