import { useState } from "react";
import Article from "../data/article";
import FormArticle from "./FormArticle"

function ListArticle() {

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
            <FormArticle newTitle={newTitle} setNewTitle={setNewTitle} addNewTitle={addNewTitle} />
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