import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const {user, logOut} = UserAuth();

  const handleLogout = async()=>{
    try {
      await logOut();
      Navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {
        user?.email ? (
          <div>
        <Link to="/account">
          <button className=" px-4 py-2 mx-1 text-white hover:bg-black/50">
            Account
          </button>
        </Link>
        <Link to="/">
          <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded cursor-pointer text-white">
            Logout
          </button>
        </Link>
      </div>
        ):(
          <div>
        <Link to="/login">
          <button className=" px-4 py-2 mx-1 text-white hover:bg-black/50">
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 px-4 py-2 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </Link>
      </div>
        )
      }
    </div>
  );
};

export default Navbar;
