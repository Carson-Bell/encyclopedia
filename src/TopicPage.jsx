import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function TopicPage({ references }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const topic = references.find(ref => String(ref.id) === String(id));

  if (!topic) {
    return (
      <section className="topicpage-container">
        <button className="topicpage-back" onClick={() => navigate(-1)}>&larr; Back</button>
        <h2>Topic Not Found</h2>
        <p>No topic found for ID: <strong>{id}</strong></p>
      </section>
    );
  }

  return (
    <article className="topicpage-container">
      <button className="topicpage-back" onClick={() => navigate(-1)}>&larr; Back</button>
      <header>
        <h2>{topic.title}</h2>
      </header>
      <section style={{ margin: "12px 0" }}>
        <strong>Information:</strong> {topic.info}
      </section>
      {topic.related && topic.related.length > 0 && (
        <section style={{ margin: "8px 0" }}>
          <strong>Related:</strong> {topic.related.join(", ")}
        </section>
      )}
      {topic.other && (
        <section style={{ margin: "8px 0" }}>
          <strong>Notes:</strong> {topic.other}
        </section>
      )}
    </article>
  );
}
