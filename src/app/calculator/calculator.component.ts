import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result: string = '0';
  currentInput: string = '';
  operator: string = '';
  lastOperator: string = '';
  isResultCalculated: boolean = false;

  handleButtonClick(value: string): void {
    if (this.isResultCalculated) {
      this.result = '0';
      this.currentInput = '';
      this.operator = '';
      this.lastOperator = '';
      this.isResultCalculated = false;
    }

    if (value === 'C') {
      this.result = '0';
      this.currentInput = '';
      this.operator = '';
      this.lastOperator = '';
    } else if ('0123456789'.includes(value) || value === '.') {
      this.currentInput += value;
    } else if ('+-*/'.includes(value)) {
      if (this.currentInput !== '') {
        if (this.operator === '') {
          this.result = this.currentInput;
        } else {
          this.result = eval(`${this.result} ${this.operator} ${this.currentInput}`).toString();
        }
        this.currentInput = '';
      }
      this.operator = value;
    } else if (value === '=') {
      if (this.currentInput !== '') {
        if (this.operator !== '' && this.currentInput !== '') {
          this.result = eval(`${this.result} ${this.operator} ${this.currentInput}`).toString();
          this.lastOperator = this.operator;
          this.operator = '';
          this.currentInput = '';
          this.isResultCalculated = true;
        }
      }
    }
  }
}
