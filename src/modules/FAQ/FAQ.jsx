import styles from "./FAQ.module.css";
import { useRef, useEffect, useState } from 'react';

function FAQ() {
    const detailsRefs = useRef([]);
    detailsRefs.current = [];

    useEffect(() => {
        const handleToggle = (detailsEl) => {
        const detailsDiv = detailsEl.querySelector("div");

        requestAnimationFrame(() => {
            const newHeight = detailsDiv.scrollHeight;
            detailsDiv.style.height = newHeight + "px";
        });
    };

    detailsRefs.current.forEach((el) => {
        const onToggle = () => handleToggle(el);
        el.addEventListener("toggle", onToggle);
        el._onToggle = onToggle;
    });

    return () => {
        detailsRefs.current.forEach((el) => {
            el.removeEventListener("toggle", el._onToggle);
        });
    };
    }, []);

    return(
        <section className={styles["faq"]}>
            <div className={styles["faq-container"]}>
                <div className={styles["faq-container-title"]}>
                    <h2>FAQ</h2>
                </div>

                <div className={styles["faq-container-content"]}>
                    <details ref={el => el && detailsRefs.current.push(el)} className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>1</span> Was ist SmartCryptoTax?
                        </summary>
                        <div>
                            <p>
                                SmartCryptoTax ist ein professioneller Aufbereitungsservice für Krypto-Trader, der deine Transaktionen vollständig erfasst, bereinigt und steuerlich korrekt aufbereitet - inklusive finalem Steuerreport.
                            </p>
                        </div>
                    </details>

                    <details ref={el => el && detailsRefs.current.push(el)} className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>2</span> Worin unterscheidet sich SmartCryptoTax von klassischen Krypto-Steuer-Tools?
                        </summary>
                        <div>
                            <p>
                                Im Gegensatz zu Self-Service-Tools übernehmen wir die gesamte technische Aufbereitung für dich - kein manuelles Importieren, kein Formatieren, kein Aufwand. Du bekommst ein fertiges, geprüftes Ergebnis.
                            </p>
                        </div>
                    </details>

                    <details ref={el => el && detailsRefs.current.push(el)} className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>3</span> Was kostet die Nutzung von SmartCryptoTax?
                        </summary>
                        <div>
                            <p>
                                Die Preise sind abhängig vom Aufwand und der Transaktionsmenge. In der Regel starten unsere Services ab 249€. Du erhältst vorab ein transparentes Angebot.
                            </p>
                        </div>
                    </details>

                    <details ref={el => el && detailsRefs.current.push(el)} className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>4</span> Kann ich den Service kostenlos testen?
                        </summary>
                        <div>
                            <p>
                                Du kannst jederzeit ein kostenloses Erstgespräch buchen. In diesem klären wir deinen Bedarf, den Ablauf und ob der Service für dich passt - ganz unverbindlich.
                            </p>
                        </div>
                    </details>

                    <details ref={el => el && detailsRefs.current.push(el)} className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>5</span> Welche Börsen und Wallets werden unterstützt?
                        </summary>
                        <div>
                            <p>
                                Nahezu alle gängigen Plattformen sind möglich - z.B. Binance, Coinbase, Kraken, Bitpanda, MetaMask, Phantom, Trust Wallet, u.v.m. Auch DeFi- und NFT-Daten können berücksichtigt werden.
                            </p>
                        </div>
                    </details>

                    <details ref={el => el && detailsRefs.current.push(el)} className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>6</span> Wie werden meine Transaktionen importiert?
                        </summary>
                        <div>
                            <p>
                                Du erhältst genaue Anleitungen, wie du deine Transaktionen exportierst - etwa als CSV-Datei oder per API. Wir kümmern uns um den Rest und übernehmen den gesamten Import für dich.
                            </p>
                        </div>
                    </details>

                    <details ref={el => el && detailsRefs.current.push(el)} className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>7</span> Wie genau sind die Steuerberechnungen?
                        </summary>
                        <div>
                            <p>
                                Alle Daten werden manuell geprüft, bereinigt und mit professioneller Software verarbeitet. Die Aufbereitung erfolgt standardkonform und liefert verlässliche Ergebnisse für das Finanzamt oder den Steuerberater.
                            </p>
                        </div>
                    </details>

                    <details ref={el => el && detailsRefs.current.push(el)} className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>8</span> Werden auch DeFi, NFTs und komplexe Transaktionen unterstützt?
                        </summary>
                        <div>
                            <p>
                                Ja - unser Service ist auch auf komplexere Fälle wie DeFi-Transaktionen, Liquidity Mining, NFT-Trades oder Token Swaps ausgelegt. Wir prüfen alle Daten individuell und passen die Aufbereitung entsprechend an.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
