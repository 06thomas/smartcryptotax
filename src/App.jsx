import Hero from "./modules/Hero/Hero.jsx"
import Benefit from "./modules/Benefit/Benefit.jsx"
import Process from "./modules/Process/Process.jsx"
import SectionBreak from "./modules/SectionBreak/SectionBreak.jsx"
import Contact from "./modules/Contact/Contact.jsx"
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [authorized, setAuthorized] = useState(false);
  const prompted = useRef(false);

  useEffect(() => {
    if (prompted.current) return; // Prevent running twice
    prompted.current = true;

    const password = prompt('Enter password:');
    if (password === 'smartcrypto') {
      setAuthorized(true);
    } else {
      alert('Wrong password!');
      window.location.reload();
    }
  }, []);

  return (
    <>
      <Hero />
      <Benefit />
      <SectionBreak />
      <Process />
      <SectionBreak />
      <Contact />
    </>
  )
}

export default App
