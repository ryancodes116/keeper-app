import React, { useState } from 'react';

const CreateArea = ({ add }) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'title') {
      setNote((prevNote) => {
        return {
          ...prevNote,
          title: value,
        };
      });
    }

    if (name === 'content') {
      setNote((prevNote) => {
        return {
          ...prevNote,
          content: value,
        };
      });
    }
  };

  const handleClick = (e) => {
    add(note);
    setNote({
      title: '',
      content: '',
    });
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
