import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

const NavbarButtons = () => {
  const { home } = routes;

  return (
    <div className="flex flex-row items-center">
      <span>Hola, usuario</span>

      <Link to={home} className="btn-navbar">
        <AddIcon marginRight={2} /> Agregar
      </Link>

      <button className="btn-navbar">
        <ArrowForwardIcon marginRight={2} /> Cerrar sesión
      </button>
    </div>
  );
};

export default NavbarButtons;
