import styles from "./Process.module.css"
import React, { useEffect } from 'react';

function Process() {
    var elapsed = false;
    var loadedHider = false;

    useEffect(() => {
        const handleScroll = () => {
            var sectionProcess = document.querySelector("." + styles["process"]);
            var el = document.querySelector("." + styles["process-container-media-scroll"] + " div:nth-child(1)");

            if(!loadedHider) {
                document.querySelector("." + styles["process-container-hide-trace"]).style.height = sectionProcess.getBoundingClientRect().top + window.scrollY + "px";
                loadedHider = true;
            }

            if (window.scrollY >= (sectionProcess.getBoundingClientRect().top + window.scrollY/2)) {
                if(!elapsed) el.classList.add(styles["active"]);

                if (window.scrollY >= (sectionProcess.getBoundingClientRect().bottom + window.scrollY) - screen.height/2) {
                    if(!elapsed) {
                        el.classList.add(styles["elapsed"]);

                        el.classList.remove(styles["active"]);
                        el.style.height = sectionProcess.offsetHeight + "px";
                        elapsed = true;
                    }
                } else {
                    if(elapsed) {
                        el.classList.add(styles["active"]);

                        el.classList.remove(styles["elapsed"]);
                        el.style.height = "";
                        elapsed = false;
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
                        <img src="https://placehold.co/250x150" />
                        <h3>Kontaktaufnahme</h3>

                        <ul>
                            <li>
                                <span><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15" cy="15" r="15" fill="#397CDF" />
                                </svg></span>

                                <span>Kostenloses Erstgespräch vereinbaren</span>
                            </li>
                            <li>
                                <span><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15" cy="15" r="15" fill="#397CDF" />
                                </svg></span>

                                <span>Unkompliziertes Online-Formular</span>
                            </li>
                            <li>
                                <span><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15" cy="15" r="15" fill="#397CDF" />
                                </svg></span>

                                <span>Persönlicher Ansprechpartner von Anfang an</span>
                            </li>
                        </ul>

                        <p>Fülle einfach unser kurzes Formular aus oder vereinbare direkt ein kostenloses Erstgespräch. So lernen wir dich kennen und können dir gezielt weiterhelfen.</p>
                    </div>

                    <div>
                        <img src="https://placehold.co/250x150" />
                        <h3>Daten sammeln</h3>

                        <ul>
                            <li>
                                <span><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15" cy="15" r="15" fill="#397CDF" />
                                </svg></span>

                                <span>Transparente Auswertung deiner Wallets</span>
                            </li>
                            <li>
                                <span><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15" cy="15" r="15" fill="#397CDF" />
                                </svg></span>

                                <span>Alle Börsen & Transaktionen im Blick</span>
                            </li>
                            <li>
                                <span><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15" cy="15" r="15" fill="#397CDF" />
                                </svg></span>

                                <span>Sicherer Umgang mit deinen Krypto-Daten</span>
                            </li>
                        </ul>

                        <p>Wir analysieren gemeinsam mit dir deine Wallets, Transaktionen und genutzten Börsen. Dabei achten wir auf jede relevante Bewegung - komplett transparent und nachvollziehbar.</p>
                    </div>

                    <div>
                        <img src="https://placehold.co/250x150" />
                        <h3>Aufbereitung</h3>

                        <ul>
                            <li>
                                <span><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15" cy="15" r="15" fill="#397CDF" />
                                </svg></span>

                                <span>Kompletter Report für deinen Steuerberater</span>
                            </li>
                            <li>
                                <span><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15" cy="15" r="15" fill="#397CDF" />
                                </svg></span>

                                <span>Zeit & Nerven bei der Steuer sparen</span>
                            </li>
                            <li>
                                <span><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15" cy="15" r="15" fill="#397CDF" />
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