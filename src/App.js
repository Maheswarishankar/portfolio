
import './App.css';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import Header from './components/Navbar/Header.jsx';
import ProjectData from './components/Projects/ProjectData.jsx';
import Skills from './components/Skills/Skills.jsx';



function App() {
  return (
    <div className="App">
      <Header />

      <section id='Home'>
        <Home />
      </section>
      <section id='About'>
        <About />
      </section>

      <section id='Skills'>
        <Skills />
      </section>
      <section id='Projects'>
        <ProjectData/>
      </section>

      <section id='Contact'>
        <Contact/>
      </section>

      {/* <section id='Resume'>
        <Home />
      </section> */}

      


    </div>
  );
}

export default App;
