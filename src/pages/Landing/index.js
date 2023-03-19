import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { setAppearance } from "../../store/action";
import "./landing.css";

function Landing() {
  const [darkMode, setDarkMode] = useState(false);

  const dispatch = useDispatch();
  const { appearance } = useSelector(state => state.record);
  const theme = useTheme()

  const handleModeChange = () => {
    dispatch(setAppearance(appearance == 'light' ? 'dark' : 'light'))
  };

  return (
    <div
      className={`landing-page ${theme.bg} ${theme.text}`}
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to My Simple Landing Page
        </h1>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Register
          </button>
        </div>
        <div className="mt-8">
          <label htmlFor="darkModeToggle" className="inline-flex items-center cursor-pointer">
            <span className="mr-2">Dark Mode</span>
            <div className="relative">
              <input type="checkbox" id="darkModeToggle" className="sr-only" onChange={handleModeChange} />
              <div className={`block ${appearance == 'dark' ? "bg-blue-600" : "bg-gray-300"} w-14 h-8 rounded-full`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${appearance == 'dark' ? "translate-x-6" : "translate-x-1"}`}></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Landing;