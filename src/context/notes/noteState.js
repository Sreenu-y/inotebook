import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "68ab5f9bbd41376e3ca225cc",
      user: "68a9806c109b0946ce08f7fa",
      title: "mytitle",
      description: "my description",
      tag: "personal",
      Date: "2025-08-24T18:53:15.990Z",
      __v: 0,
    },
    {
      _id: "68adfeea64f507d60bebbd30",
      user: "68a9806c109b0946ce08f7fa",
      title: "mytitle",
      description: "my description",
      tag: "personal",
      Date: "2025-08-26T18:37:30.967Z",
      __v: 0,
    },
    {
      _id: "68adfeed64f507d60bebbd32",
      user: "68a9806c109b0946ce08f7fa",
      title: "mytitle",
      description: "my description",
      tag: "personal",
      Date: "2025-08-26T18:37:33.671Z",
      __v: 0,
    },
    {
      _id: "68adfeed64f507d60bebbd34",
      user: "68a9806c109b0946ce08f7fa",
      title: "mytitle",
      description: "my description",
      tag: "personal",
      Date: "2025-08-26T18:37:33.850Z",
      __v: 0,
    },
    {
      _id: "68adfeee64f507d60bebbd36",
      user: "68a9806c109b0946ce08f7fa",
      title: "mytitle",
      description: "my description",
      tag: "personal",
      Date: "2025-08-26T18:37:34.031Z",
      __v: 0,
    },
    {
      _id: "68adfeee64f507d60bebbd38",
      user: "68a9806c109b0946ce08f7fa",
      title: "mytitle",
      description: "my description",
      tag: "personal",
      Date: "2025-08-26T18:37:34.249Z",
      __v: 0,
    },
  ];
  const [note, setNote] = useState(initialNotes);
  return (
    <noteContext.Provider value={{ note }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
