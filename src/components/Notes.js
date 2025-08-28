import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NotesItem from "./NotesItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { note, setNote } = context;
  console.log(note);
  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {note.map((note) => {
        return <NotesItem note={note} />;
      })}
    </div>
  );
};

export default Notes;
