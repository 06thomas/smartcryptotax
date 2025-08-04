import styles from "./CTA.module.css"
import { useState, useEffect } from 'react';

function CTA({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && (
        <section className={styles["cta-open"]}>
          <div className={styles["cta-open-content"]}>
            <button onClick={() => setIsOpen(false)} className={styles["cta-open-close"]}>
              <i className="fa-regular fa-circle-xmark"></i>
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export function useOpenForm(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const preventTouch = (e) => e.preventDefault();
      document.addEventListener('touchmove', preventTouch, { passive: false });

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('touchmove', preventTouch);
      };
    }
  }, [isOpen]);

  return [isOpen, setIsOpen];
}

export default CTA;