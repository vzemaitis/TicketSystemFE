import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import { useGlobalFilter, useSortBy, useTable } from "react-table";

import GlobalFilter from '../pages-addons/globalFilter';



function AllTickets() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://ticketsystemfe-default-rtdb.europe-west1.firebasedatabase.app/dummy.json")
    .catch(err => console.log(err));
  
    if(response) {
      const information = response.data;

      console.log('Information: ', information);
      setData(information);
    }
  };

  const columns = useMemo(() => ([
    {
      Header: 'Company',
      accessor: 'Company'
    },
    {
      Header: 'Address',
      accessor: 'address'
    },
    {
      Header: 'Country', 
      accessor: 'country'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Location ID',
      accessor: 'locationid'
    },
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Phone',
      accessor: 'phone'
    },
    {
      Header: 'ZIP Code',
      accessor: 'postalZip'
    },
  ]), [])

  const informationData = useMemo(() => [...data], [data]);

  const dataColumns = useMemo(
    () =>
      data[0]
        ? Object.keys(data[0])
            .filter((key) => key)
            .map((key) => {
              if (key)
                return {
                  Header: key,
                  accessor: key,
                };

              return { Header: key, accessor: key };
            })
        : [],
    [data]
  );

  const tableInstance = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, preGlobalFilteredRows, setGlobalFilter, state} = tableInstance;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} setGlobalFilter={setGlobalFilter} globalFilter={state.globalFilter} />
   <table {...getTableProps()} className="table table-striped table-hover">
      <thead>
        {headerGroups.map(((headerGroup,) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                 { column.render("Header") }
                  {column.isSorted ? (column.isSortedDesc ? "▼" : "▲" ) : ""}
                  </th>
            ))}
          </tr>
        )))}
      </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}> 
                    { cell.render('Cell')} 
                  </td>
                ))}
                </tr>
            )})}
        </tbody>
    </table>
    </>
  );
}

export default AllTickets;
