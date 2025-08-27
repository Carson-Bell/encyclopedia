
export default function AddCSPage({ onAdd }) {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [related, setRelated] = useState("");
  const [other, setOther] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      title: title.trim(),
      info: info.trim(),
      related: related.split(",").map(t => t.trim()).filter(Boolean),
      other: other.trim()
    });
    setTitle("");
    setInfo("");
    setRelated("");
    setOther("");
  }

  return (
    <form onSubmit={handleSubmit} className="addcs-form" aria-label="Add new CS Help topic">
      <h2>Add New CS Help Page</h2>
      <label className="addcs-label">
        Title:
        <input value={title} onChange={e => setTitle(e.target.value)} required className="addcs-input" aria-required="true" />
      </label>
      <label className="addcs-label">
        Basic Information:
        <textarea value={info} onChange={e => setInfo(e.target.value)} rows={4} className="addcs-textarea" />
      </label>
      <label className="addcs-label">
        Related Topics (comma separated):
        <input value={related} onChange={e => setRelated(e.target.value)} className="addcs-input" />
      </label>
      <label className="addcs-label">
        Other Notes:
        <textarea value={other} onChange={e => setOther(e.target.value)} rows={2} className="addcs-textarea" />
      </label>
      <button type="submit" className="addcs-btn">Add Page</button>
    </form>
  );
}
import React, { useState } from "react";
