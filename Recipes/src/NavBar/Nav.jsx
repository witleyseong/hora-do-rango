import React from "react";
import styles from './Nav.module.css'
import logo from "../assets/logo.png";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter  } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                    <Link className={styles.NavItem} to="/Recipes">Recipes</Link>
                    <Link className={styles.NavItem} to="/About">About me</Link>
                    <Link className={styles.NavItem} to="/">Home</Link>
                </div>
            </div>
        </>


    )
}

export default Navbar;