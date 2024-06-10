import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../../Pages/About";
import Collections from "../../Pages/Collections";
import MenPage from "../../Pages/Men";
import Contactpage from "../../Pages/Contact";
import HomePage from "../Mainpage/Homepage";

const NavigationStack = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/Collections" Component={Collections} />
          <Route path="/men" Component={MenPage} />
          <Route path="/About" Component={AboutPage} />
          <Route path="/contact" Component={Contactpage} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default NavigationStack;
