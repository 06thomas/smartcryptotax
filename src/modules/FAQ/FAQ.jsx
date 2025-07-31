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
                            <span>1</span> What is SmartCryptoTax?
                        </summary>
                        <div>
                            <p>
                                SmartCryptoTax is an open-source, privacy-focused cryptocurrency tax calculator designed to help users accurately calculate their crypto tax liabilities. It supports various tax calculation methods and provides tools to manage and report crypto transactions efficiently.
                            </p>
                        </div>
                    </details>

                    <details className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>2</span> How do I get started with SmartCryptoTax?
                        </summary>
                        <div>
                            <p>
                                To begin using SmartCryptoTax, visit the official website and follow the setup instructions provided. The platform offers a user-friendly interface to guide you through the process of importing your transaction data and generating tax reports.
                            </p>
                        </div>
                    </details>

                    <details className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>3</span> What features does SmartCryptoTax offer?
                        </summary>
                        <div>
                            <p>
                                SmartCryptoTax includes features such as:<br />
                                - Support for multiple tax calculation methods.<br />
                                - Tools to import and manage transaction data.<br />
                                - Generation of tax reports compatible with various tax authorities.<br />
                                - Privacy-focused design to ensure user data security.
                            </p>
                        </div>
                    </details>

                    <details className={styles["faq-container-content-card"]}>
                        <summary>
                            <span>4</span> Is SmartCryptoTax suitable for users in Austria?
                        </summary>
                        <div>
                            <p>
                                Yes, SmartCryptoTax can be used by Austrian users. However, it's important to note that Austrian tax laws may have specific requirements regarding cryptocurrency transactions. For instance, profits from selling or disposing of cryptocurrency are taxed as income from capital assets, regardless of the holding period. It's advisable to consult with a tax professional familiar with Austrian tax laws to ensure compliance. 
                            </p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
}

export default FAQ