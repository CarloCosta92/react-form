import { useState } from 'react'
import './App.css'
import ListArticle from './components/ListArticle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListArticle />

    </>
  )
}

export default App
