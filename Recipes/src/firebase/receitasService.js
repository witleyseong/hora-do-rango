import {
    collection,
    doc,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc,
    getDoc,
    setDoc,
    serverTimestamp,
    orderBy,
    query,
} from "firebase/firestore";
import { db } from "./firebaseConfig";
import { receitasAntigas } from "./receitasAntigas";

const receitasRef = collection(db, "receitas");

export function subscribeReceitas(onData, onError) {
    const q = query(receitasRef, orderBy("createdAt", "desc"));
    return onSnapshot(
        q,
        (snapshot) => {
            onData(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
        },
        (error) => onError(error)
    );
}

export function subscribeReceita(id, onData, onError) {
    return onSnapshot(
        doc(db, "receitas", id),
        (snap) => onData(snap.exists() ? { id: snap.id, ...snap.data() } : null),
        (error) => onError(error)
    );
}

function toLines(text) {
    return text
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
}

export function formToReceitaFields(form) {
    return {
        nome: form.nome.trim(),
        descricao: form.descricao.trim(),
        categoria: form.categoria.trim(),
        imagemUrl: form.imagemUrl.trim(),
        tempoPreparo: form.tempoPreparo.trim(),
        rendimento: form.rendimento.trim(),
        ingredientes: toLines(form.ingredientes),
        modoPreparo: toLines(form.modoPreparo),
    };
}

export async function addReceita(form) {
    const fields = formToReceitaFields(form);
    await addDoc(receitasRef, {
        ...fields,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
    });
}

export async function updateReceita(id, form) {
    const fields = formToReceitaFields(form);
    await updateDoc(doc(db, "receitas", id), {
        ...fields,
        updatedAt: serverTimestamp(),
    });
}

export async function deleteReceita(id) {
    await deleteDoc(doc(db, "receitas", id));
}

// Shared by every "Excluir" button so the confirm-and-report flow only
// lives in one place.
export async function confirmAndDeleteReceita(receita) {
    const confirmed = window.confirm(
        `Excluir a receita "${receita.nome}"? Essa ação não pode ser desfeita.`
    );
    if (!confirmed) return false;
    try {
        await deleteReceita(receita.id);
        return true;
    } catch {
        window.alert("Não foi possível excluir a receita. Tente novamente.");
        return false;
    }
}

// Admin-only, one-off tool: copies the recipes that used to be hardcoded in
// RecipeDetails.jsx into Firestore, using the same slugs as document IDs so
// existing /RecipeDetails/:slug links keep working. Safe to run more than
// once — existing docs are updated in place, keeping their original
// createdAt. Once you've confirmed the data looks right in Firestore, this
// function, the "Importar receitas antigas" button and receitasAntigas.js
// can all be deleted.
export async function migrarReceitasAntigas(onProgress) {
    let created = 0;
    let updated = 0;
    const errors = [];

    for (const receita of receitasAntigas) {
        const { slug, ...fields } = receita;
        const ref = doc(db, "receitas", slug);
        try {
            const existing = await getDoc(ref);
            if (existing.exists()) {
                await setDoc(ref, {
                    ...fields,
                    createdAt: existing.data().createdAt ?? serverTimestamp(),
                    updatedAt: serverTimestamp(),
                });
                updated += 1;
            } else {
                await setDoc(ref, {
                    ...fields,
                    createdAt: serverTimestamp(),
                    updatedAt: serverTimestamp(),
                });
                created += 1;
            }
            onProgress?.({ slug, status: "ok", created, updated, errors });
        } catch (error) {
            errors.push({ slug, message: error.message });
            onProgress?.({ slug, status: "error", created, updated, errors });
        }
    }

    return { created, updated, errors };
}
