const Person = ({ person }) => {
  const { name, number } = person;
  return (
    <div>
      {name} {number}
    </div>
  );
};

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default Persons;
