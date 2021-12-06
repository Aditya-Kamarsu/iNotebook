import React from "react";

import { useContext,useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, getNotes} = context;
    useEffect(() => {
      getNotes();
      // eslint-disable-next-line
    }, []);
  return (
    <div>
      <>
      <Addnote/>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <Noteitem note = {note} key = {note._id}/>;
        })}
      </div>
      </>
    </div>
  );
};

export default Notes;
