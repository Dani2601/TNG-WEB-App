import logo from './logo.svg';
import './App.css';
import { useAuth } from './context/AuthenticationContext';
import { AuthenticatedScreens, UnauthenticatedScreens } from './pages/Routes';

function App() {
  const { loggedIn } = useAuth();
  
  return !loggedIn ? <AuthenticatedScreens/> : <UnauthenticatedScreens/>;
}

export default App;