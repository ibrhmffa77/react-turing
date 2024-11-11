import React from 'react';
import './delete.scss';

export default function Delete({ index, removeList }) {
  return (
    <button className="deleteBtn" onClick={() => removeList(index)}>
      Delete
    </button>
  );
}
