import styles from "./Reviews.module.css"
import { useEffect, useRef } from "react";

function Reviews() {
    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current.scrollTo({
            left: 612,
            behavior: "auto",
        });
    }, []);

    return(
        <section className={styles["reviews"]}>
            <div className={styles["reviews-container"]}>
                <div className={styles["reviews-container-title"]}>
                    <h1>Rezensionen</h1>
                    <p>Echte Meinungen von echten Menschen – überzeugen Sie sich selbst.</p>
                </div>

                <div ref={ scrollRef } className={styles["reviews-container-content"]}>
                    <div>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>"Super einfache Bedienung! Ich hatte meine Krypto-Steuern in unter 10 Minuten erledigt. SmartCryptoTax spart mir jedes Jahr enorm viel Zeit - absolute Empfehlung für alle Hodler!"</p>
                        <p>- Lukas M.</p>
                    </div>
                    <div>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>"Endlich eine Plattform, die Krypto wirklich versteht. Alle Wallets und Börsen problemlos importiert. Steuerbericht war auf Knopfdruck fertig. 5 Sterne für SmartCryptoTax - top Service!"</p>
                        <p>- Anna R.</p>
                    </div>
                    <div>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>"SmartCryptoTax hat mir enorm geholfen! Kein Steuerchaos mehr mit meinen DeFi-Erträgen. Der Support war schnell und kompetent. Werde ich definitiv wieder nutzen. Vielen Dank!"</p>
                        <p>- Tobias W.</p>
                    </div>
                    <div>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>"Genial! Selbst komplexe Transaktionen wurden korrekt erkannt. Die Benutzeroberfläche ist super intuitiv. SmartCryptoTax ist für mich DIE Lösung für meine Krypto-Steuern. Jeder Cent wert."</p>
                        <p>- Miriam S.</p>
                    </div>
                    <div>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>"War anfangs skeptisch, aber SmartCryptoTax hat überzeugt. Alles läuft reibungslos, sogar NFTs wurden richtig erfasst. Ich fühle mich endlich sicher bei der Steuererklärung. 5 Sterne ohne Frage!"</p>
                        <p>- Kevin L.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews