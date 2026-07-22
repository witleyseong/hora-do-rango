import React, { useState } from "react";
import Modal from "../componentes/Modal";
import formStyles from "../componentes/Form.module.css";
import { addReceita, updateReceita } from "../firebase/receitasService";

const emptyForm = {
    nome: "",
    descricao: "",
    categoria: "",
    imagemUrl: "",
    tempoPreparo: "",
    rendimento: "",
    ingredientes: "",
    modoPreparo: "",
};

function receitaToForm(receita) {
    if (!receita) return emptyForm;
    return {
        nome: receita.nome ?? "",
        descricao: receita.descricao ?? "",
        categoria: receita.categoria ?? "",
        imagemUrl: receita.imagemUrl ?? "",
        tempoPreparo: receita.tempoPreparo ?? "",
        rendimento: receita.rendimento ?? "",
        ingredientes: (receita.ingredientes ?? []).join("\n"),
        modoPreparo: (receita.modoPreparo ?? []).join("\n"),
    };
}

function RecipeFormModal({ receita, onClose, onSaved }) {
    const isEditing = Boolean(receita);
    const [form, setForm] = useState(() => receitaToForm(receita));
    const [error, setError] = useState("");
    const [saving, setSaving] = useState(false);

    function update(field, value) {
        setForm((prev) => ({ ...prev, [field]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (saving) return;

        if (!form.nome.trim() || form.nome.trim().length < 2) {
            setError("Informe um nome com pelo menos 2 caracteres.");
            return;
        }
        if (!form.ingredientes.trim() || !form.modoPreparo.trim()) {
            setError("Informe ao menos um ingrediente e um passo do modo de preparo.");
            return;
        }

        setError("");
        setSaving(true);
        try {
            if (isEditing) {
                await updateReceita(receita.id, form);
            } else {
                await addReceita(form);
            }
            setSaving(false);
            onSaved();
        } catch {
            setSaving(false);
            setError("Não foi possível salvar a receita. Tente novamente.");
        }
    }

    return (
        <Modal title={isEditing ? "Editar receita" : "Adicionar receita"} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div className={formStyles.field}>
                    <label htmlFor="r-nome">Nome</label>
                    <input id="r-nome" required value={form.nome} onChange={(e) => update("nome", e.target.value)} />
                </div>

                <div className={formStyles.field}>
                    <label htmlFor="r-descricao">Descrição</label>
                    <textarea id="r-descricao" value={form.descricao} onChange={(e) => update("descricao", e.target.value)} />
                </div>

                <div className={formStyles.row}>
                    <div className={formStyles.field}>
                        <label htmlFor="r-categoria">Categoria</label>
                        <input id="r-categoria" value={form.categoria} onChange={(e) => update("categoria", e.target.value)} />
                    </div>
                    <div className={formStyles.field}>
                        <label htmlFor="r-tempo">Tempo de preparo</label>
                        <input id="r-tempo" value={form.tempoPreparo} onChange={(e) => update("tempoPreparo", e.target.value)} placeholder="ex: 40 minutos" />
                    </div>
                </div>

                <div className={formStyles.row}>
                    <div className={formStyles.field}>
                        <label htmlFor="r-rendimento">Rendimento</label>
                        <input id="r-rendimento" value={form.rendimento} onChange={(e) => update("rendimento", e.target.value)} placeholder="ex: 4 porções" />
                    </div>
                    <div className={formStyles.field}>
                        <label htmlFor="r-imagem">URL da imagem</label>
                        <input id="r-imagem" value={form.imagemUrl} onChange={(e) => update("imagemUrl", e.target.value)} placeholder="https://..." />
                    </div>
                </div>

                <div className={formStyles.field}>
                    <label htmlFor="r-ingredientes">Ingredientes (um por linha)</label>
                    <textarea id="r-ingredientes" required value={form.ingredientes} onChange={(e) => update("ingredientes", e.target.value)} />
                </div>

                <div className={formStyles.field}>
                    <label htmlFor="r-modo">Modo de preparo (um passo por linha)</label>
                    <textarea id="r-modo" required value={form.modoPreparo} onChange={(e) => update("modoPreparo", e.target.value)} />
                </div>

                {error && <p className={formStyles.errorText} role="alert">{error}</p>}

                <div className={formStyles.actions}>
                    <button type="button" className={formStyles.secondaryButton} onClick={onClose}>
                        Cancelar
                    </button>
                    <button type="submit" className={formStyles.primaryButton} disabled={saving}>
                        {saving ? "Salvando..." : "Salvar"}
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default RecipeFormModal;
