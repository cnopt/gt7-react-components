import React from "react";
import "../css/GTTable.css";

// todo make this modular mate
// make this so the props are columnsxrows
// so u can make different table types with one table comp
export default function GTTable(props) {
  const {header, width} = props;
  return (
    <>
      <table className="gttable" width={width}>
        <th className="gttable-main-header">{header}</th>
        <tr>
          <th>Useable Tyres & Types</th>
          <td>Racing</td>
        </tr>
        <tr>
          <th>Category</th>
          <td>Gr.3</td>
        </tr>
        <tr>
          <th>Wide Body</th>
          <td>Prohibited</td>
        </tr>
        <tr>
          <th>Nitrous</th>
          <td>Prohibited</td>
        </tr>
      </table>
    </>
  );
}
