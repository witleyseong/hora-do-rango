import React from "react";
import styles from "./Meal.module.css"
import clock from "../assets/clock.svg"
function lunch() {
    return (
        <>
            <div className={styles.Box}>
                <p className={styles.Lunch}>Lunch</p>
                <div className={styles.Time}>
                    <img src={clock} alt="clock" style={{width:"20px", height:"auto"}}/>
                    <p className={styles.cookTime}>90 minutes</p>
                </div>
            </div>

        </>
    )
}

export default lunch;