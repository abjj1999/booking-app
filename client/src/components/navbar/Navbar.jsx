import { useContext } from "react";
import { AuthCont } from "../../context/AuthCont";
import "./navbar.css";

const Navbar = () => {
  const { user } = useContext(AuthCont);

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">BOOKING</span>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="register navBtn">Register</button>
            <button className="login navBtn">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
