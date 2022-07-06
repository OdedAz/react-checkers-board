import React from "react";
import { fixFirst } from "../utils";
import Square from "./Square";

function Row(props) {
  const makeSquare = fixFirst(MakeSquareForRow, props.number);
  return (
    <tr>
      <th>{props.number}</th>
      {props.data.map(makeSquare)}
      <th>{props.number}</th>
    </tr>
  );
}

function MakeSquareForRow(rowNumber, Piece, index) {
  const column = String.fromCharCode(97 + index);
  return (
    <Square row={rowNumber} column={column} key={column+rowNumber}>
      {Piece && <Piece id={Piece?.name+"-"+column+rowNumber} location={{column, rowNumber}} />}
    </Square>
  );
}

export default Row;
