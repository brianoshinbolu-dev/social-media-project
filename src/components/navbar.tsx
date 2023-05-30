import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {

  // Details of the current user
  // const [user, loading, error] = useAuthState(auth);  // you can get more from this
  const [user] = useAuthState(auth);

  //SignOut function
  const signUserOut = async () => {
    await signOut(auth);
  };


  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
      </div>

      <div className="user">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} alt="" width="50" height="50" />
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
