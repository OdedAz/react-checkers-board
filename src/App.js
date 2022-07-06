import "./App.css";
import io from "socket.io-client";
import { fixFirst } from "./utils";
import { useEffect, useState } from "react";
// import checkersLogic from "./checkersLogic";
import Row from "./components/Row";
import BlackMan from "./components/pieces/BlackMan";
import WhiteMan from "./components/pieces/WhiteMan";
import BlackKing from "./components/pieces/BlackKing";
import WhiteKing from "./components/pieces/WhiteKing";
import CheckersBoard from "./components/CheckersBoard";

const socket = io.connect("http://localhost:3001");

function App() {
  const [gameLayout, setGameLayout] = useState([
    [null, BlackMan, null, BlackMan, null, BlackMan, null, BlackMan],
    [BlackMan, null, BlackMan, null, BlackMan, null, BlackMan, null],
    [null, BlackMan, null, BlackMan, null, BlackMan, null, BlackMan],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [WhiteMan, null, WhiteMan, null, WhiteMan, null, WhiteMan, null],
    [null, WhiteMan, null, WhiteMan, null, WhiteMan, null, WhiteMan],
    [WhiteMan, null, WhiteMan, null, WhiteMan, null, WhiteMan, null],
  ]);

  function checkPlayerType(player, indexA, indexB) {
    const id = parseInt(indexA.toString() + indexB.toString());
    if (player === BlackMan) return { id: id, value: "BlackMan" };
    if (player === WhiteMan) return { id: id, value: "WhiteMan" };
    if (player === BlackKing) return { id: id, value: "BlackKing" };
    if (player === WhiteKing) return { id: id, value: "WhiteKing" };
    else return { id: id, value: null };
  }

  useEffect(() => {
    socket.on("recive_game_data", (dataRecivedFromServer) => {
      alert("test is good" + dataRecivedFromServer);
    });
  }, [socket]);

  const dataMapedToServer = gameLayout.map(
    function (row, rowIndex) {
      return row.map(function (col, colIndex) {
        return checkPlayerType(col, rowIndex, colIndex);
      });
    }
  );
  const makeRow = fixFirst(makeRowIn, dataMapedToServer.length);

  const updateBoard = () => {
    //gets the new board data array and send it to the DB or save in storage.
    socket.emit("send_game_data", { dataMapedToServer });
  };

  
  return (
    <div id="app" className="checker-board-wrapper">
      <CheckersBoard
        data={gameLayout}
        makeRow={makeRow}
        updateBoard={updateBoard}
        setGameLayout={setGameLayout}
      />
      <button onClick={updateBoard}>test here</button>
    </div>
  );
}

function makeRowIn(numberOfRows, rowData, index) {
  const number = numberOfRows - index;
  return <Row key={number.toString()} number={number} data={rowData} />;
}

export default App;

// const data = [
//   [null, BlackMan, null, BlackMan, null, BlackMan, null, BlackMan],
//   [BlackMan, null, BlackMan, null, BlackMan, null, BlackMan, null],
//   [null, BlackMan, null, BlackMan, null, BlackMan, null, BlackMan],
//   [null, null, null, null, null, null, null, null],
//   [null, null, null, null, null, null, null, null],
//   [WhiteMan, null, WhiteMan, null, WhiteMan, null, WhiteMan, null],
//   [null, WhiteMan, null, WhiteMan, null, WhiteMan, null, WhiteMan],
//   [WhiteMan, null, WhiteMan, null, WhiteMan, null, WhiteMan, null],
// ];
