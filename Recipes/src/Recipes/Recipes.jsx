import React, { useState } from "react";
import RecipeGrid from "../componentes/RecipeGrid";
import RecipeListStatus from "../componentes/RecipeListStatus";
import { useReceitas } from "../firebase/useReceitas";
import { useAuth } from "../firebase/AuthContext";
import { confirmAndDeleteReceita } from "../firebase/receitasService";
import RecipeFormModal from "../Admin/RecipeFormModal";
import formStyles from "../componentes/Form.module.css";
import styles from "./Recipes.module.css";

function Recipes() {
    const { receitas, loading, error } = useReceitas();
    const { isAdmin } = useAuth();
    const [editing, setEditing] = useState(null);
    const [adding, setAdding] = useState(false);

    return (
        <>
            <div className={styles.header}>
                <h1>All Recipes</h1>
                {isAdmin && (
                    <div className={styles.adminBar}>
                        <button type="button" className={formStyles.primaryButton} onClick={() => setAdding(true)}>
                            Adicionar receita
                        </button>
                    </div>
                )}
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
