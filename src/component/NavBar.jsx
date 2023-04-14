import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

export default function navbar() {
  return (
    <ul className="nav">
      <li>
        <Link className="navlink" to="/">Home</Link>
      </li>
      <li>
        <Link className="navlink" to="/contato">Contato</Link>
      </li>
    </ul>
  );
}
