import styles from "./TrustElements.module.css";

const TrustItem = ({ file, label }) => (
    <div>
        <img src={`/smartcryptotax/trustelements/${file}.svg`} width={24} height={24} />
        <p>{label}</p>
    </div>
);

function TrustElements() {
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

    return (
        <section className={styles["trust-elements"]}>
            <div className={styles["trust-elements-container"]}>
                <div className={styles["trust-elements-container-fade-left"]}></div>
                <div className={styles["trust-elements-container-fade-right"]}></div>
                
                <div className={styles["trust-elements-container-list-wrapper"]}>
                    <div className={styles["trust-elements-container-list"]}>
                        {[...Array(2)].map((_, i) =>
                            trustItems.map(([file, label], index) => (
                            <TrustItem
                                key={`trust-${i}-${index}`}
                                file={file}
                                label={label}
                            />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TrustElements;
