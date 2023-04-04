const Results = ({ countriesToShow }) => {
  console.log(countriesToShow);
  if (countriesToShow.length > 10) {
    return <div>Too many matches, please specify your search</div>;
  } else if (countriesToShow.length !== 1) {
    return countriesToShow.map((country) => (
      <div key={country["name"]["official"]}>{country["name"]["common"]}</div>
    ));
  }
  return <div>{countriesToShow[0]["name"]["common"]}</div>;
};

export default Results;
