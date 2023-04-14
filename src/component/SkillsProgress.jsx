import React from 'react';
import '../Styles/SkillsProgress.css';

export default function SkilsProgress() {
  return (
    <div className="containerSkills">
      <div className="skills">
        <img src="https://skillicons.dev/icons?i=js" alt="logoJS" />
        <p>JavaScript</p>
      </div>
      <div className="skills">
        <img src="https://skillicons.dev/icons?i=nodejs" alt="logoNode" />
        <p>Node.JS</p>
      </div>
      <div className="skills">
        <img src="https://skillicons.dev/icons?i=ts" alt="logoTS" />
        <p>TypeScript</p>
      </div>
      <div className="skills">
        <img src="https://skillicons.dev/icons?i=mysql" alt="logoMysql" />
        <p>MySql</p>
      </div>
      <div className="skills">
        <img src="https://skillicons.dev/icons?i=mongodb" alt="logoMongo" />
        <p>MongoDB</p>
      </div>
      <div className="skills">
        <img src="https://skillicons.dev/icons?i=py" alt="logoMongo" />
        <p>Python</p>
      </div>
      <div className="skills">
        <img src="https://skillicons.dev/icons?i=docker" alt="logoMongo" />
        <p>Docker</p>
      </div>
      <div className="skills">
        <img src="https://skillicons.dev/icons?i=react" alt="logoMongo" />
        <p>React</p>
      </div>
    </div>
  );
}
