const Country = ({ country }) => {
  const languages = [];
  for (const language in country["languages"])
    languages.push(country["languages"][language]);

  return (
    <div>
      <h1>{country["name"]["common"]}</h1>
      <div>Capital: {country["capital"]}</div>
      <div>Area: {country["area"]}</div>
      <h2>Languages:</h2>
      <ul>
        {languages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <img alt="flag" src={country["flags"]["png"]} />
    </div>
  );
};

export default Country;
