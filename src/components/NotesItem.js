import React from "react";

const NotesItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title"> {note.title}</h5>
          <p class="card-text">
            {note.description} Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Doloremque amet recusandae, ratione accusamus
            facere, enim et, ipsum consequatur temporibus harum aliquid quae
            molestias unde nemo quaerat. Nobis atque quae temporibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
