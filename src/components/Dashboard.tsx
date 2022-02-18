import { Route, Routes } from "react-router-dom";
import { privateDir } from "../routes/routes";
import { Navbar } from "./navbar";
import NavbarButtons from "./navbar/NavbarButtons";

const Dashboard = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Image />
        <NavbarButtons />
      </Navbar>
      Dashboard
      <Routes>
        {privateDir.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Routes>
    </div>
  );
};

export default Dashboard;
