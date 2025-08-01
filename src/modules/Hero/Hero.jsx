import styles from "./Hero.module.css"
import stylesCTA from "../CTA/CTA.module.css"
import { scrollToSection } from "../../utils/helpers"
import logoText from "../../assets/images/text.png"

function Hero() {
    return(
        <section className={styles["hero"]}>
            <div className={styles["hero-container"]}>
                <div className={styles["hero-container-title"]}>
                    <img src={logoText} alt="SmartCryptoTax" />
                </div>

                <div className={styles["hero-container-content"]}>
                    <div>
                        <p>&#x1F4B0; Vermeide teure Steuerfehler</p>
                        <p>Du bekommst einen vollständigen, steuerfertigen Bericht - <b>ohne Aufwand für dich.</b></p>
                    </div>

                    <div>
                        <p>&#x2705; Alle Wallets, Börsen, DeFi, NFTs</p>
                        <p>&#x1F517; Aufbereitung mit CoinTracking</p>
                        <p>&#x1F30D; Für Kunden in 🇪🇺 & weltweit</p>
                    </div>
                </div>

                <div className={styles["hero-container-button"]}>
                    <button onClick={ () => scrollToSection(stylesCTA["cta"]) }>Jetzt Starten&nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></button>
                </div>

                <div className={styles["hero-container-down"]}>
                    <svg onClick={ () => window.scrollTo(0, screen.height*0.5) } xmlns="http://www.w3.org/2000/svg"  width="1em"  height="1em"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
                </div>
            </div>
        </section>
    );
}

export default Hero