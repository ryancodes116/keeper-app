import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    name === "title" ? setTitle(value) : setContent(value);

    setNote(prevNote => {
      return { ...prevNote, [name]: value };
    });
  }

  function handleClick(e) {
    props.add(note);
    setNote({
      title: "",
      content: ""
    });
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
