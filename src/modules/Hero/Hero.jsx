import styles from "./Hero.module.css"

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
                    <button>Jetzt Starten →</button>
                </div>
            </div>
        </section>
    );
}

export default Hero