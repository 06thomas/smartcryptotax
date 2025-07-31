import styles from "./Hero.module.css"
import stylesCTA from "../CTA/CTA.module.css"
import { scrollToSection } from "../../utils/helpers"

function Hero() {
    return(
        <section className={styles["hero"]}>
            <div className={styles["hero-container"]}>
                <div className={styles["hero-container-title"]}>
                    <h1>SmartCryptoTax</h1>
                </div>

                <div className={styles["hero-container-content"]}>
                    <div>
                        <p>💸 Vermeide teure Steuerfehler</p>
                        <p>Du bekommst einen vollständigen, steuerfertigen Bericht - <b>ohne Aufwand für dich.</b></p>
                    </div>

                    <div>
                        <p>✅ Alle Wallets, Börsen, DeFi, NFTs abgedeckt</p>
                        <p>🔗 Aufbereitung mit CoinTracking</p>
                        <p>🌍 Für Kunden in 🇪🇺 & weltweit</p>
                    </div>
                </div>

                <div className={styles["hero-container-button"]}>
                    <button onClick={ () => scrollToSection(stylesCTA["cta"]) }>Jetzt Starten&nbsp;&nbsp;🡢</button>
                </div>

                <div className={styles["hero-container-down"]}>
                    <svg onClick={ () => window.scrollTo(0, screen.height*0.85) } xmlns="http://www.w3.org/2000/svg"  width="1em"  height="1em"  viewBox="0 0 24 24"  fill="none"  stroke="#fff"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
                </div>
            </div>
        </section>
    );
}

export default Hero