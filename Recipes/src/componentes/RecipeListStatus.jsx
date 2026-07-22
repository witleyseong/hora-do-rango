import React from "react";

function RecipeListStatus({ loading, error, empty }) {
    if (loading) {
        return <p style={{ textAlign: "center", padding: "24px" }}>Carregando receitas...</p>;
    }
    if (error) {
        return (
            <p style={{ textAlign: "center", padding: "24px", color: "#b3261e" }}>
                Não foi possível carregar as receitas agora. Tente novamente mais tarde.
            </p>
        );
    }
    if (empty) {
        return <p style={{ textAlign: "center", padding: "24px" }}>Nenhuma receita cadastrada ainda.</p>;
    }
    return null;
}

export default RecipeListStatus;
