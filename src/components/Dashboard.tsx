import { Route, Routes } from "react-router-dom";
import { privateDir } from "../routes/routes";
import Footer from "./Footer";
import { Navbar } from "./navbar";
import NavbarButtons from "./navbar/NavbarButtons";

const Dashboard = () => {
  return (
    <>
      <Navbar>
        <Navbar.Image />
        <NavbarButtons />
      </Navbar>
      <div className="protected-container">
        <Routes>
          {privateDir.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
