import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "./context/AuthenticationContext";
import { BrowserRouter } from "react-router-dom";
import store, { persistor } from "./store/store";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ThemeContainer from "./context/ThemeContainer";

import "./index.css";
import "tw-elements";
import "react-toastify/dist/ReactToastify.min.css"; 

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <AuthProvider>
          <ThemeContainer>
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
              <App />
              <ToastContainer />
            </GoogleOAuthProvider>
          </ThemeContainer>
        </AuthProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
