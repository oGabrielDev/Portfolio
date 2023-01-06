import React from 'react';

export default function navbar() {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contato">Contato</a>
      </li>
    </ul>
  );
}
