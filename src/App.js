import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth){
        // User is Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else{
        // User is Logged out
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch])

  return (
    <Router>
      {!user ? (
        <LoginScreen />
      ) : (
        <div className="app">
          <Routes>
          <Route path="/profile" element={<ProfileScreen/>}/>  
          <Route path="/" element={<HomeScreen/>} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
