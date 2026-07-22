import React from "react";
import torta from "../assets/torta.png"
import sushi from "../assets/sushi.png"
import pho from "../assets/beef_pho.png"
import CompMeal from "../Meal/CompMeal"
import { Link } from "react-router-dom"
import styles from './Cards.module.css'

function Cards (){
    return (
             <div className={styles.cards}>
                <div className={styles.recipes}>
                    <Link to="/RecipeDetails/torta-louca">
                        <img src={torta} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="torta" />
                        <h2>TORTA LOUCA LETICIA</h2>
                        <CompMeal />
                    </Link>
                </div>
                <div className={styles.recipes}>
                    <Link to="/RecipeDetails/beef-pho">
                        <img src={pho} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="sushi" />
                        <h2>BEEF PHO</h2>
                        <CompMeal />
                    </Link>
                </div>
                <div className={styles.recipes}>
                    <Link to="/RecipeDetails/sushi">
                        <img src={sushi} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="pho" />
                        <h2>SUSHI</h2>
                        <CompMeal />
                    </Link>
                </div>
            </div>
    )
}

export default Cards;