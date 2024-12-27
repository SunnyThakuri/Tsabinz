import React from "react";
import { GoogleLogin } from "@react-oauth/google"; // Import from @react-oauth/google
import { googleSignupUser } from "../../api"; // Your API call to backend

const GoogleLoginButton = ({ onLoginSuccess, onLoginFailure }) => {
  const responseGoogle = async (response) => {
    try {
      const id_token = response.credential; // Get the Google token

      // Send token to backend API for verification and user sign-up
      const data = await googleSignupUser(id_token);
      
      if (data.token) {
        // Successfully logged in, handle post-login actions
        onLoginSuccess(data.token, data.email);
      } else {
        onLoginFailure("Failed to log in with Google");
      }
    } catch (error) {
      console.log("Error during Google login:", error);
      onLoginFailure("Error occurred while logging in");
    }
  };

  return (
    <GoogleLogin
      onSuccess={responseGoogle}
      onError={() => onLoginFailure("Google Login failed")}
    />
  );
};

export default GoogleLoginButton;
