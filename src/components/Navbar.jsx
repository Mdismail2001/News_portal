import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import UserProfilePopup from './UserProfilePopup';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);  
  const [logout, setLogout] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);


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
<div className="flex justify-between items-center w-full  ">
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
  {/* Avatar + label grouped in a column */}
  <div
    className="flex flex-col items-center cursor-pointer "
    onClick={() => setIsPopupOpen(true)}
  >
    <img
      className="w-12 h-12 rounded-full"
      src={
        user?.photoURL ||
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
      }
      alt="Profile"
    />
    {user? <p className="text-sm mt-1">Profile</p> : ""}
  </div>

  {/* Show login button if no user */}
  {!user && (
    <Link to="/auth/login" className="btn btn-primary px-10">
      Login
    </Link>
  )}
</div>
  {/*  Popup modal */}

      <UserProfilePopup
        user={{
          name: user?.displayName,
          email: user?.email,
          photo: user?.photoURL,
          role: "Member",       // placeholder (replace with real role if available)
          joined: "Sep 2025",   // placeholder (replace with real joined date if available)
        }}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onLogout={handleLogOut}
      />

</div>
  );
};

export default Navbar;
