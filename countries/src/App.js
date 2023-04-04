import { useState, useEffect } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import countriesService from "./services/countries";

function App() {
  const [newSearch, setNewSearch] = useState("");
  const [countries, setCountries] = useState([]);

  const countriesToShow = newSearch
    ? countries.filter((country) =>
        country["name"]["common"]
          .toLowerCase()
          .includes(newSearch.toLowerCase())
      )
    : [];

  useEffect(() => {
    countriesService
      .getAll()
      .then((allCountries) => setCountries(allCountries));
  }, []);

  const handleNewSearch = (e) => {
    setNewSearch(e.target.value);
  };

  const handleShowCountry = () => {
    console.log("hi");
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
