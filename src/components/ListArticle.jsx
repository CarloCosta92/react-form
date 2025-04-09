import { useState } from "react";

function ListArticle() {

    const Article = [
        "Ricette Vegane Facili e Veloci",
        "Guida Completa al Giardinaggio Urbano",
        "I 10 Libri Fantasy Imperdibili del 2023",
        "Consigli di Viaggio per un Weekend a Roma",
        "Come Avviare un'Attività Online di Successo",
        "Le Migliori Tecniche di Meditazione per Principianti",
        "Storia e Curiosità dei Cocktail Classici",
        "Fotografia di Paesaggio: Consigli e Trucchi",
        "Il Mondo dei Videogiochi Indie: Recensioni e Novità",
        "Fitness a Casa: Esercizi Efficaci Senza Attrezzi"
    ];

    //funzione per aggiungere un nuovo titolo

    const [articles, newArticles] = useState(Article)
    const [newTitle, setNewTitle] = useState("");

    const addNewTitle = event => {
        event.preventDefault();
        newArticles([...articles, newTitle]);
        setNewTitle("");
    }

    // console.log(newTitle)

    console.log(articles)

    // funzione per cancellare un titolo

    const removeTitle = indexArticleToDelete => {
        const updatedTitle = articles.filter((element, index) => index !== indexArticleToDelete); //nuovo array modificato
        newArticles(updatedTitle);
    }

    return (
        <div>
            <form onSubmit={addNewTitle}>
                <input
                    type="text"
                    value={newTitle}
                    onChange={event => setNewTitle(event.target.value)}
                />
                <button type="submit">Aggiungi Articolo</button>

            </form>
            <ul>
                {articles.map((element, index) => (
                    <li key={index}>
                        {element}
                        <button onClick={() => removeTitle(index)}>Cancella questo titolo</button>
                    </li>
                ))}
            </ul>
        </div>
    )



}

export default ListArticle;