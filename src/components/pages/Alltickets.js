import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Datatable from '../pages-addons/Datatable'
import '../pages-addons/Searchbarsize.css';

require("es6-promise").polyfill();
require("isomorphic-fetch");


function AllTickets() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [searchColumns, setSearchColumns] = useState(['Company']);

useEffect(() => {
  fetch('https://ticketsystemfe-default-rtdb.europe-west1.firebasedatabase.app/dummy.json')
  .then((response) => response.json())
  .then((json) => setData(json))
}, [])
function search(rows) {
    return rows.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1,
      ),
    );
  }

  const columns = data[0] && Object.keys(data[0]);
  return (
    <div class='pe-5'>
      <div>
        <input
          type='search'
          id="form1"
          placeholder="Search"
          aria-label="Search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {columns &&
          columns.map((column) => (
            <label class="form-check form-check-inline m-3">
              <input
                type='checkbox'
                class="form-check-input"
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column],
                  );
                }}
              />
              {column}
            </label>
          ))}
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  );
}

export default AllTickets;
