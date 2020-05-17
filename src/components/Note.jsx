import React from 'react';

const Note = ({ id, title, content, onDelete }) => {
  const handleClick = (e) => {
    onDelete(id);
    e.preventDefault();
  };

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
};

export default Note;
