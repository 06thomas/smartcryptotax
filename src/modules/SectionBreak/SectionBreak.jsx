import styles from "./SectionBreak.module.css"

function SectionBreak({ margin = "30px 0", width = "85%" }) {
    return(
        <div className={styles["section-break"]} style={{ margin }}>
            <div style={{ width }}></div>
        </div>
    );
}

export default SectionBreak