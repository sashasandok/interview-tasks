import { useEffect, useState } from "react";

import "./styles.css";

const URL = "https://countriesnow.space/api/v0.1/countries/population/cities";

// 1. Get data using fetch API
// https://countriesnow.space/api/v0.1/countries/population/cities

// 2. Implement search by city name ()

export default function App() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const fetchCities = async () => {
    const result = await fetch(URL, {
      method: "GET",
    }).then((res) => res.json());
    console.log(result.data[0]);
    setList(result.data);
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const searchSity = (evt) => {
    const value = evt.target.value;

    const result = list.filter((item) => {
      return item.city.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredList(result);
  };

  return (
    <div className="box">
      Search by city name: <br />
      <input type="text" onChange={searchSity} />
      <br />
      {searchValue ? (
        <>
          Results:
          <ul>
            {filteredList.map((item) => {
              return (
                <li key={item.city}>
                  City name: {item.city} <br />
                  Country: {item.country} <br />
                  Population: Biggest population
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <div>No results!</div>
      )}
    </div>
  );
}
