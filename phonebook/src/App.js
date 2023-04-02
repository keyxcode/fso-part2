import { useState } from "react";

const Contact = ({ person }) => {
  const { name } = person;
  return <div>{name}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const personExists = (person) => {
    const personsStringify = persons.map((person) => JSON.stringify(person));
    console.log(personsStringify);
    return personsStringify.includes(JSON.stringify(person));
  };

  const addName = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
    };
    if (personExists(personObject)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    setPersons(persons.concat(personObject));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Contact key={person.name} person={person} />
      ))}
    </div>
  );
};

export default App;
