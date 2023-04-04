import { useState, useEffect } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import countriesService from "./services/countries";

function App() {
  const [newSearch, setNewSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    countriesService
      .getAll()
      .then((allCountries) => setCountries(allCountries));
  }, []);

  const getFilteredCountries = (query) => {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleNewSearch = (e) => {
    const updatedSearch = e.target.value;
    setNewSearch(updatedSearch);

    if (updatedSearch === "") {
      setCountriesToShow([]);
    } else {
      setCountriesToShow(getFilteredCountries(updatedSearch));
    }
  };

  const handleShowCountry = (countryName) => {
    setCountriesToShow(getFilteredCountries(countryName));
  };

  return (
    <div>
      <h1>Countries</h1>
      <Search newSearch={newSearch} handleNewSearch={handleNewSearch} />
      <Results
        countriesToShow={countriesToShow}
        handleShowCountry={handleShowCountry}
      />
    </div>
  );
}

export default App;
