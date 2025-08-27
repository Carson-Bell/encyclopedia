import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddCSPage from "./AddCSPage";

export default function CSHelp() {
  const [search, setSearch] = useState("");
  const [references, setReferences] = useState([]);
  const navigate = useNavigate();

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("cshelp-topics");
    if (saved) {
      setReferences(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever references change
  useEffect(() => {
    localStorage.setItem("cshelp-topics", JSON.stringify(references));
  }, [references]);

  function handleAdd(newPage) {
    setReferences([
      ...references,
      { ...newPage, id: Date.now() }
    ]);
  }

  function handleDelete(id) {
    setReferences(refs => refs.filter(ref => ref.id !== id));
  }

  function handleClick(id) {
    navigate(`/topic/${id}`);
  }

  const filtered = references.filter(ref =>
    ref.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="cshelp-container">
      <h2>CS Help</h2>
      <input
        type="text"
        placeholder="Search topics..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="cshelp-search"
      />
      <ul className="cshelp-list">
        {filtered.length === 0 ? (
          <li className="cshelp-empty">No topics found.</li>
        ) : (
          filtered.map(ref => (
            <li key={ref.id} className="cshelp-item">
              <div className="cshelp-title" onClick={() => handleClick(ref.id)}>{ref.title}</div>
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
    </div>
  );
}
