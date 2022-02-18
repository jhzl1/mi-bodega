import { Navbar as NavbarHOC } from "./Navbar";
import NavbarButtons from "./NavbarButtons";
import NavbarImage from "./NavbarImage";

export const Navbar = Object.assign(NavbarHOC, {
  Image: NavbarImage,
  Buttons: NavbarButtons,
});
