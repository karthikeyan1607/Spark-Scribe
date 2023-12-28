import React, { useState } from "react"
import { IoIosAdd } from "react-icons/io"
function CreateArea({ submitButton, onAdd }) {
  const [isExpanded, setExpanded] = useState(false)
  const [note, setNote] = useState({
    title: "",
    content: "",
  })

  function handlechange(e) {
    const { name, value } = e.target
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })
  }
  function handleExpanded() {
    setExpanded(true)
  }
  function submitButton(event) {
    onAdd(note)
    setNote({
      title: "",
      content: "",
    })
    event.preventDefault()
  }
  return (
    <div>
      <form>
        {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handlechange}
            rows={isExpanded ? 3 : 1}
          ></input>
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Take a note"
            onChange={handlechange}
          ></textarea>
        </p>
        <button onClick={submitButton}>
          <IoIosAdd size={35} />
        </button>
      </form>
    </div>
  )
}

export default CreateArea
