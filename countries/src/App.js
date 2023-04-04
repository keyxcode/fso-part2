import { useState, useEffect } from "react";
import Search from "./components/Search";
import countriesService from "./services/countries";

function App() {
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    console.log(countriesService.getAll());
  }, []);

  const handleNewSearch = (e) => {
    setNewSearch(e.target.value);
  };

  return (
    <div>
      <h1>Countries</h1>
      <Search newSearch={newSearch} handleNewSearch={handleNewSearch} />
    </div>
  );
}

export default App;
