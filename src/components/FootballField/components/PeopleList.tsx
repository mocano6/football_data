// src/components/PeopleList.tsx

import React from "react";

interface PeopleListProps {
  people: string[];
  newPerson: string;
  setNewPerson: React.Dispatch<React.SetStateAction<string>>;
  handleAddPerson: () => void;
  handleAuthorToggle: (person: string) => void;
  activeAuthors: Set<string>;
}

const PeopleList: React.FC<PeopleListProps> = ({
  people,
  newPerson,
  setNewPerson,
  handleAddPerson,
  handleAuthorToggle,
  activeAuthors,
}) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <h3>Lista Osób</h3>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={activeAuthors.has(person)}
              onChange={() => handleAuthorToggle(person)}
            />
            {person}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newPerson}
        onChange={(e) => setNewPerson(e.target.value)}
        placeholder="Dodaj osobę"
      />
      <button onClick={handleAddPerson}>Dodaj</button>
    </div>
  );
};

export default PeopleList;
