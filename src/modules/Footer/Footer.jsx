import styles from "./Footer.module.css";
import logoText from "../../assets/images/text.png"

function Footer() {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer-container"]}>
                <div className={styles["footer-container-content-title"]}>
                    <img src={logoText} alt="SmartCryptoTax" />
                </div>

                <div className={styles["footer-container-content"]}>
                    <div className={styles["footer-container-content-links"]}>
                        <h5><a href=".">Impressum</a></h5>
                        <h5><a href=".">Datenschutz</a></h5>
                    </div>

                    <div className={styles["footer-container-contact"]}>
                        <div className={styles["footer-container-contact-item"]}>
                            <svg fill="rgb(1, 3, 11)" width="24px" height="24px" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M150,34.94c-27.5-27.5-72-27.5-100,0a70.49,70.49,0,0,0-8,90l33.5,48a30.4,30.4,0,0,0,49.5,0l33.5-48A71.18,71.18,0,0,0,150,34.94Zm-8.5,78.5-33.5,48a10.31,10.31,0,0,1-16.5,0l-33.5-48a50.14,50.14,0,0,1,6-64.5c20-20,52-20,71.5,0a50.19,50.19,0,0,1,6,64.5Zm-41.5-67a35,35,0,1,0,35,35A34.78,34.78,0,0,0,100,46.44Zm0,50a15,15,0,1,1,15-15A14.73,14.73,0,0,1,100,96.44Z"/></svg>
                            
                            <div>
                                <h6>Standort</h6>
                                <p>Grazerstraße 69, Graz</p>
                            </div>
                        </div>

                        <div className={styles["footer-container-contact-item"]}>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="rgb(1, 3, 11)" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z" fill="rgb(1, 3, 11)"/></svg>
                            
                            <div>
                                <h6>Ruf an</h6>
                                <p>+43 660 1231234</p>
                            </div>
                        </div>

                        <div className={styles["footer-container-contact-item"]}>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#00000000" xmlns="http://www.w3.org/2000/svg"><path d="M4 19L9 14M20 19L15 14M3.02832 10L10.2246 14.8166C10.8661 15.2443 11.1869 15.4581 11.5336 15.5412C11.8399 15.6146 12.1593 15.6146 12.4657 15.5412C12.8124 15.4581 13.1332 15.2443 13.7747 14.8166L20.971 10M10.2981 4.06879L4.49814 7.71127C3.95121 8.05474 3.67775 8.22648 3.4794 8.45864C3.30385 8.66412 3.17176 8.90305 3.09111 9.161C3 9.45244 3 9.77535 3 10.4212V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.0799 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V10.4212C21 9.77535 21 9.45244 20.9089 9.161C20.8282 8.90305 20.6962 8.66412 20.5206 8.45864C20.3223 8.22648 20.0488 8.05474 19.5019 7.71127L13.7019 4.06879C13.0846 3.68116 12.776 3.48735 12.4449 3.4118C12.152 3.34499 11.848 3.34499 11.5551 3.4118C11.224 3.48735 10.9154 3.68116 10.2981 4.06879Z" stroke="rgb(1, 3, 11)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>

                            <div>
                                <h6>E-Mail</h6>
                                <p>contact@smartcryptotax.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr style={{ height: "1px", border: "0" }} color="rgb(1, 3, 11)" />

                <div className={styles["footer-container-copy"]}>
                    <div>
                        <p>
                            © 2025 SmartCryptoTax | All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
