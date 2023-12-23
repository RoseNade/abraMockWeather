import {useDispatch, useSelector } from "react-redux";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Layout.css";
import { changeToC, changeToF } from "../../Redux/Actions/DegreesActions";


const Layout = ({ children }) => {
  return (
    <div className="container-fluid h-100 p-0 m-0">
      <div className="row navbar p-0 m-0">
        <Navbar />
      </div>

      <div className="content p-0 m-0 overflow-auto">{children}</div>

      <div className="row footer p-0 m-0">
        <Footer />
      </div>
    </div>
  );
};
export default Layout;