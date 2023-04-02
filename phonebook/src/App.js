import { useState } from "react";

const Contact = ({ person }) => {
  const { name } = person;
  return <div>{name}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Contact key={person.name} person={person} />
      ))}
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
