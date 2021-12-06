import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title} </h5>
          <p className="card-text">
          {note.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem iure quod repellendus, optio odit, quae explicabo earum veniam facere dolorem officiis enim minus rem sequi sapiente cupiditate? Iusto molestias ea at in dolores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
