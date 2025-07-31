import styles from "./Process.module.css"
import React, { useEffect, useRef } from 'react';

function Process() {
    const elapsed = useRef(false);
    const loadedHider = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            var sectionProcess = document.querySelector("." + styles["process"]);
            var el = document.querySelector("." + styles["process-container-media-scroll"] + " div:nth-child(1)");

            if(!loadedHider.current) {
                document.querySelector("." + styles["process-container-hide-trace"]).style.height = sectionProcess.getBoundingClientRect().top + window.scrollY + "px";
                loadedHider.current = true;
            }

            if (window.scrollY - (sectionProcess.getBoundingClientRect().top + window.scrollY) >= -screen.height/2) {
                if(!elapsed.current) el.classList.add(styles["active"]);

                if (window.scrollY - (sectionProcess.getBoundingClientRect().top + window.scrollY) >= sectionProcess.offsetHeight - screen.height/2) {
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

                <div className={styles["process-container-media-scroll"]}>
                    <div></div>
                </div>

                <div className={styles["process-container-infos"]}>
                    <div>
                        <img src="https://placehold.co/260x150" />
                        <h3>Kontaktaufnahme</h3>

                        <ul>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#df9739" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Kostenloses Erstgespräch vereinbaren</span>
                            </li>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#df9739" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Unkompliziertes Online-Formular</span>
                            </li>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#df9739" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Persönlicher Ansprechpartner von Anfang an</span>
                            </li>
                        </ul>

                        <p>Fülle einfach unser kurzes Formular aus oder vereinbare direkt ein kostenloses Erstgespräch. So lernen wir dich kennen und können dir gezielt weiterhelfen.</p>
                    </div>

                    <div>
                        <img src="https://placehold.co/260x150" />
                        <h3>Daten sammeln</h3>

                        <ul>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#df9739" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Transparente Auswertung deiner Wallets</span>
                            </li>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#df9739" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Alle Börsen & Transaktionen im Blick</span>
                            </li>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#df9739" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Sicherer Umgang mit deinen Krypto-Daten</span>
                            </li>
                        </ul>

                        <p>Wir analysieren gemeinsam mit dir deine Wallets, Transaktionen und genutzten Börsen. Dabei achten wir auf jede relevante Bewegung - komplett transparent und nachvollziehbar.</p>
                    </div>

                    <div>
                        <img src="https://placehold.co/260x150" />
                        <h3>Aufbereitung</h3>

                        <ul>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#df9739" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Kompletter Report für deinen Steuerberater</span>
                            </li>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#df9739" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Zeit & Nerven bei der Steuer sparen</span>
                            </li>
                            <li>
                                <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="7" fill="#df9739" />
                                    <circle cx="10" cy="10" r="3" fill="#fff" />
                                </svg></span>

                                <span>Klar strukturiert & sofort einsetzbar</span>
                            </li>
                        </ul>

                        <p>Du erhältst einen vollständigen, übersichtlichen Report, der direkt an deinen Steuerberater weitergegeben werden kann - fertig für deine Steuererklärung.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process