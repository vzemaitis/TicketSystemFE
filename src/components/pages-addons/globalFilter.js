import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

export default function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 300);

  return(
  <div className="form-outline">
    <input type='search'
    id='form1'
    className="form-control"
    aria-label='Search'
    style={{ marginBottom: '25px', marginTop: '25px', width: '35%'}}
     value={value || ""} onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    }} placeholder={`${count} records...`} />
  </div>
  )
}
