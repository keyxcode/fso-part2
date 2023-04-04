import { useState, useEffect } from "react";
import Search from "./components/Search";
import countriesService from "./services/countries";

function App() {
  const [newSearch, setNewSearch] = useState("");
  const [countries, setCountries] = useState([]);

  const getNamesFromCountries = (countries) => {
    return countries.map((country) => country["name"]["common"]);
  };

  let countriesToShow = newSearch
    ? getNamesFromCountries(countries).filter((name) =>
        name.toLowerCase().includes(newSearch.toLowerCase())
      )
    : getNamesFromCountries(countries);

  useEffect(() => {
    countriesService
      .getAll()
      .then((allCountries) => setCountries(allCountries));
  }, []);

  const handleNewSearch = (e) => {
    setNewSearch(e.target.value);
  };

  return (
    <div>
      <h1>Countries</h1>
      <Search newSearch={newSearch} handleNewSearch={handleNewSearch} />
      <div>{countriesToShow}</div>
    </div>
  );
}

export default App;
