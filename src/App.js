import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react"; // Import useState and useEffect
import { useAuth } from "./context/AuthenticationContext";
import { AuthenticatedScreens, UnauthenticatedScreens } from "./pages/Routes";
import Cart from "./components/Cart";
import Bottombar from "./components/Navbar/Bottombar";

function App() {
  const { loggedIn } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
          <Bottombar/>
          <Cart />

          {loggedIn ? <AuthenticatedScreens /> : <UnauthenticatedScreens />}
        </>
      )}
    </div>
  );
}

export default App;
