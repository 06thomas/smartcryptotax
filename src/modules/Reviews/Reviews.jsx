import styles from "./Reviews.module.css"

function Reviews() {
    return(
        <section className={styles["reviews"]}>
            <div className={styles["reviews-container"]}>
                <div className={styles["reviews-container-title"]}>
                    <h1>Kundenbewertungen</h1>
                    <p>Echte Meinungen von echten Menschen – überzeugen Sie sich selbst.</p>
                </div>

                <div className={styles["reviews-container-content"]}>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews