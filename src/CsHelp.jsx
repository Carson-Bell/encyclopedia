import React, { useState } from "react";
import AddCSPage from "./AddCSPage";

export default function CSHelp({ references, setReferences }) {
  const [search, setSearch] = useState("");

  function handleAdd(newPage) {
    setReferences([
      ...references,
      { ...newPage, id: Date.now() }
    ]);
  }

  function handleDelete(id) {
    setReferences(refs => refs.filter(ref => ref.id !== id));
  }

  const filtered = references.filter(ref =>
    ref.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="cshelp-container">
      <h1>CS Help</h1>
      <input
        type="text"
        placeholder="Search topics..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="cshelp-search"
        aria-label="Search topics"
      />
      <ul className="cshelp-list">
        {filtered.length === 0 ? (
          <li className="cshelp-empty">No topics found.</li>
        ) : (
          filtered.map(ref => (
            <li key={ref.id} className="cshelp-item">
              <div className="cshelp-title">{ref.title}</div>
              <button className="cshelp-delete" onClick={() => handleDelete(ref.id)} title="Delete">✕</button>
              <div className="cshelp-info">{ref.info}</div>
              {ref.related && ref.related.length > 0 && (
                <div className="cshelp-related">
                  <strong>Related:</strong> {ref.related.join(", ")}
                </div>
              )}
              {ref.other && (
                <div className="cshelp-notes">
                  <strong>Notes:</strong> {ref.other}
                </div>
              )}
            </li>
          ))
        )}
      </ul>
      <hr className="cshelp-divider" />
      <AddCSPage onAdd={handleAdd} />
    </section>
  );
}
