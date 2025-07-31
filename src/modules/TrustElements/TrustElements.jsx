import styles from "./TrustElements.module.css";
import { useEffect, useRef, useState } from "react";

const TrustItem = ({ file, label, classLabel }) => (
    <div className={"item" + classLabel}>
        <img src={`/smartcryptotax/trustelements/${file}.svg`} width={24} height={24} />
        <p>{label}</p>
    </div>
);

function TrustElements() {
    const containerRef = useRef(null);
    const [translateX, setTranslateX] = useState(0);

    const trustItems = [
        ["checked", "Geprüft"],
        ["data_protection", "Datenschutz"],
        ["dsgvo", "DSGVO"],
        ["encrypted", "Verschlüsselt"],
        ["eu", "EU"],
        ["iso", "ISO"],
        ["payment", "Zahlung"],
        ["privacy-dashboard", "Sicherheit"],
        ["review", "Bewertung"],
        ["security", "Vertrauen"],
        ["speed", "Speed"],
        ["ssl", "SSL"],
        ["support", "Support"],
    ];

    const extendedItems = [...trustItems, ...trustItems];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationFrameId;
        let lastTimestamp = null;
        let x = 0;
        const speed = 50;

        const singleListWidth = container.scrollWidth / 2;

        function animate(timestamp) {
            if (lastTimestamp !== null) {
                const delta = timestamp - lastTimestamp;
                x += (speed * delta) / 1000;
                if (x >= singleListWidth) {
                    x = 0;
                }
                setTranslateX(-x);
            }
            lastTimestamp = timestamp;
            animationFrameId = requestAnimationFrame(animate);
        }

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section className={styles["trust-elements"]}>
            <div className={styles["trust-elements-container"]}>
                <div className={styles["trust-elements-container-fade-left"]}></div>
                <div className={styles["trust-elements-container-fade-right"]}></div>
                
                <div className={styles["trust-elements-container-list-wrapper"]}>
                    <div
                    ref={containerRef}
                    className={styles["trust-elements-container-list"]}
                    style={{ transform: `translateX(${translateX}px)` }}
                    >
                    {extendedItems.map(([file, label], index) => (
                        <TrustItem key={`${file}-${index}`} file={file} label={label} classLabel={index % trustItems.length} />
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrustElements;
