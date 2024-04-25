const ListTable = ({ filteredCountries }) => {
  return (
    <table className="table table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Country Flag</th>
          <th scope="col">Country</th>
          <th scope="col">Capital City</th>
          <th scope="col">Continent</th>
          <th scope="col">Population</th>
        </tr>
      </thead>
      <tbody>
        {filteredCountries.map((country, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <img
                src={country.flags.svg}
                alt={country.name.common}
                style={{ width: "50px", height: "auto" }}
              />
            </td>
            <td>{country.name.common}</td>
            <td>{country.capital}</td>
            <td>{country.continents}</td>
            <td>{country.population}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListTable;
