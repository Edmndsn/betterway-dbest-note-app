import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div className="note-element-container" key={note.id}>
      <Link to={note.title} style={{ textDecoration: "none" }}>
        <div
          className={`title ${
            note.id === props.currentNote.id ? "selected-note" : ""
          }`}
          onClick={() => props.setCurrentNoteId(note.id)}
        >
          <h1 className="note-title">{note.title}</h1>
          <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
          <h5 className="note-date">{note.date}</h5>
          <button
            className="delete-btn"
            onClick={event => props.deleteNote(event, note.id)}
          >
            <i className="gg-trash trash-icon"></i>
          </button>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <section
        className={`pane-sidebar ${props.displaySidebar ? "" : "hidden"}`}
      >
        <div className="sidebar--header">
          <button className="create-note-btn" onClick={props.newNote}>
            Create Note
          </button>
        </div>
        <h5>Notes</h5>
        <div className="notes-container">{noteElements}</div>
      </section>
    </>
  );
}
