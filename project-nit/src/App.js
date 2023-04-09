
import './App.css';
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutMe from './components/aboutMe/AboutMe';
import MyTeam from './components/card/MyTeam/MyTeam';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home className='home' appName="MP" username="Marko Popovic" />
      <MyTeam />
      <AboutMe />
    </div>
  );
}


