import Navbar from './components/navbar';
import logo from './logo.svg';
import About from './pages/about';
import Contact from './pages/contact';
import Github from './pages/github';
import Home from './pages/home';
import Projects from './pages/projects';
import Skills from './pages/skills';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contact/>
    </>
  );
}

export default App;
