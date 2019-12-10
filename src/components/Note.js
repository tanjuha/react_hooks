import React from "react";

export const Note = ({ notes }) => {
  return (
    <ul className="list-group">
      {notes.map(note => (
        <li key={note.id} className="list-group-item note">
          <div>
            <strong>{note.title}</strong>
            <small className="pl-2">{new Date().toLocaleTimeString()}</small>
          </div>
          <button type="button" className="btn btn-outline-danger btn-sm">&times;</button>
        </li>
      ))}
    </ul>
  );
};
