import { useEffect, useState } from "react";
import ListTable from "./ListTable";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const dataCountries = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(dataCountries)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const sortCountries = (option) => {
    switch (option) {
      case "Country":
        return [...filteredCountries].sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
      case "Population Higher":
        return [...filteredCountries].sort(
          (a, b) => b.population - a.population
        );
      case "Population Lower":
        return [...filteredCountries].sort(
          (a, b) => a.population - b.population
        );
      default:
        return filteredCountries;
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="container my-5 d-flex flex-column justify-content-between align-items-center">
      <h1 className="d-flex justify-content-center mb-4 text-primary">
        Search Bar & Sort By in React JS
      </h1>

      <div className="card">
        <div className="card-header d-flex flex-row justify-content-between">
          <form className="d-flex w-75" role="search">
            <input
              className="form-control me-2 py-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <select
            className="form-select w-25"
            aria-label="Sort By"
            onChange={handleSortChange}
            value={sortOption}
          >
            <option value="">Sort By</option>
            <option value="Country">Country</option>
            <option value="Population Higher">Population Higher</option>
            <option value="Population Lower">Population Lower</option>
          </select>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <ListTable filteredCountries={sortCountries(sortOption)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
