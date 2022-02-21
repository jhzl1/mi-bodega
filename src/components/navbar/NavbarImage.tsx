import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

const NavbarImage = () => {
  const { dashboard } = routes;
  return (
    <Link to={dashboard}>
      <img
        src={require("../../assets/img/logo_small.png")}
        alt=""
        className="navbar-image"
      />
    </Link>
  );
};

export default NavbarImage;
