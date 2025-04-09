function FormArticle({ newTitle, setNewTitle, addNewTitle }) {
    return (
        <form onSubmit={addNewTitle}>
            <input
                type="text"
                value={newTitle}
                onChange={event => setNewTitle(event.target.value)}
                placeholder="Aggiungi un nuovo titolo"
            />
            <button type="submit">Aggiungi Articolo</button>

        </form>
    )
}

export default FormArticle;