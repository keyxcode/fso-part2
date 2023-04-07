import { useState, useEffect } from "react";
import PersonFilter from "./components/PersonFilter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [notiMsg, setNotiMsg] = useState(null);
  const [notiIsError, setNotiIsError] = useState(false);

  useEffect(() => {
    personsService
      .getAll()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const personsToShow = newFilter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(newFilter.toLowerCase())
      )
    : [...persons];

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const personExists = (person) => {
    const personsNames = persons.map((person) => JSON.stringify(person.name));
    return personsNames.includes(JSON.stringify(person.name));
  };

  const getNameFromID = (id) => {
    return persons.filter((person) => person.id === id)[0].name;
  };

  const getIDFromName = (name) => {
    return persons.filter((person) => person.name === name)[0].id;
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (personExists(personObject)) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, return old number with a new one?`
        )
      ) {
        const id = getIDFromName(newName);
        personsService
          .update(id, personObject)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== id ? person : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
            setNewFilter("");
          })
          .catch((err) => {
            console.log(err);
            setNotiIsError(true);
            setNotiMsg(
              `Information of ${personObject.name} has already been removed from server`
            );
            setTimeout(() => {
              setNotiMsg(null);
            }, 5000);
          });
      }
      return;
    }

    personsService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
      setNewFilter("");
      setNotiMsg(`Added ${personObject.name}`);
      setTimeout(() => {
        setNotiMsg(null);
      }, 5000);
    });
  };

  const deletePerson = (id) => {
    if (window.confirm(`Delete ${getNameFromID(id)}`)) {
      personsService.deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification msg={notiMsg} notiIsError={notiIsError} />
      <PersonFilter
        newFilter={newFilter}
        handleFilterChange={handleFilterChange}
      />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNewNameChange={handleNewNameChange}
        newNumber={newNumber}
        handleNewNumberChange={handleNewNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
