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

  const handleNewSearch = (e) => {
    const updatedSearch = e.target.value;
    setNewSearch(updatedSearch);

    if (updatedSearch === "") {
      setCountriesToShow([]);
    } else {
      setCountriesToShow(
        countries.filter((country) =>
          country["name"]["common"]
            .toLowerCase()
            .includes(updatedSearch.toLowerCase())
        )
      );
    }
  };

  const handleShowCountry = (e, countryName) => {
    setCountriesToShow(
      countries.filter(
        (country) =>
          country["name"]["common"].toLowerCase() === countryName.toLowerCase()
      )
    );
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
