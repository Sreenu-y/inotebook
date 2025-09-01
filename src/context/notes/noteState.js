import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const path = "http://localhost:5000";
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);

  //fetch all notes
  const getNotes = async () => {
    let response = await fetch(`${path}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhhOTgwNmMxMDliMDk0NmNlMDhmN2ZhIn0sImlhdCI6MTc1NTk4MTMwOH0.nF06cYt_WdZuwo5gpW0B2hVedaQZZQY83RpDhNW535M",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  //add Note
  const addNote = async (title, description, tag) => {
    let response = await fetch(`${path}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhhOTgwNmMxMDliMDk0NmNlMDhmN2ZhIn0sImlhdCI6MTc1NTk4MTMwOH0.nF06cYt_WdZuwo5gpW0B2hVedaQZZQY83RpDhNW535M",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    setNotes(notes.concat(json));
  };

  //Delete Note
  const deleteNote = async (id) => {
    let response = await fetch(`${path}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhhOTgwNmMxMDliMDk0NmNlMDhmN2ZhIn0sImlhdCI6MTc1NTk4MTMwOH0.nF06cYt_WdZuwo5gpW0B2hVedaQZZQY83RpDhNW535M",
      },
    });
    const json = await response.json();
    setNotes(notes.filter((note) => note._id !== id));
  };

  //Edit Note
  const editNote = async (id, title, description, tag) => {
    let response = await fetch(`${path}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhhOTgwNmMxMDliMDk0NmNlMDhmN2ZhIn0sImlhdCI6MTc1NTk4MTMwOH0.nF06cYt_WdZuwo5gpW0B2hVedaQZZQY83RpDhNW535M",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    let newNote = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNote.length; index++) {
      if (newNote[index]._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setNotes(newNote);
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
