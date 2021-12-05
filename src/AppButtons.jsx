const AppButtons = (props) => {
  const grayButton = (char) => (
    <div className="grid-item" onClick={() => props.handleButtonPressed(char)}>
      <span>{char}</span>
    </div>
  );

  const grayClearButton = () => (
    <div className="grid-item" onClick={props.handleClear}>
      <span>C</span>
    </div>
  );

  const operatorButton = (char) => (
    <div
      className="grid-item operator"
      onClick={() => props.handleButtonPressed(char)}
    >
      <span>{char}</span>
    </div>
  );

  return (
    <div className="grid-container">
      {/* first row */}
      {grayButton(7)}
      {grayButton(8)}
      {grayButton(9)}
      {operatorButton("+")}

      {/* second row */}
      {grayButton(4)}
      {grayButton(5)}
      {grayButton(6)}
      {operatorButton("*")}

      {/* third row */}
      {grayButton(1)}
      {grayButton(2)}
      {grayButton(3)}
      {operatorButton("-")}

      {/* fourth row */}
      {grayClearButton()}
      {grayButton(0)}
      {grayButton(".")}
      {operatorButton("/")}
    </div>
  );
};

export default AppButtons;
