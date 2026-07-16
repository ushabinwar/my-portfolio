import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Nav'
import Cursor from './components/Cursor'
import Aboutpage from './components/About/Aboutpage'
import Contact from './components/Contact'

function App() {
  
//   const [theme, setTheme] = useState("light");


//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";

//     setTheme(savedTheme);

//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";

//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);

//     // document.documentElement.classList.toggle("dark");
//     if (newTheme === "dark") {
//   document.documentElement.classList.add("dark");
// } else {
//   document.documentElement.classList.remove("dark");
// }
//   };
  return (
    <>
    {/* <div className="bg-(--background)">
  <h1 className="text-primary)">
    Usha Binwar
  </h1>

  <button className="bg-(--primary) hover:bg-(--secondary)">
    Hire Me
  </button>

  <span className="text-(--accent)">
    MERN Developer
  </span>
</div> */}
{/* 
<div className="bg-background text-text">
  <h1 className="text-primary">Hello</h1>
  <button className="bg-primary hover:bg-secondary">
    Contact Me
  </button>
</div>
<button
      onClick={toggleTheme}
      className="rounded-lg bg-primary px-4 py-2 text-white transition"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button> */}
         <Cursor/>
         <Navbar/>
      <Routes>
     
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    </>
      
  )
}

export default App
