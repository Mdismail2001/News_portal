import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);  
  const [logout, setLogout] = useState('');

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setLogout("Logout successful");
        setTimeout(() => {
          setLogout("");
        }, 3000);
      })
      .catch((error) => {
        setLogout(error.message);
        setTimeout(() => {
          setLogout("");
        }, 3000);
      });
  };

  return (
<div className="flex justify-between items-center w-full">
  {/* Left: Logout message */}
  <div className="w-1/3">
    {logout && <p className="text-green-500">{logout}</p>}
  </div>

  {/* Center: Nav links */}
  <div className="w-1/3 flex justify-center gap-5 text-accent">
    <NavLink className="hover:text-black font-semibold" to="/">Home</NavLink>
    { user ? (<>    
    <NavLink className="hover:text-black font-semibold" to="/auth/about">About</NavLink>
    <NavLink className="hover:text-black font-semibold" to="/auth/career">Career</NavLink>
    </>):(<>
    <NavLink className="hover:text-black font-semibold" to="/auth/login">About</NavLink>
    <NavLink className="hover:text-black font-semibold" to="/auth/login">Career</NavLink>
    </> )}
  </div>

  {/* Right: User info + buttons */}
  <div className="w-1/3 flex justify-end gap-5">
    <p className="font-semibold mt-2">{user && user.email}</p>
    <img
      className="w-10 h-10 rounded-full"
      src={
        user?.photoURL ||
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
      }
      alt=""
    />
    {user ? (
      <button onClick={handleLogOut} className="btn btn-primary px-10">
        LogOut
      </button>
    ) : (
      <Link to="/auth/login" className="btn btn-primary px-10">
        Login
      </Link>
    )}
  </div>
</div>
  );
};

export default Navbar;
