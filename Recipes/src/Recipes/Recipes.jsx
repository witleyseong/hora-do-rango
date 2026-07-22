import React from "react";
import torta from "../assets/torta.png"
import sushi from "../assets/sushi.png"
import pho from "../assets/beef_pho.png"
import coming from "../assets/comming.png"
import CompMeal from "../Meal/CompMeal"
import mocoto from "../assets/mocoto.png"
import styles from './Recipes.module.css'

import { Link } from "react-router-dom"

function Recipes() {
    return (
        <>
            <div>
                <h1 style={{ textAlign: "center" }}>All Recipes</h1>
            </div>
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

            <div className={styles.cards}>
                <div className={styles.recipes}>
                    <Link to="/RecipeDetails/caldo-de-mocoto">
                        <img src={mocoto} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="torta" />
                        <h2>Coming Soon</h2>
                        <CompMeal />
                    </Link>
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="sushi" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="pho" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="torta" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="sushi" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="pho" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="torta" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="sushi" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="pho" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="torta" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="sushi" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="pho" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="torta" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="sushi" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="pho" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="torta" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="sushi" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="pho" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="torta" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="sushi" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="pho" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
            </div>


        </>
    )
}

export default Recipes;