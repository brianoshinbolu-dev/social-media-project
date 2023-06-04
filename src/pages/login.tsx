import React from "react";
import{ auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();


  // SignIn function
  const signinWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result);
    navigate("/");
  }


  return (
    <div>
      <p>Sign in with Google To Continue</p>
      <button onClick={signinWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
