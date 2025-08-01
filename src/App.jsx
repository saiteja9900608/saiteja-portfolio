import React from 'react';
import saitejapp from './assets/saitejapp.jpg';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}

export default App;
