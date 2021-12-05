import { Component } from "react";
import AppButtons from "./AppButtons";
import AppTopBar from "./AppTopBar";

class Calculator extends Component {
  state = { formula: "" };

  newValue = (char) => this.state.formula.concat(char);

  handleButtonPressed = (char) => {
    const formula = this.newValue(char);
    this.setState({ formula });
    this.props.calc(formula);
  };

  handleClear = () => {
    this.setState({ formula: "" });
    this.props.calc("");
  };

  handleChange = (event) => {
    const formula = event.target.value;
    this.setState({ formula });
    this.props.calc(formula);
  };

  inputToDisplay = () =>
    [...this.state.formula].map((char, index) =>
      char.match(/[^\d+*/-]/g) !== null ? (
        <span className="bad-char" key={index}>
          {char}
        </span>
      ) : (
        char
      )
    );

  render() {
    return (
      <div className="parent">
        <AppTopBar title="React Calc!" />
        <div className="app-input input-container">
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.formula}
            placeholder=" 0"
          ></input>
          <div className="input-field-replacement">
            <div>{this.inputToDisplay()}</div>
          </div>
        </div>
        <AppButtons
          handleButtonPressed={this.handleButtonPressed}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}
export default Calculator;
