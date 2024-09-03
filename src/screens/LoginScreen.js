import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signin, setSignin] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <button onClick={() => setSignin(true)} className="loginScreen_button">
          Sign In
        </button>
        <div className="loginScreen_gradiant" />
      </div>
      <div className="loginScreen_body">
        {signin ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited Films, TV programmes and More.</h1>
            <h2>Watch anywhere, Cancel any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email" />
                <button
                  onClick={() => setSignin(true)}
                  className="loginScreen_getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
