import './App.css';
import About from './components/about/About';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer.jsx';
import NavBar from './components/header/NavBar';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className='main-div'>
      <NavBar />
      <section id="home">
        <Banner />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;