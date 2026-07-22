import React, { createContext, useContext, useEffect, useState } from "react";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth, ADMIN_UID } from "./firebaseConfig";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
    const [unauthorizedNotice, setUnauthorizedNotice] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser && firebaseUser.uid !== ADMIN_UID) {
                // Someone authenticated with a valid account that isn't the
                // admin's — never grant them a session, not even briefly.
                await signOut(auth);
                setUser(null);
                setUnauthorizedNotice(true);
                setAuthLoading(false);
                return;
            }
            setUser(firebaseUser);
            setAuthLoading(false);
        });
        return unsubscribe;
    }, []);

    async function login(email, password) {
        setUnauthorizedNotice(false);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return { ok: true };
        } catch {
            // Never surface Firebase's specific error code/message to the UI.
            return { ok: false, message: "E-mail ou senha inválidos." };
        }
    }

    async function logout() {
        await signOut(auth);
    }

    const isAdmin = Boolean(user && user.uid === ADMIN_UID);

    return (
        <AuthContext.Provider
            value={{ user, isAdmin, authLoading, unauthorizedNotice, setUnauthorizedNotice, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
}
