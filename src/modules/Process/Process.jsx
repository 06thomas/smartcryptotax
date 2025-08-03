import styles from "./Process.module.css"
import React, { useEffect, useRef } from 'react';

function Process() {
    const elapsed = useRef(false);
    const loadedHider = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            var sectionProcess = document.querySelector("." + styles["process"]);
            var el = document.querySelector("." + styles["process-container-media-line"]);

            if(!loadedHider.current) {
                document.querySelector("." + styles["process-container-hide-trace"]).style.height = sectionProcess.getBoundingClientRect().top + window.scrollY + "px";
                loadedHider.current = true;
            }

            if (window.scrollY - (sectionProcess.getBoundingClientRect().top + window.scrollY) >= -screen.height/2) {
                if(!elapsed.current) el.classList.add(styles["active"]);
                
                if ((window.scrollY - (sectionProcess.getBoundingClientRect().top + window.scrollY) - sectionProcess.offsetHeight) + window.innerHeight/2 > -1) {
                    if(!elapsed.current) {
                        el.classList.add(styles["elapsed"]);

                        el.classList.remove(styles["active"]);
                        el.style.height = sectionProcess.offsetHeight + "px";
                        elapsed.current = true;
                    }
                } else {
                    if(elapsed.current) {
                        el.classList.add(styles["active"]);

                        el.classList.remove(styles["elapsed"]);
                        el.style.height = "";
                        elapsed.current = false;
                    }
                }
            } else {
                el.classList.remove(styles["active"]);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <section className={styles["process"]}>
            <div className={styles["process-container"]}>
                <div className={styles["process-container-hide-trace"]}></div>
                <div className={styles["process-container-media-line"]}></div>
                
                <div className={styles["process-container-media-scroll"]}>
                    <div></div>
                    <div></div>
                </div>

                <div className={styles["process-container-infos"]}>
                    <div>
                        <img src="https://placehold.co/260x150" />
                        <h3>Kostenloses Erstgespräch</h3>

                        <ul>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#4ab37b" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Klärung deiner individuellen Krypto-Steuersituation</span>
                            </li>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#4ab37b" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Ersteinschätzung durch erfahrene Steuerexperten</span>
                            </li>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#4ab37b" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Unverbindlich & kostenlos - der ideale Einstieg</span>
                            </li>
                        </ul>

                        <p>Buche dein unverbindliches 15-minütiges Beratungsgespräch mit unseren Krypto-Steuerexperten.</p>
                    </div>

                    <div>
                        <img src="https://placehold.co/260x150" />
                        <h3>Sichere Datenübermittlung</h3>

                        <ul>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#4ab37b" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>DSGVO-konforme & verschlüsselte Datenübertragung</span>
                            </li>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#4ab37b" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Unterstützung bei der strukturierten Aufbereitung deiner Transaktionen</span>
                            </li>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#4ab37b" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Direkter Kontakt zu einem persönlichen Ansprechpartner</span>
                            </li>
                        </ul>

                        <p>Übermittle deine Transaktionsdaten verschlüsselt und datenschutzkonform an unser Expertenteam.</p>
                    </div>

                    <div>
                        <img src="https://placehold.co/260x150" />
                        <h3>Steuerliche Aufbereitung</h3>

                        <ul>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#4ab37b" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Analyse deiner Wallets, Börsen & Transaktionshistorie</span>
                            </li>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#4ab37b" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Optimierung deiner Steuerlast im rechtlichen Rahmen</span>
                            </li>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#4ab37b" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Volle Transparenz über alle Berechnungen & Schritte</span>
                            </li>
                        </ul>

                        <p>Wir übernehmen die komplette Berechnung deiner Krypto-Steuern - du kannst dich entspannt zurücklehnen.</p>
                    </div>

                    <div>
                        <img src="https://placehold.co/260x150" />
                        <h3>Persönlicher Steuerreport</h3>

                        <ul>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#4ab37b" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Individueller Steuerreport für dein Wohnsitzland</span>
                            </li>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#4ab37b" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Klare Darstellung von Gewinnen, Verlusten & Haltefristen</span>
                            </li>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#4ab37b" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Ideal zur Vorlage beim Finanzamt oder Steuerberater</span>
                            </li>
                        </ul>

                        <p>Erhalte einen verständlich aufbereiteten, länderspezifischen Report - ideal für das Finanzamt oder deinen Steuerberater.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process