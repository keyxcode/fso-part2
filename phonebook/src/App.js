import { useState } from "react";

const Contact = ({ person }) => {
  const { name, number } = person;
  return (
    <div>
      {name} {number}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const personsToShow = newFilter
    ? persons.filter((person) => person.name.includes(newFilter))
    : [...persons];
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const personExists = (person) => {
    const personsNames = persons.map((person) => JSON.stringify(person.name));
    return personsNames.includes(JSON.stringify(person.name));
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (personExists(personObject)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input value={newFilter} onChange={handleFilterChange} />
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <Contact key={person.name} person={person} />
      ))}
    </div>
  );
};

export default App;
