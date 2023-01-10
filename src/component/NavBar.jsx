import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

export default function navbar() {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link nav" to="/">Home</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link nav" to="/contato">Contato</Link>
      </li>
    </ul>
  );
}
