import React from 'react'
import { useDrop } from "react-dnd";
import { fixFirst } from '../utils'
import Square from './Square'
import { ItemTypes } from "../utils";

function Row(props) {
    const makeSquare = fixFirst(makeSquareForRow, props.number)
    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.BLACKMAN,
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        })
      });
    return (
        <tr>
            <th>{props.number}</th>
            {props.data.map(makeSquare)}
            <th>{props.number}</th>
        </tr>
    )
}

function makeSquareForRow(rowNumber, Piece, index, isOver, drop) {
    const column = String.fromCharCode(97 + index)
    
    // const [{ isOver }, drop] = useDrop(() => ({
    //     accept: "image",
    //     drop: (item) => {
    //       console.log({item})
    //       movePieaceInBoard(item.id);
    //     },
    //   }));
    
    //   const movePieaceInBoard = (id) => {
    //     console.log({id})
    //   };
    return (
        <Square
            key={column + rowNumber}
            row={rowNumber}
            column={column}
            ref={drop}
            style={{opacity: isOver? 0.5 : 1}}
        >
            {Piece && <Piece />}
        </Square>
    )
}

export default Row