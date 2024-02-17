import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className=" max-w-[1400px] my-0 mx-auto py-[10px] px-[20px] flex items-center justify-between">
        <Link to="/">
          <h1 className=" text-[1.2em]">Exercise Tracker</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
