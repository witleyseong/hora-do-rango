// One-off seed script: pushes the recipes that used to be hardcoded in
// RecipeDetails.jsx straight into Firestore, without going through the
// browser UI. Uses the same Firebase Auth + Firestore client SDK as the
// app itself (no service account key involved), so it is bound by the
// exact same firestore.rules as everyone else — it only works if you sign
// in as the admin account whose UID matches ADMIN_UID.
//
// Usage (PowerShell):
//   $env:ADMIN_EMAIL="you@example.com"; $env:ADMIN_PASSWORD="yourpassword"; node scripts/seedReceitas.mjs
//
// Usage (bash):
//   ADMIN_EMAIL="you@example.com" ADMIN_PASSWORD="yourpassword" node scripts/seedReceitas.mjs
//
// Safe to run more than once: existing docs are updated in place and keep
// their original createdAt. Delete this file once you've confirmed the
// data in the Firebase console (or keep it, it's harmless idempotent).

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC76CLSivJFsi763TgcvRjFfGKkem64HRM",
    authDomain: "hora-do-rango-b57e1.firebaseapp.com",
    projectId: "hora-do-rango-b57e1",
    storageBucket: "hora-do-rango-b57e1.firebasestorage.app",
    messagingSenderId: "486582873014",
    appId: "1:486582873014:web:62d895895a52ab2bfd6f17",
};

// Built assets are content-hashed by Vite; these are the hashes produced
// by the current image files (see dist/assets after `npm run build`).
// Point at the live GitHub Pages URL so the link works from anywhere,
// not just after a local build.
const IMG_BASE = "https://witleyseong.github.io/hora-do-rango/assets";

const receitas = [
    {
        slug: "torta-louca",
        nome: "Torta Louca Letícia",
        descricao: "",
        categoria: "",
        imagemUrl: `${IMG_BASE}/torta-JAT9Qx30.png`,
        tempoPreparo: "",
        rendimento: "",
        ingredientes: [
            "3 ovos",
            "1 xícara de chá de óleo",
            "2 xícaras de chá de farinha de trigo",
            "Sal a gosto",
            "1 colher de sopa de fermento químico",
            "Frango desfiado e temperado",
            "Legumes a gosto (milho, ervilha, cenoura, etc.)",
        ],
        modoPreparo: [
            "Bata os ovos, o óleo, a farinha, o sal e o fermento no liquidificador até obter uma massa homogênea.",
            "Despeje metade da massa em uma forma untada.",
            "Espalhe o recheio de frango e legumes sobre essa base.",
            "Cubra com o restante da massa.",
            "Leve ao forno preaquecido a 190 °C por cerca de 40 minutos ou até dourar.",
        ],
    },
    {
        slug: "sushi",
        nome: "Sushi Tradicional",
        descricao: "",
        categoria: "",
        imagemUrl: `${IMG_BASE}/sushi-sTwoasr7.png`,
        tempoPreparo: "",
        rendimento: "",
        ingredientes: [
            "300 g de gohan (arroz japonês)",
            "80 ml de vinagre de arroz",
            "45 g de açúcar",
            "12 g de sal",
            "Recheio a gosto (salmão, pepino, cenoura, cream cheese, etc.)",
        ],
        modoPreparo: [
            "Cozinhe o gohan conforme as instruções da embalagem e coloque em uma tigela grande.",
            "Em uma panela, misture o vinagre de arroz, o açúcar e o sal.",
            "Aqueça mexendo até que o açúcar e o sal se dissolvam completamente — não deixe ferver.",
            "Despeje a mistura de vinagre sobre o arroz e mexa delicadamente até ficar bem misturado.",
            "Deixe o arroz esfriar completamente.",
            "Coloque uma folha de alga nori sobre a esteira de sushi, espalhe o gohan e adicione o recheio a gosto.",
            "Enrole com cuidado, corte em pedaços e sirva.",
        ],
    },
    {
        slug: "beef-pho",
        nome: "Beef Pho (Pho Bo)",
        descricao: "",
        categoria: "",
        imagemUrl: `${IMG_BASE}/beef_pho-CchtZ9Pa.png`,
        tempoPreparo: "",
        rendimento: "",
        ingredientes: [
            "2 cebolas cortadas ao meio",
            "3 oz (aprox. 85 g) de gengibre em pedaços grandes",
            "1 colher de sopa de óleo vegetal",
            "1 pau de canela",
            "2 estrelas de anis",
            "4 cravos-da-índia",
            "1 colher de sopa de açúcar mascavo ou açúcar comum",
            "3 lb (aprox. 1,3 kg) de músculo bovino com osso (shin), previamente fervido para retirar impurezas",
            "1/2 colher de chá de coentro em pó",
            "1 colher de chá de sal",
            "1/4 de xícara de molho de peixe (fish sauce)",
            "1 colher de sopa de caldo de carne (beef bouillon)",
            "8 xícaras de água",
            "Macarrão de arroz (noodles) cozido conforme instruções",
            "Carne bovina fatiada finamente (como contra-filé ou alcatra)",
            "Broto de feijão, cebolinha, coentro, manjericão tailandês, limão, pimenta jalapeño (para servir)",
        ],
        modoPreparo: [
            "Corte as cebolas e o gengibre ao meio e doure-os até ficarem bem tostados (pode usar uma frigideira, forno ou função sauté da panela de pressão).",
            "Na panela de pressão, adicione o óleo, o gengibre e as cebolas tostadas.",
            "Acrescente o pau de canela, as estrelas de anis, os cravos e o açúcar.",
            "Coloque o músculo bovino com osso (já fervido previamente por 10 minutos para retirar impurezas) e cubra com cerca de 8 xícaras de água.",
            "Adicione o coentro em pó, sal, molho de peixe e o caldo de carne (beef bouillon).",
            "Tampe e cozinhe sob pressão por 30 minutos.",
            "Após o cozimento, libere a pressão naturalmente e coe o caldo.",
            "Prepare os acompanhamentos: broto de feijão, limão, pimenta jalapeño, manjericão, cebolinha e coentro picado.",
            "Cozinhe o macarrão de arroz (ou use o fresco, que leva apenas alguns segundos).",
            "Monte o prato: coloque o macarrão em uma tigela, adicione fatias finas de carne crua e despeje o caldo bem quente por cima — o calor do caldo vai cozinhar a carne.",
            "Finalize com brotos, ervas frescas e limão a gosto. Sirva com molho hoisin e sriracha à parte, se desejar.",
        ],
    },
    {
        slug: "caldo-de-mocoto",
        nome: "Caldo de Mocotó Tradicional do Mocotó",
        descricao: "",
        categoria: "",
        imagemUrl: `${IMG_BASE}/mocoto-BRl9unL0.png`,
        tempoPreparo: "",
        rendimento: "",
        ingredientes: [
            "1 mocotó (pé de boi ou mão de vaca), bem limpo e cortado em pedaços",
            "Água suficiente para o cozimento",
            "1 cebola grande picada",
            "2 tomates picados",
            "1 pimentão picado",
            "4 dentes de alho amassados",
            "1 pimenta (a gosto, apenas para realçar o sabor)",
            "2 colheres de sopa de vinagre",
            "1 colher de chá de cominho",
            "1 colher de chá de colorau (urucum)",
            "Sal a gosto",
            "300 g de mandioca (macaxeira) cozida e amassada",
            "1/2 maço de coentro fresco picado grosseiramente",
            "1/2 maço de cebolinha (parte branca e verde) picada",
        ],
        modoPreparo: [
            "link to watch: https://www.youtube.com/watch?v=8Bsntsasysk",
            "Lave bem o mocotó e cozinhe em bastante água até que a carne fique bem macia. Retire os ossos e reserve o caldo do cozimento.",
            "No liquidificador, bata cebola, tomate, pimentão, alho, pimenta, vinagre, cominho e colorau. Adicione um pouco do caldo do mocotó para ajudar a bater.",
            "Em uma panela grande, aqueça o tempero batido e refogue até soltar o aroma.",
            "Adicione o mocotó cozido e o caldo reservado. Deixe cozinhar em fogo baixo para apurar o sabor.",
            "Acrescente a mandioca cozida e amassada, mexendo bem até o caldo engrossar naturalmente.",
            "Ajuste o sal a gosto e cozinhe por alguns minutos até atingir a textura desejada.",
            "Desligue o fogo e adicione o coentro e a cebolinha no final, mexendo suavemente para preservar o frescor.",
            "Sirva o caldo quente, acompanhado de farinha, pimenta e um toque de limão, se desejar.",
        ],
    },
];

async function main() {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    if (!email || !password) {
        console.error(
            "Defina ADMIN_EMAIL e ADMIN_PASSWORD como variáveis de ambiente antes de rodar este script."
        );
        process.exit(1);
    }

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    await signInWithEmailAndPassword(auth, email, password);
    console.log(`Autenticado como ${email}.`);

    let created = 0;
    let updated = 0;

    for (const { slug, ...fields } of receitas) {
        const ref = doc(db, "receitas", slug);
        const existing = await getDoc(ref);

        if (existing.exists()) {
            await setDoc(ref, {
                ...fields,
                createdAt: existing.data().createdAt ?? serverTimestamp(),
                updatedAt: serverTimestamp(),
            });
            updated += 1;
            console.log(`Atualizada: ${slug}`);
        } else {
            await setDoc(ref, {
                ...fields,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });
            created += 1;
            console.log(`Criada: ${slug}`);
        }
    }

    console.log(`\nConcluído. ${created} criada(s), ${updated} atualizada(s).`);
    await signOut(auth);
    process.exit(0);
}

main().catch((err) => {
    console.error("Falha ao popular receitas:", err.message);
    process.exit(1);
});
