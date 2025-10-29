import React from "react";
import { useParams } from "react-router-dom";
import torta from "../assets/torta.png";
import sushi from "../assets/sushi.png";
import pho from "../assets/beef_pho.png";
import mocoto from "../assets/mocoto.png";
import styles from "./RecipeDetails.module.css"

function RecipeDetails() {
    const { recipeId } = useParams();

    const recipes = {
        "torta-louca": {
            title: "Torta Louca Letícia",
            image: torta,
            ingredients: [
                "3 ovos",
                "1 xícara de chá de óleo",
                "2 xícaras de chá de farinha de trigo",
                "Sal a gosto",
                "1 colher de sopa de fermento químico",
                "Frango desfiado e temperado",
                "Legumes a gosto (milho, ervilha, cenoura, etc.)"
            ],
            steps: [
                "Bata os ovos, o óleo, a farinha, o sal e o fermento no liquidificador até obter uma massa homogênea.",
                "Despeje metade da massa em uma forma untada.",
                "Espalhe o recheio de frango e legumes sobre essa base.",
                "Cubra com o restante da massa.",
                "Leve ao forno preaquecido a 190 °C por cerca de 40 minutos ou até dourar."
            ]
        },
        "sushi": {
            title: "Sushi Tradicional",
            image: sushi,
            ingredients: [
                "300 g de gohan (arroz japonês)",
                "80 ml de vinagre de arroz",
                "45 g de açúcar",
                "12 g de sal",
                "Recheio a gosto (salmão, pepino, cenoura, cream cheese, etc.)"
            ],
            steps: [
                "Cozinhe o gohan conforme as instruções da embalagem e coloque em uma tigela grande.",
                "Em uma panela, misture o vinagre de arroz, o açúcar e o sal.",
                "Aqueça mexendo até que o açúcar e o sal se dissolvam completamente — não deixe ferver.",
                "Despeje a mistura de vinagre sobre o arroz e mexa delicadamente até ficar bem misturado.",
                "Deixe o arroz esfriar completamente.",
                "Coloque uma folha de alga nori sobre a esteira de sushi, espalhe o gohan e adicione o recheio a gosto.",
                "Enrole com cuidado, corte em pedaços e sirva."
            ]
        },

        "beef-pho": {
            title: "Beef Pho (Pho Bo)",
            image: pho,
            ingredients: [
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
                "Broto de feijão, cebolinha, coentro, manjericão tailandês, limão, pimenta jalapeño (para servir)"
            ],
            steps: [
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
                "Finalize com brotos, ervas frescas e limão a gosto. Sirva com molho hoisin e sriracha à parte, se desejar."
            ]
        },
        "caldo-de-mocoto": {
            title: "Caldo de Mocotó Tradicional do Mocotó",
            image: mocoto,
            ingredients: [
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
                "1/2 maço de cebolinha (parte branca e verde) picada"
            ],
            steps: [
                "link to watch: https://www.youtube.com/watch?v=8Bsntsasysk",
                "Lave bem o mocotó e cozinhe em bastante água até que a carne fique bem macia. Retire os ossos e reserve o caldo do cozimento.",
                "No liquidificador, bata cebola, tomate, pimentão, alho, pimenta, vinagre, cominho e colorau. Adicione um pouco do caldo do mocotó para ajudar a bater.",
                "Em uma panela grande, aqueça o tempero batido e refogue até soltar o aroma.",
                "Adicione o mocotó cozido e o caldo reservado. Deixe cozinhar em fogo baixo para apurar o sabor.",
                "Acrescente a mandioca cozida e amassada, mexendo bem até o caldo engrossar naturalmente.",
                "Ajuste o sal a gosto e cozinhe por alguns minutos até atingir a textura desejada.",
                "Desligue o fogo e adicione o coentro e a cebolinha no final, mexendo suavemente para preservar o frescor.",
                "Sirva o caldo quente, acompanhado de farinha, pimenta e um toque de limão, se desejar."
            ]
        },



    };

    const recipe = recipes[recipeId];

    if (!recipe) return <p>Recipe not founded!</p>


    return (
        <div className={styles.containner}>
            <div className={styles.incont}>
                <h1>{recipe.title}</h1>
                <h3>Ingredient</h3>
                <ul>{recipe.ingredients.map((i) => <li key={i}>{i}</li>)}</ul>

                <h3>How to do it</h3>
                <ol>{recipe.steps.map((s) => <li key={s}>{s}</li>)}</ol>
            </div>
        </div>
    )
}

export default RecipeDetails;