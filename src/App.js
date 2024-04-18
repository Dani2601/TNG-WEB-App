import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react"; // Import useState and useEffect
import { useAuth } from "./context/AuthenticationContext";
import { WelcomeScreen, AuthenticatedScreens, UnauthenticatedScreens } from "./pages/Routes";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from "./components/Cart";
import Bottombar from "./components/Navbar/Bottombar";
import Modal from "react-modal";

function App() {
  const { loggedIn } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('isAuth::::::' + loggedIn)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <Bottombar />
          <Cart />

          <Routes>
            {/* Default route - Display the WelcomeScreen (landing page) */}
            <Route path="/" element={<WelcomeScreen />} />

            {/* Unauthenticated routes */}
            <Route path="/login" element={<UnauthenticatedScreens />} />
            <Route path="/register" element={<UnauthenticatedScreens />} />
            
            {/* Authenticated routes */}
            <Route path="/home" element={<AuthenticatedScreens />} />


          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
