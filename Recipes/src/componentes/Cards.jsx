import React, { useState } from "react";
import RecipeGrid from "./RecipeGrid";
import RecipeListStatus from "./RecipeListStatus";
import { useReceitas } from "../firebase/useReceitas";
import { useAuth } from "../firebase/AuthContext";
import { confirmAndDeleteReceita } from "../firebase/receitasService";
import RecipeFormModal from "../Admin/RecipeFormModal";

function Cards() {
    const { receitas, loading, error } = useReceitas();
    const { isAdmin } = useAuth();
    const [editing, setEditing] = useState(null);

    const latest = receitas.slice(0, 3);

    return (
        <>
            <RecipeListStatus loading={loading} error={error} empty={!loading && !error && latest.length === 0} />

            {!loading && !error && latest.length > 0 && (
                <RecipeGrid
                    receitas={latest}
                    isAdmin={isAdmin}
                    onEdit={setEditing}
                    onDelete={confirmAndDeleteReceita}
                />
            )}

            {editing && (
                <RecipeFormModal receita={editing} onClose={() => setEditing(null)} onSaved={() => setEditing(null)} />
            )}
        </>
    );
}

export default Cards;
