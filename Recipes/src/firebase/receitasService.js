import {
    collection,
    doc,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc,
    serverTimestamp,
    orderBy,
    query,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

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
