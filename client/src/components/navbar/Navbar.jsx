import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">BOOKING</span>
        <div className="navItems">
          <button className="register navBtn">Register</button>
          <button className="login navBtn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
