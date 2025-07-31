import styles from "./Reviews.module.css";

function Reviews() {
    const reviews = [
        {
            name: "Lukas M.",
            text: "Super einfache Bedienung! Ich hatte meine Krypto-Steuern in unter 10 Minuten erledigt. SmartCryptoTax spart mir jedes Jahr enorm viel Zeit - absolute Empfehlung für alle Hodler!"
        },
        {
            name: "Anna R.",
            text: "Endlich eine Plattform, die Krypto wirklich versteht. Alle Wallets und Börsen problemlos importiert. Steuerbericht war auf Knopfdruck fertig. 5 Sterne für SmartCryptoTax - top Service!"
        },
        {
            name: "Tobias W.",
            text: "SmartCryptoTax hat mir enorm geholfen! Kein Steuerchaos mehr mit meinen DeFi-Erträgen. Der Support war schnell und kompetent. Werde ich definitiv wieder nutzen. Vielen Dank!"
        },
        {
            name: "Miriam S.",
            text: "Genial! Selbst komplexe Transaktionen wurden korrekt erkannt. Die Benutzeroberfläche ist super intuitiv. SmartCryptoTax ist für mich DIE Lösung für meine Krypto-Steuern. Jeder Cent wert."
        },
        {
            name: "Kevin L.",
            text: "War anfangs skeptisch, aber SmartCryptoTax hat überzeugt. Alles läuft reibungslos, sogar NFTs wurden richtig erfasst. Ich fühle mich endlich sicher bei der Steuererklärung. 5 Sterne ohne Frage!"
        }
    ];

    return (
        <section className={styles["reviews"]}>
            <div className={styles["reviews-container"]}>
                <div className={styles["reviews-container-title"]}>
                    <h1>Rezensionen</h1>
                    <p>Echte Meinungen von echten Menschen – überzeugen Sie sich selbst.</p>
                </div>

                <div className={styles["reviews-marquee"]}>
                    <div className={styles["reviews-track"]}>
                        {[...Array(2)].map((_, i) =>
                            reviews.map((review, idx) => (
                                <div className={styles["reviews-card"]} key={`review-${i}-${idx}`}>
                                    <p>⭐⭐⭐⭐⭐</p>
                                    <p>"{review.text}"</p>
                                    <p>- {review.name}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;