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
                if(!elapsed.current) {
                    el.classList.add(styles["active"]);
                }
                
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

                <div className={styles["process-container-title"]}>
                    <h1>So funktioniert der<br />Full-Sevice</h1>
                    <p>Unser Full-Service begleitet dich Schritt für Schritt - für eine einfache, sichere und stressfreie Krypto-Steuererklärung.</p>
                </div>

                <div className={styles["process-container-infos"]}>
                    <div className={styles["process-container-infos-item"]}>
                        <div>
                            <h3>1. Kostenloses Erstgespräch</h3>

                            <p>Buche ein unverbindliches 15-minütiges Beratungsgespräch.</p>
                        </div>
                    </div>

                    <div className={styles["process-container-infos-item"]}>
                        <div>
                            <h3>2. Sichere Datenübermittlung</h3>

                            <p>Sende deine Transaktionen verschlüsselt und datenschutzkonform an unser Expertenteam.</p>
                        </div>
                    </div>

                    <div className={styles["process-container-infos-item"]}>
                        <div>
                            <h3>3. Steuerliche Aufbereitung</h3>

                            <p>Wir analysieren, bereinigen und strukturieren deine Krypto-Daten - für eine steuerlich optimale Auswertung.</p>
                        </div>
                    </div>

                    <div className={styles["process-container-infos-item"]}>
                        <div>
                            <h3>4. Persönlicher Steuerreport</h3>

                            <p>Du erhältst einen länderspezifischen Steuerreport mit klaren Erklärungen - bereit für das Finanzamt oder deinen Steuerberater.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Process