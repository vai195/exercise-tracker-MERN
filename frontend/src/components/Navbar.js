import { Link } from "react-router-dom";
import { useLogout } from "../Hooks/useLogout";
import { useAuthContext } from "../Hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <header>
      <div className=" max-w-[1400px] my-0 mx-auto py-[10px] px-[20px] flex items-center justify-between">
        <Link to="/">
          <h1 className=" text-[1.2em]">Exercise Tracker</h1>
        </Link>
        <nav className=" flex items-center">
          {user && (
            <div className="">
              <span className="m-4">{user.email}</span>
              <button
                className=" bg-white text-mainc border-[2px] border-solid border-mainc py-[6px] px-[10px] rounded cursor-pointer text-[1e hover:bg-mainc transition-all hover:text-white"
                onClick={handleClick}>
                Log out
              </button>
            </div>
          )}
          {!user && (
            <div>
              <Link className=" ml-[10px]" to="/login">
                Login
              </Link>
              <Link className=" ml-[10px]" to="/signup">
                Signup
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
