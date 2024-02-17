import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="mw-[1400px] my-0 mx-auto px-[10px] py-[20px] flex items-center justify-between">
        <Link to="/">
          <h1>Exercise Tracker</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
