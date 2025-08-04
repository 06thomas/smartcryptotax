import Hero from "./modules/Hero/Hero.jsx"
import Benefit from "./modules/Benefit/Benefit.jsx"
import Process from "./modules/Process/Process.jsx"
import SectionBreak from "./modules/SectionBreak/SectionBreak.jsx"
import CTA from "./modules/CTA/CTA.jsx"
import TrustElements from "./modules/TrustElements/TrustElements.jsx"
import Reviews from "./modules/Reviews/Reviews.jsx"
import FAQ from "./modules/FAQ/FAQ.jsx"
import Footer from "./modules/Footer/Footer.jsx"
import React, { useEffect, useRef, useState } from 'react';

function App() {
    // const [authorized, setAuthorized] = useState(false);
    // const prompted = useRef(false);

    // useEffect(() => {
    //     if (prompted.current) return; // Prevent running twice
    //         prompted.current = true;

    //         const password = prompt('Enter password:');
    //     if (password === 'smartcrypto') {
    //         setAuthorized(true);
    //     } else {
    //         alert('Wrong password!');
    //         window.location.reload();
    //     }
    // }, []);

    return (
        <>
        <Hero />
        <SectionBreak margin="0 0 30px 0" width="100%" />
        <Process />
        <SectionBreak />
        <Benefit />
        <SectionBreak />
        <CTA />
        <TrustElements />
        <Reviews />
        <FAQ />
        <Footer />
        </>
    )
}

export default App
