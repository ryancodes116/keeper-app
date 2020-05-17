import React, { useState } from 'react';

import { Header, Footer, Note, CreateArea } from '../components';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note, index) => {
      return index !== id;
    });

    setNotes(newNotes);
  };

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
