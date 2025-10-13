import React from "react";

function StandInfoModal({ stand, onClose }) {
  if (!stand) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{stand.name}</h2>
        <p><strong>Stand:</strong> {stand.stand}</p>
        <p>{stand.description}</p>
        {stand.website && (
          <p>
            <a href={stand.website} target="_blank" rel="noopener noreferrer">
              Visit website
            </a>
          </p>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default StandInfoModal;
