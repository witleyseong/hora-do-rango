import React, { useState } from "react";
import styles from './Nav.module.css'
import logo from "../assets/logo.png";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";
import AdminLogin from "../Admin/AdminLogin";

function Navbar() {
    const { isAdmin, authLoading, unauthorizedNotice, setUnauthorizedNotice, logout } = useAuth();
    const [showLogin, setShowLogin] = useState(false);

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
                    <Link className={styles.NavItem} to="/">Home</Link>

                    {!authLoading && (
                        isAdmin ? (
                            <>
                                <span className={styles.AdminStatus}>Administrador conectado</span>
                                <button type="button" className={styles.NavItem} onClick={logout}>Sair</button>
                            </>
                        ) : (
                            <button
                                type="button"
                                className={styles.NavItem}
                                onClick={() => { setUnauthorizedNotice(false); setShowLogin(true); }}
                            >
                                Admin
                            </button>
                        )
                    )}
                </div>
            </div>

            {unauthorizedNotice && (
                <p className={styles.UnauthorizedNotice} role="alert">Usuário não autorizado.</p>
            )}

            {showLogin && <AdminLogin onClose={() => setShowLogin(false)} />}
        </>
    )
}

export default Navbar;
