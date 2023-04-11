import React from 'react';
import project from '../Projects/Projects';
import '../Styles/Main.css';

export default function Main() {
  return (
    <div className="cardContainer">
      { project.map((elem) => (
        <div key={elem.id} className="mapContainer">
          <p className="cardImage">{elem.url_image}</p>
          <p className="cardName">{elem.name}</p>
          <p className="describe">{elem.describe}</p>
          <button type="button" className="btn">GitHub</button>
          <button type="button" className="btn">Site</button>
        </div>
      ))}
    </div>
  );
}
