import * as React from "react";
import "./ships.css";

const ShipsColumnHeader = () => {
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

const Ship = ({ col, row, onClick }) => {
  const location = col + row;
  return (
    <div
      data-testid={location}
      id={location}
      onClick={() => onClick(col, row)}
    ></div>
  );
};

const ShipsRow = ({ row, onClick }) => {
  return (
    <>
      <div>{row}</div>
      <Ship col="A" row={row} onClick={onClick} />
      <Ship col="B" row={row} onClick={onClick} />
      <Ship col="C" row={row} onClick={onClick} />
      <Ship col="D" row={row} onClick={onClick} />
      <Ship col="E" row={row} onClick={onClick} />
      <Ship col="F" row={row} onClick={onClick} />
      <Ship col="G" row={row} onClick={onClick} />
    </>
  );
};

const Ships = ({ onClick }) => {
  return (
    <div data-testid="grid" className="ships-grid">
      <ShipsColumnHeader />

      <ShipsRow row="1" onClick={onClick} />
      <ShipsRow row="2" onClick={onClick} />
      <ShipsRow row="3" onClick={onClick} />
      <ShipsRow row="4" onClick={onClick} />
      <ShipsRow row="5" onClick={onClick} />
      <ShipsRow row="6" onClick={onClick} />
      <ShipsRow row="7" onClick={onClick} />
    </div>
  );
};

export default Ships;
