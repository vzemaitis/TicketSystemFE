import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} cellSpacing={0} class="table table-striped table-hover" >
      <thead>
        <tr>
          {data[0] && columns.map((heading) => <th>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}