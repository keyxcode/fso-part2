import Country from "./Country";

const Results = ({ countriesToShow }) => {
  console.log(countriesToShow);
  if (countriesToShow.length > 10) {
    return <div>Too many matches, please specify your search</div>;
  } else if (countriesToShow.length !== 1) {
    return countriesToShow.map((country) => (
      <div key={country["name"]["official"]}>{country["name"]["common"]}</div>
    ));
  }
  return <Country country={countriesToShow[0]} />;
};

export default Results;
