import React from "react";
import styles from "./Section.module.css"
import cheff from "../assets/Cheff_Bia.jpg"
function Section1() {
    return (
        <>
            <div className={styles.block}>
                <div className={styles.SectionOne}>
                    <h1>Chef Bia keeps your favorite recipes at your fingertips!</h1>
                    <p>Join Chef Bia in the kitchen and discover simple, delicious recipes made with love. Whether you're a beginner or a foodie, every dish is a new adventure!</p>
                    <button className={styles.Button}>About me</button>
                </div>
                <div className={styles.container}>
                    <img className={styles.Cheff} d src={cheff} alt="Cheff Bia" />
                </div>
            </div>
            <div className={styles.holder}>
                <div className={styles.H2}>
                    <h2>Get recipes straight to your inbox!</h2>
                </div>
                <div className={styles.Email}>
                    <input type="text" placeholder="Email address" />
                    <button>Subscribe</button>
                </div>
            </div>
            <hr />
          
        </>

    )
}

export default Section1;