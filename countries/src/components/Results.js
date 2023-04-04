import Country from "./Country";

const Results = ({ countriesToShow, handleShowCountry }) => {
  console.log(countriesToShow);
  if (countriesToShow.length > 10) {
    return <div>Too many matches, please specify your search</div>;
  } else if (countriesToShow.length !== 1) {
    return countriesToShow.map((country) => (
      <div key={country["name"]["common"]}>
        {country["name"]["common"]}
        <button name={country["name"]["common"]} onClick={handleShowCountry}>
          Show
        </button>
      </div>
    ));
  }
  return <Country country={countriesToShow[0]} />;
};

export default Results;
