import { useState } from 'react';
import Navbar from './components/navbar';
import logo from './logo.svg';
import About from './pages/about';
import Contact from './pages/contact';
import Github from './pages/github';
import Home from './pages/home';
import Projects from './pages/projects';
import Skills from './pages/skills';
import { useSelector } from 'react-redux';
import style from "./app.module.css"
import Tools from './pages/tools';
function App() {
  const [isH1Visible, setIsH1Visible] = useState(true);
 
  
  return (
    < >
      <Navbar />
      <Home isH1Fixed={isH1Visible} setIsH1Fixed={setIsH1Visible} />
      <About />
      <Skills />
      <Tools/>
      <Projects />
      <Github />
      <Contact/>
    </>
  );
}

export default App;
