import * as React from "react";
import "./ships.css";

const Ships = () => {
  const showHeader = () => {
    return (
      <>
        <div></div>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
        <div>F</div>
        <div>G</div>
      </>
    );
  };

  const takeShot = (col, row) => {
    alert(col + row);
  };

  const showLocation = (col, row) => (
    <div id={col + row} onClick={() => takeShot(col, row)}></div>
  );

  const showRow = (row) => {
    return (
      <>
        <div>{row}</div>
        {showLocation("a", row)}
        {showLocation("b", row)}
        {showLocation("c", row)}
        {showLocation("d", row)}
        {showLocation("e", row)}
        {showLocation("f", row)}
        {showLocation("g", row)}
      </>
    );
  };

  return (
    <div className="ships-grid">
      {showHeader()}

      {showRow(1)}
      {showRow(2)}
      {showRow(3)}
      {showRow(4)}
      {showRow(5)}
      {showRow(6)}
      {showRow(7)}
    </div>
  );
};

export default Ships;
