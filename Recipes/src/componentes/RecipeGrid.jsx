import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeGrid.module.css";
import CompMeal from "../Meal/CompMeal";
import placeholder from "../assets/comming.png";

function RecipeGrid({ receitas, isAdmin, onEdit, onDelete }) {
    return (
        <div className={styles.cards}>
            {receitas.map((r) => (
                <div className={styles.recipes} key={r.id}>
                    <Link to={`/RecipeDetails/${r.id}`}>
                        <img
                            src={r.imagemUrl || placeholder}
                            onError={(e) => { e.currentTarget.src = placeholder; }}
                            className={styles.image}
                            alt={r.nome}
                        />
                        <h2>{r.nome}</h2>
                        <CompMeal categoria={r.categoria} tempoPreparo={r.tempoPreparo} />
                    </Link>
                    {isAdmin && (
                        <div className={styles.adminActions}>
                            <button type="button" className={styles.editButton} onClick={() => onEdit(r)}>
                                Editar
                            </button>
                            <button type="button" className={styles.deleteButton} onClick={() => onDelete(r)}>
                                Excluir
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default RecipeGrid;
