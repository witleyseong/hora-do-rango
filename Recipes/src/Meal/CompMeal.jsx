import React from "react";
import styles from "./Meal.module.css"
import clock from "../assets/clock.svg"

function CompMeal({ categoria, tempoPreparo }) {
    if (!categoria && !tempoPreparo) return null;

    return (
        <div className={styles.Box}>
            {categoria ? <p className={styles.Lunch}>{categoria}</p> : <span />}
            {tempoPreparo && (
                <div className={styles.Time}>
                    <img src={clock} alt="clock" style={{ width: "20px", height: "auto" }} />
                    <p className={styles.cookTime}>{tempoPreparo}</p>
                </div>
            )}
        </div>
    )
}

export default CompMeal;
