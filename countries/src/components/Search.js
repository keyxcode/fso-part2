const Search = ({ newSearch, handleNewSearch }) => {
  return (
    <div>
      Find Countries <input onChange={handleNewSearch} value={newSearch} />
    </div>
  );
};

export default Search;
