import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils";

function CheckersBoard(props) {
  const [{isOver}, drop] = useDrop({
    accept: ItemTypes.BLACKMAN,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  });
  return (
    <table className="no-border">
      <thead>
        <tr>
          <th></th>
          <th>a</th>
          <th>b</th>
          <th>c</th>
          <th>d</th>
          <th>e</th>
          <th>f</th>
          <th>g</th>
          <th>h</th>
          <th></th>
        </tr>
      </thead>
      <tbody ref={drop} style={{opacity: isOver? 0.5 : 1}}>{props.data.map(props.makeRow)}</tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>a</th>
          <th>b</th>
          <th>c</th>
          <th>d</th>
          <th>e</th>
          <th>f</th>
          <th>g</th>
          <th>h</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
}

export default CheckersBoard;
