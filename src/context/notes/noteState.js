import NoteContext from "./noteContext";
import React, { useState } from 'react'

const NoteState = (props) => {
  const notesinitial = [
    {
      "_id": "61a86f708873e1358618cc45",
      "user": "61a74482f8f3fe71099367b3",
      "title": "Remainder",
      "description": "Wake up at 6",
      "tag": "personal",
      "date": "2021-12-02T07:02:08.449Z",
      "__v": 0
    },
    {
      "_id": "61a870863c0790390bfaa0c6",
      "user": "61a74482f8f3fe71099367b3",
      "title": "Lunch - Remainder",
      "description": "Thinu ra pannendu ayindhi",
      "tag": "personal",
      "date": "2021-12-02T07:06:46.912Z",
      "__v": 0
    },
    {
      "_id": "61a870893c0790390bfaa0c8",
      "user": "61a74482f8f3fe71099367b3",
      "title": "Lunch - Remainder",
      "description": "Thinu ra pannendu ayindhi",
      "tag": "personal",
      "date": "2021-12-02T07:06:49.051Z",
      "__v": 0
    },
    {
      "_id": "61a8708a3c0790390bfaa0ca",
      "user": "61a74482f8f3fe71099367b3",
      "title": "Lunch - Remainder",
      "description": "Thinu ra pannendu ayindhi",
      "tag": "personal",
      "date": "2021-12-02T07:06:50.465Z",
      "__v": 0
    },
    {
      "_id": "61a8708c3c0790390bfaa0cc",
      "user": "61a74482f8f3fe71099367b3",
      "title": "Lunch - Remainder",
      "description": "Thinu ra pannendu ayindhi",
      "tag": "personal",
      "date": "2021-12-02T07:06:52.136Z",
      "__v": 0
    }
  ]

  const [notes, setnotes] = useState(notesinitial);
  return (
    <NoteContext.Provider value={{notes,setnotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
