import "./App.css";
import React from "react";
import { Component } from "react";
import Calculator from "./Calculator";

class App extends Component {
  state = { calcString: "" };
  calc = (calcValue) => this.setState({ calcString: calcValue });
  total = () => {
    const operation = this.state.calcString.slice();
    const regex = /^(\d+(?:.\d+)?)(\+|-|\*|\/){1}(\d+(?:.\d+)?)$/g;
    const matchArray = [...operation.matchAll(regex)];
    let result = "";
    let firstOperand;
    let secondOperand;
    const results = matchArray[0];
    if (results !== undefined) {
      // results[1] -> first capturing group -> first digit
      firstOperand = parseFloat(results[1]);
      // results[3] -> third capturing group -> second digit
      secondOperand = parseFloat(results[3]);
      // results[2] -> second capturing group -> operator
      switch (results[2]) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "*":
          result = firstOperand * secondOperand;
          break;
        case "/":
          result =
            secondOperand !== 0
              ? firstOperand / secondOperand
              : "Division by zero is undefined";
          break;
        default:
          break;
      }
    }

    return (result === "Division by zero is undefined") | (result === "") ? (
      <h3>{result}</h3>
    ) : (
      <div>
        <h3>Result = {result}</h3>
        <h4>Also, did you know?</h4>
        <p>
          The hypotenuse of a triangle with sides {firstOperand} and{" "}
          {secondOperand} = {Math.hypot(firstOperand, secondOperand)}
          <br />
          or that <br />
          {firstOperand} to the power of {secondOperand} ={" "}
          {Math.pow(firstOperand, secondOperand)}
        </p>
      </div>
    );
  };

  render() {
    const invalid = () =>
      this.state.calcString.match(/[^\d+*/-]/g) !== null ? true : false;
    return (
      <main>
        <h1>Calcuate with React!</h1>
        {invalid() && (
          <h1>
            <span>🤖</span> Unsuported character detected in input field.
          </h1>
        )}
        <Calculator calc={this.calc} />

        {this.total()}
      </main>
    );
  }
}

export default App;
