import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesinitial = [
    
  ];

  const [notes, setnotes] = useState(notesinitial);

  //get all notes

  const getNotes = async () => {
    //Api call
    const url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhNzQ0ODJmOGYzZmU3MTA5OTM2N2IzIn0sImlhdCI6MTYzODQyMTAxNn0.0DIdCjYrXR4gnsYT10VrTPp3OF3n1Ldfuw-7eP0pD-U",
      }
    });
    const json = await response.json();
    console.log(json);
    setnotes(json);
  };

  //Add note

  const addNote = async (title, description, tag) => {
    //Api call
    const url = `${host}/api/notes/addnote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhNzQ0ODJmOGYzZmU3MTA5OTM2N2IzIn0sImlhdCI6MTYzODQyMTAxNn0.0DIdCjYrXR4gnsYT10VrTPp3OF3n1Ldfuw-7eP0pD-U",
      },
      body: JSON.stringify({title, description, tag}),
    });
    


    const note = {
      _id: "61a86f708873e1358618cc45",
      user: "61a74482f8f3fe71099367b3",
      title: title,
      description: description,
      tag: tag,
      date: "2021-12-02T07:02:08.449Z",
      __v: 0,
    };
    const json = response.json();
    console.log(json);
    setnotes(notes.concat(note));
  };

  //Delete note

  const deleteNote = async (id) => {
    //api call
    const url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhNzQ0ODJmOGYzZmU3MTA5OTM2N2IzIn0sImlhdCI6MTYzODQyMTAxNn0.0DIdCjYrXR4gnsYT10VrTPp3OF3n1Ldfuw-7eP0pD-U",
      }
    });
    const json = response.json();
    console.log(json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNotes);
  };

  //Edit note

  const editNote = async (id, title, description, tag) => {
    //api call
    const url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhNzQ0ODJmOGYzZmU3MTA5OTM2N2IzIn0sImlhdCI6MTYzODQyMTAxNn0.0DIdCjYrXR4gnsYT10VrTPp3OF3n1Ldfuw-7eP0pD-U",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json();
    console.log(json);
    //logic
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
      
    }
    setnotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, setnotes, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
