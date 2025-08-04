import styles from "./Hero.module.css"
import { scrollToSection } from "../../utils/helpers"
import logoText from "../../assets/images/text.png"
import CTA, { useOpenForm } from "../CTA/CTA.jsx";

function Hero() {
    const [isOpen, setIsOpen] = useOpenForm(false);

    return(
        <>
            <CTA isOpen={isOpen} setIsOpen={setIsOpen} />
            
            <section className={styles["hero"]}>

                <div className={styles["hero-container"]}>
                    <div className={styles["hero-container-title"]}>
                        <img src={logoText} alt="SmartCryptoTax" />
                    </div>

                    <div className={styles["hero-container-content"]}>
                        <h3>Krypto-Steuerexperten, die dir den Aufwand abnehmen</h3>
                        <h1>Full-Service<br /> für deine Krypto-Steuern</h1>

                        <p>Du musst dich nicht durch zeitraubende Steuerformulare quälen. Wir übernehmen das - effizient, gesetzeskonform und stressfrei.</p>
                    </div>

                    <div className={styles["hero-container-button"]}>
                        <button onClick={() => setIsOpen(true) }>Jetzt Starten&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></button>
                    </div>

                    <div className={styles["hero-container-down"]}>
                        <svg onClick={ () => window.scrollTo(0, screen.height*0.5) } xmlns="http://www.w3.org/2000/svg"  width="1em"  height="1em"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero