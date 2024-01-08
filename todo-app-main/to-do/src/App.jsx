import { useState } from 'react'
import Header from './Header'
import List from './List'
import './App.css'


function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleMode() {
    setDarkMode((prevMode) => !prevMode);
  }
  return (
    <div
    className={darkMode ? "dark-mode" : "light-mode"}
    >
      <div className="container">
        <Header darkMode={darkMode} toggleMode={toggleMode} />
        <List darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App
