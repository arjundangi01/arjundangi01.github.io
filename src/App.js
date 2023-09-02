import Navbar from './components/navbar';
import logo from './logo.svg';
import About from './pages/about';
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
      <Projects/>
    </>
  );
}

export default App;
