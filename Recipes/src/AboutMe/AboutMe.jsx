import React from "react";
import Bia from '../assets/AboutMe/BiaCozin.jpeg';
import Pedra from '../assets/AboutMe/BiaCoPose.jpeg';
import Park from '../assets/AboutMe/BiaBrava.jpeg';
import styles from './About.module.css'

function About() {
    return (
        <div className={styles.Bias}>
            <div className={styles.Boxes}>
                <img src={Bia} alt="Bia" style={{ height: "auto", width: "400px", borderRadius: "30px" }} />
                <p className={styles.PES} style={{ width: "500px" }}>
                    I’m always in the kitchen, cooking and creating delicious food.
                    It’s my favorite way to express creativity and share love with others —
                    because nothing brings people together quite like a good meal.
                </p>
            </div>
            <div className={styles.Boxes}>
                <img src={Pedra} alt="Bia" style={{ height: "auto", width: "400px", borderRadius: "30px" }} />
                <p className={styles.PES} style={{ width: "500px" }}>
                    Every dish I make has a story behind it — a memory, a moment, or a feeling.
                    Cooking isn’t just about recipes; it’s about creating joy, comfort, and connection through every bite.<p>
                    </p>
                </p>
            </div>
            <div className={styles.Boxes}>
                <img src={Park} alt="Bia" style={{ height: "auto", width: "400px", borderRadius: "30px" }} />
                <p className={styles.PES} style={{ width: "500px" }}> <p>
                    I might look serious, but when I cook — you’d better eat it, and you’d better like it!
                    That’s the only rule in my kitchen.
                </p>
                </p>

            </div>
        </div>
    );
}

export default About;