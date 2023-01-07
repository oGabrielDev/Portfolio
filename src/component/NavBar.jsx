import React from 'react';
import { Link } from 'react-router-dom';

export default function navbar() {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contato">Contato</Link>
      </li>
    </ul>
  );
}
