import { Routes, Route } from "react-router-dom";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Menu from "../components/Menu";

const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/order" element={<Menu />} />
    </Routes>
  );
};
export default AppRoutes;
