import React, { useState } from "react";
import Modal from "../componentes/Modal";
import formStyles from "../componentes/Form.module.css";
import { useAuth } from "../firebase/AuthContext";

function AdminLogin({ onClose }) {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        if (submitting) return;
        setError("");
        setSubmitting(true);
        const result = await login(email, password);
        setSubmitting(false);
        if (result.ok) {
            onClose();
        } else {
            setError(result.message);
        }
    }

    return (
        <Modal title="Entrar como administrador" onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div className={formStyles.field}>
                    <label htmlFor="admin-email">E-mail</label>
                    <input
                        id="admin-email"
                        type="email"
                        autoComplete="username"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={formStyles.field}>
                    <label htmlFor="admin-password">Senha</label>
                    <input
                        id="admin-password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className={formStyles.errorText} role="alert">{error}</p>}
                <div className={formStyles.actions}>
                    <button type="button" className={formStyles.secondaryButton} onClick={onClose}>
                        Cancelar
                    </button>
                    <button type="submit" className={formStyles.primaryButton} disabled={submitting}>
                        {submitting ? "Entrando..." : "Entrar"}
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default AdminLogin;
