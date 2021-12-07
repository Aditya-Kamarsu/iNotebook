import React from "react";

import { useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useContext, useEffect, useRef } from "react";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";

const Notes = () => {
  
  const context = useContext(noteContext);
  const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: "Default"})
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
  };
  const handleClick = (e) =>{
    refClose.current.click();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    console.log("updating")
}
const onChange = (e) =>{
    
    setNote({...note, [e.target.name]:e.target.value})
}
  const ref = useRef(null);
  const refClose = useRef(null);
  return (
    <div>
      <>
        <Addnote />
        <button
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          ref={ref}
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      aria-describedby="emailHelp"
                      onChange={onChange} value={note.etitle} minLength={3} required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      onChange={onChange} value={note.edescription} minLength={5} required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      onChange={onChange} value={note.etag} required
                    />
                  </div>
                  
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal" ref={refClose}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleClick}>
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container row my-3">
          <h2>Your Notes</h2>
          <div className="container">
          {notes.length===0 && 'No notes to display'}
          </div>
          {notes.map((note) => {
            return (
              <Noteitem updateNote={updateNote} note={note} key={note._id} />
            );
          })}
        </div>
      </>
    </div>
  );
};

export default Notes;
