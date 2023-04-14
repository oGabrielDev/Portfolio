import React from 'react';
import project from '../Projects/Projects';
import '../Styles/Main.css';

export default function Main() {
  return (
    <div className="cardContainer">
      { project.map((elem) => (
        <div key={elem.id} className="mapContainer">
          <p className="cardName">{elem.name}</p>
          <p className="describe">{elem.describe}</p>
          <a href={elem.github} className="btn">GitHub</a>
          <a href={elem.link} className="btn">Site</a>
        </div>
      ))}
    </div>
  );
}
