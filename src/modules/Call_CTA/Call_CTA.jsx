import styles from "./Call_CTA.module.css"
import CTA, { useOpenForm } from "../CTA/CTA.jsx";

function Call_CTA_Button() {
    const [isOpen, setIsOpen] = useOpenForm(false);

    return(
        <>
            <CTA isOpen={isOpen} setIsOpen={setIsOpen} />

            <section className={styles["call-cta"]}>
                <div className={styles["call-cta-container"]}>
                    <button onClick={() => setIsOpen(true) }>Kostenlos starten</button>
                </div>
            </section>
        </>
    );
}

export default Call_CTA_Button