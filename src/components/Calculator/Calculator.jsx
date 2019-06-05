import React, { Component } from 'react';
import Display from '../Display/Display';
import './Calculator.css';
import Keypad from '../Keypad/Keypad';


class Calculator extends Component {


  constructor(props) {
    this.state = {
      displayValue: '0',
    }

    // explicit binding
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(value) {
    this.setState({ displayValue: value });
  }

  callOperator = () => {
    console.log('call operation');
  }

  // setOperator = () => {
  //   console.log('set operation');
  // }

  setOperator = value => {
    let { displayValue, selectedOperator, storedValue } = this.state;

    // check if a value is already present for selectedOperator
    if (selectedOperator === '') {
      // update storedValue to the value of displayValue
      storedValue = displayValue;
      // reset the value of displayValue to '0'
      displayValue = '0';
      // update the value of selectedOperator to the given value
      selectedOperator = value;
    } else {
      // if selectedOperator is not an empty string
      // update the value of selectedOperator to the given value
      selectedOperator = value;
    }

    this.setState({ displayValue, selectedOperator, storedValue });
  }

  // updateDisplay = () => {
  //   console.log('update display');
  // }
  updateDisplay = value => {
    let { displayValue } = this.state;

    // prevent multiple occurences of '.'
    if (value === '.' && displayValue.includes('.')) value = '';

    if (value === 'ce') {
      // deletes last char in displayValue
      displayValue = displayValue.substr(0, displayValue.length - 1);
      // set displayValue to '0' if displayValue is empty string
      if (displayValue === '') displayValue = '0';
    } else {
      // replace displayValue with value if displayValue equal to '0'
      // else concatenate displayValue and value
      displayValue === '0' ? displayValue = value : displayValue += value;
    }

    this.setState({ displayValue });
  }
  render = () => {
  // unpack the component state by using Object Destructuring
    const { displayValue, numbers, operators } = this.state;

    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad
          callOperator={this.callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  }

}
export default Calculator;
