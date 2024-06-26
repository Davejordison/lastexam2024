import React from 'react';
import './App.css';

const characters = [
  { name: "Naruto Uzumaki", status: "Alive" },
  { name: "Sasuke Uchiha", status: "Alive" },
  { name: "Sakura Haruno", status: "Alive" },
  { name: "Kakashi Hatake", status: "Alive" },
  { name: "Obito Uchiha", status: "Deceased" },
  { name: "Madara Uchiha", status: "Deceased" },
  { name: "Hashirama Senju", status: "Deceased" },
  { name: "Tobirama Senju", status: "Deceased" },
  { name: "Hiruzen Sarutobi", status: "Deceased" },
  { name: "Minato Namikaze", status: "Deceased" },
];

const getStatusColor = (status) => {
  return status === "Alive" ? "green" : "red";
};

const App = () => {
  return (
    <div className="App">
      <h1>Naruto Characters</h1>
      <div className="character-grid">
        {characters.map((character, index) => (
          <div className="character-card" key={index}>
            <div className="character-name">{character.name}</div>
            <div className="status-indicator" style={{ backgroundColor: getStatusColor(character.status) }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
