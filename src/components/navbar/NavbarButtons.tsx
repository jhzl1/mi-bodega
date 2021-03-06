import AddIcon from "../AddIcon";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import { routes } from "../../routes/routes";
import { RootState } from "../../store/store";
import LogoutIcon from "../LogoutIcon";

const NavbarButtons = () => {
  const { createProduct } = routes;

  const { username } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-row items-center">
      <span className="navbar-username">Hola, {username}</span>

      <Link to={createProduct} className="btn-navbar">
        <div className="icon-navbar-button">
          <AddIcon />
        </div>
        <span className="text-navbar-button">Agregar </span>
      </Link>

      <button className="btn-navbar" onClick={handleLogout}>
        <div className="icon-navbar-button">
          <LogoutIcon />
        </div>
        <span className="text-navbar-button">Cerrar sesión</span>
      </button>
    </div>
  );
};

export default NavbarButtons;
