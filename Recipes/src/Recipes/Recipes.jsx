import React, { useState } from "react";
import RecipeGrid from "../componentes/RecipeGrid";
import RecipeListStatus from "../componentes/RecipeListStatus";
import { useReceitas } from "../firebase/useReceitas";
import { useAuth } from "../firebase/AuthContext";
import { confirmAndDeleteReceita, migrarReceitasAntigas } from "../firebase/receitasService";
import RecipeFormModal from "../Admin/RecipeFormModal";
import formStyles from "../componentes/Form.module.css";
import styles from "./Recipes.module.css";

function Recipes() {
    const { receitas, loading, error } = useReceitas();
    const { isAdmin } = useAuth();
    const [editing, setEditing] = useState(null);
    const [adding, setAdding] = useState(false);
    const [migrating, setMigrating] = useState(false);
    const [migrationSummary, setMigrationSummary] = useState("");

    async function handleMigrar() {
        const confirmed = window.confirm(
            "Importar as receitas antigas para o Firestore? Receitas já importadas serão apenas atualizadas, não duplicadas."
        );
        if (!confirmed) return;

        setMigrating(true);
        setMigrationSummary("");
        try {
            const { created, updated, errors } = await migrarReceitasAntigas();
            setMigrationSummary(
                `${created} receita(s) criada(s), ${updated} atualizada(s)` +
                (errors.length ? `, ${errors.length} com erro.` : ".")
            );
        } catch {
            setMigrationSummary("Falha ao importar as receitas antigas.");
        }
        setMigrating(false);
    }

    return (
        <>
            <div className={styles.header}>
                <h1>All Recipes</h1>
                {isAdmin && (
                    <div className={styles.adminBar}>
                        <button type="button" className={formStyles.primaryButton} onClick={() => setAdding(true)}>
                            Adicionar receita
                        </button>
                        <button
                            type="button"
                            className={formStyles.secondaryButton}
                            onClick={handleMigrar}
                            disabled={migrating}
                        >
                            {migrating ? "Importando..." : "Importar receitas antigas"}
                        </button>
                    </div>
                )}
                {migrationSummary && <p className={styles.migrationSummary}>{migrationSummary}</p>}
            </div>

            <RecipeListStatus loading={loading} error={error} empty={!loading && !error && receitas.length === 0} />

            {!loading && !error && receitas.length > 0 && (
                <RecipeGrid
                    receitas={receitas}
                    isAdmin={isAdmin}
                    onEdit={setEditing}
                    onDelete={confirmAndDeleteReceita}
                />
            )}

            {editing && (
                <RecipeFormModal receita={editing} onClose={() => setEditing(null)} onSaved={() => setEditing(null)} />
            )}
            {adding && (
                <RecipeFormModal onClose={() => setAdding(false)} onSaved={() => setAdding(false)} />
            )}
        </>
    );
}

export default Recipes;
