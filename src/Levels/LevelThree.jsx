import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LevelThree = () => {
  
  // начальная фигура, представленная в виде двумерного массива
  const [matchesState, setMatchesState] = useState([
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 1, 0, 1, 1]
  ]);

  const navigator = useNavigate();

  // после перемещения любой спички проверяет, совпадает ли массив спичек с массивом winningState. если совпадает, то уровень пройден
  useEffect(()=> {
    const winningState = [
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
    ];
    if (JSON.stringify(matchesState) === JSON.stringify(winningState)) {
      setTimeout(()=> {
        alert("Вы выиграли!");
        navigator('/');
      }, 500);
    }
  }, [matchesState])

  // обработчик события onDtagStart()
  const handleDragStart = (event, rowIndex, columnIndex) => {
    event.dataTransfer.setData("rowIndex", rowIndex);
    event.dataTransfer.setData("columnIndex", columnIndex);
  };

  // обработчик события onDrop
  const handleDrop = (event, targetRowIndex, targetColumnIndex) => {
    const sourceRowIndex = event.dataTransfer.getData("rowIndex");
    const sourceColumnIndex = event.dataTransfer.getData("columnIndex");

    const newMatchesState = [...matchesState];

    // Проверка наличия спички в целевой позиции
    if (newMatchesState[targetRowIndex][targetColumnIndex] === 0) {

      // Перемещение спички из начальной позиции
      newMatchesState[sourceRowIndex][sourceColumnIndex] = 0;
      
      // Перемещение спички в целевую позицию
      newMatchesState[targetRowIndex][targetColumnIndex] = 1;
      setMatchesState(newMatchesState);
    }
  };

  // обработчик события onDragOver()
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <p style={{color: '#ED760E', fontSize: '24px'}}>3 уровень</p>
      <h1 style={{padding: "100px"}}>Сделайте фигуру, похожую на песочные часы</h1>
      {matchesState.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((match, columnIndex) => (
            <img
              src='/match.png'
              key={columnIndex}
              alt='match'
              draggable={match === 1}
              onDragStart={(event) =>
                handleDragStart(event, rowIndex, columnIndex)
              }
              onDrop={(event) =>
                handleDrop(event, rowIndex, columnIndex)
              }
              onDragOver={handleDragOver}
              style={{
                display: "inline-block",
                width: "40px",
                height: "40px",
                margin: "2px",
                cursor: match ? "grab" : "default",
                opacity: match ? 1 : 0,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default LevelThree;
