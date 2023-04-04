import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [newSearch, setNewSearch] = useState("");

  const handleNewSearch = (e) => {
    setNewSearch(e.target.value);
  };

  return (
    <div>
      <Search newSearch={newSearch} handleNewSearch={handleNewSearch} />
      <h1>Countries</h1>
    </div>
  );
}

export default App;
