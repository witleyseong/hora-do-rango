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

            <div className={styles.cards}>
                <div className={styles.recipes}>
                    <Link to="/RecipeDetails/Mocoto">
                        <img src={mocoto} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="torta" />
                        <h2>Coming Soon</h2>
                        <CompMeal />
                    </Link>
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="sushi" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="pho" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="torta" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="sushi" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="pho" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="torta" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="sushi" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="pho" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="torta" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="sushi" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="pho" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="torta" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="sushi" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="pho" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="torta" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="sushi" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="pho" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
            </div>

            <div className={styles.cards}>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="torta" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="sushi" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
                <div className={styles.recipes}>
                    <img src={coming} style={{ width: "270px", height: "250px", objectFit: "cover", borderRadius: "10px", padding: "10px" }} alt="pho" />
                    <h2>Coming Soon</h2>
                    <CompMeal />
                </div>
            </div>


        </>
    )
}

export default Recipes;