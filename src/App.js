import './App.css';
import React from "react";
import Header from "./components/Header";
import MenuOfTheDay from './components/MenuOfTheDay';
let a='a'
let b='a'
function App() {
  return (
    <div>
      {/* { ( a == b ) ? 1 : 0 }
      🧟‍♀️ */}
      <Header/>
      <MenuOfTheDay/>
    </div>
  );
}

export default App;
