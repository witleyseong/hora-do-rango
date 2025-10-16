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
                        <img src={torta} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="torta" />
                        <h2>TORTA LOUCA LETICIA</h2>
                        <CompMeal />
                    </Link>
                </div>
                <div className={styles.recipes}>
                    <Link to="/RecipeDetails/beef-pho">
                        <img src={pho} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="sushi" />
                        <h2>BEEF PHO</h2>
                        <CompMeal />
                    </Link>
                </div>
                <div className={styles.recipes}>
                    <Link to="/RecipeDetails/sushi">
                        <img src={sushi} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="pho" />
                        <h2>SUSHI</h2>
                        <CompMeal />
                    </Link>
                </div>
            </div>
    )
}

export default Cards;