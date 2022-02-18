import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

const NavbarImage = () => {
  const { home } = routes;
  return (
    <Link to={home}>
      <img
        src={require("../../assets/img/logo_small.png")}
        alt=""
        className="w-52"
      />
    </Link>
  );
};

export default NavbarImage;
