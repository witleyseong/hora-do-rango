import React from "react";
import styles from './Nav.module.css'
import logo from "../assets/logo.png";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter  } from "react-icons/fa";

function Navbar() {
    return (
        <>
            <div className={styles.Wraper}>
                <img className={styles.Logo} src={logo} alt="Logo" title="Logo" />
                <div className={styles.Socials}>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                </div>
                <div className={styles.Navbar}>
                    <a className={styles.NavItem} href="#">Recipes</a>
                    <a className={styles.NavItem} href="#">About</a>
                    <a className={styles.NavItem} href="#">Contact</a>
                </div>
            </div>
        </>


    )
}

export default Navbar;