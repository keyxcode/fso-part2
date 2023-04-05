import Weather from "./Weather";

const Country = ({ country }) => {
  const languages = [];
  for (const language in country.languages)
    languages.push(country.languages[language]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>Capital: {country.capital ? country.capital : "N/A"}</div>
      <div>Area: {country.area}</div>
      <h2>Languages:</h2>
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img alt={`${country.name.common} flag`} src={country.flags.png} />
      <Weather country={country} />
    </div>
  );
};

export default Country;
