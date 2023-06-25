import logo from './logo.svg';
import './App.css';
import { useAuth } from './context/AuthenticationContext';
import { AuthenticatedScreens, UnauthenticatedScreens } from './pages/Routes';
import Cart from './components/Cart';

function App() {
  const { loggedIn } = useAuth();

  // console.log("loggedIn",loggedIn)
  
  return (
    <div>
      <Cart/>
      {loggedIn ? <AuthenticatedScreens/> : <UnauthenticatedScreens/>}
    </div>
  )
}

export default App;