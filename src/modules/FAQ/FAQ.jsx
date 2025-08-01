import styles from "./FAQ.module.css";

function FAQ() {
    return(
        <section className={styles["faq"]}>
            <div className={styles["faq-container"]}>
                <div className={styles["faq-container-title"]}>
                    <h2>FAQ</h2>
                </div>

                <div className={styles["faq-container-content"]}>
                    <details className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>1</span> Was ist SmartCryptoTax?
                        </summary>
                        <div>
                            <p>
                                SmartCryptoTax ist ein Open-Source-Kryptowährungssteuerrechner mit Fokus auf Datenschutz. Er hilft Nutzern dabei, ihre Steuerpflichten aus Krypto-Transaktionen genau zu berechnen. Die Plattform unterstützt verschiedene Berechnungsmethoden und bietet Tools zur Verwaltung und Meldung von Transaktionen.
                            </p>
                        </div>
                    </details>

                    <details className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>2</span> Wie kann ich mit SmartCryptoTax anfangen?
                        </summary>
                        <div>
                            <p>
                                Besuche die offizielle Website von SmartCryptoTax und folge den dort bereitgestellten Anweisungen zur Einrichtung. Die Plattform bietet eine benutzerfreundliche Oberfläche, die dich Schritt für Schritt durch das Importieren deiner Transaktionsdaten und das Erstellen von Steuerberichten führt.
                            </p>
                        </div>
                    </details>

                    <details className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>3</span> Welche Funktionen bietet SmartCryptoTax?
                        </summary>
                        <div>
                            <p>
                                SmartCryptoTax bietet unter anderem folgende Funktionen:<br />
                                - Unterstützung verschiedener Methoden zur Steuerberechnung<br />
                                - Tools zum Importieren und Verwalten von Transaktionsdaten<br />
                                - Erstellung von Steuerberichten, die mit verschiedenen Steuerbehörden kompatibel sind<br />
                                - Datenschutzorientiertes Design zum Schutz der Nutzerdaten
                            </p>
                        </div>
                    </details>

                    <details className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>4</span> Ist SmartCryptoTax für Nutzer in Österreich geeignet?
                        </summary>
                        <div>
                            <p>
                                Ja, SmartCryptoTax kann von Nutzern in Österreich verwendet werden. Beachte jedoch, dass die österreichischen Steuergesetze spezielle Anforderungen an Kryptowährungstransaktionen stellen können. Beispielsweise werden Gewinne aus dem Verkauf oder der Veräußerung von Kryptowährungen unabhängig von der Haltedauer als Einkünfte aus Kapitalvermögen besteuert. Es ist ratsam, einen Steuerberater zu konsultieren, der mit den österreichischen Gesetzen vertraut ist, um sicherzustellen, dass alle Vorschriften eingehalten werden.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
