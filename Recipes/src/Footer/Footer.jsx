import React from "react";
import styles from "./Footer.module.css"
function Footer() {
    return (
        <div className={styles.Foot}>
            <footer>
                <p className={styles.pe}>@ {new Date().getFullYear()} Hora do Rango. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer;