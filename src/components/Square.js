import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils";

function Square(props) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BLACKMAN,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item) => {
      movePieace(item);
    },
  }));
  const movePieace = (pieceToMove) => {
    
    if (pieceToMove.id.indexOf("BlackMan") > -1) {
      console.log("here");
      console.log("pieceToMove: ", pieceToMove.location);
      const layoutOfGame = this.$store.state.gameLayout;
      console.log({layoutOfGame})

    }
  };
  const key = props.column + props.row;
  return (
    <td
      className={"square " + squareStyle(props.row, props.column)}
      key={key}
      id={key}
      ref={drop}
      style={{ opacity: isOver ? 0.5 : 1 }}
    >
      {props.children}
    </td>
  );
}

function squareStyle(row, column) {
  const isEvenRow = row % 2 === 0;
  const isEvenColumn = column.charCodeAt() % 2 !== 0;
  const isLight = (isEvenRow && isEvenColumn) || (!isEvenRow && !isEvenColumn);

  return isLight ? "light" : "dark";
}

export { squareStyle };
export default Square;
