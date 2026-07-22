import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { subscribeReceita } from "../firebase/receitasService";
import styles from "./RecipeDetails.module.css";

function RecipeDetails() {
    const { recipeId } = useParams();
    const [receita, setReceita] = useState(undefined); // undefined = loading, null = not found
    const [error, setError] = useState(null);

    useEffect(() => {
        setReceita(undefined);
        setError(null);
        const unsubscribe = subscribeReceita(
            recipeId,
            (data) => setReceita(data),
            (err) => setError(err)
        );
        return unsubscribe;
    }, [recipeId]);

    if (error) {
        return (
            <div className={styles.containner}>
                <div className={styles.incont}>
                    <p>Não foi possível carregar essa receita agora. Tente novamente mais tarde.</p>
                </div>
            </div>
        );
    }

    if (receita === undefined) {
        return (
            <div className={styles.containner}>
                <div className={styles.incont}>
                    <p>Carregando receita...</p>
                </div>
            </div>
        );
    }

    if (receita === null) {
        return (
            <div className={styles.containner}>
                <div className={styles.incont}>
                    <p>Receita não encontrada.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.containner}>
            <div className={styles.incont}>
                <h1>{receita.nome}</h1>
                {receita.descricao && <p>{receita.descricao}</p>}

                <h3>Ingredientes</h3>
                <ul>{receita.ingredientes.map((i, idx) => <li key={idx}>{i}</li>)}</ul>

                <h3>Modo de preparo</h3>
                <ol>{receita.modoPreparo.map((s, idx) => <li key={idx}>{s}</li>)}</ol>
            </div>
        </div>
    );
}

export default RecipeDetails;
