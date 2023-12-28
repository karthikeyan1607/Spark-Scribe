import React, { useState } from "react"
import "./style.css"
import Header from "./components/Header"
import CreateArea from "./components/CreateArea"
import Note from "./components/Note"
import Count from "./components/Count"
import Footer from "./components/Footer"

function App(props) {
  const [notes, setNotes] = useState([])

  function addnote(newNote) {
    setNotes((prevValue) => {
      return [...prevValue, newNote]
    })
  }

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)]
    })
  }

  return (
    <div className="App">
      <Header></Header>
      <Count
        count={
          notes.length === 0
            ? "Empty"
            : `Showing ${notes.length} Notes in Database`
        }
      ></Count>
      <CreateArea onAdd={addnote}></CreateArea>

      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        ></Note>
      ))}
      <Footer></Footer>
    </div>
  )
}

export default App
