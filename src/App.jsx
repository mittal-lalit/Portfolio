import React from 'react';
import { ThemeProvider } from './themeProvider';
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Experience from './views/Experience';
import Education from './views/Education';
import Skills from './views/Skills';
import Projects from './views/Projects';
import Achievements from './views/Achievements';
import Contact from './views/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-surface-950 transition-colors duration-300">
        <Navbar />
        <main>
          <Home />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
