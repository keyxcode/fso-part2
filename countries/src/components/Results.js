import Country from "./Country";

const Results = ({ countriesToShow, handleShowCountry }) => {
  if (countriesToShow.length > 10) {
    return <div>Too many matches, please specify your search</div>;
  } else if (countriesToShow.length === 1) {
    return <Country country={countriesToShow[0]} />;
  }

  return countriesToShow.map((country) => (
    <div key={country.name.common}>
      {country.name.common}
      <button onClick={() => handleShowCountry(country.name.common)}>
        Show
      </button>
    </div>
  ));
};

export default Results;
