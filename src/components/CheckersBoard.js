

function CheckersBoard(props) {
  
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
      <tbody>{props.data.map(props.makeRow)}</tbody>
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
