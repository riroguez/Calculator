import Calculator from "./Calculator.js";

class Display {
    constructor(displayCurrentValue, displayPreviousValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculator = new Calculator;
        this.typeOperator = undefined;
        this.currentValue = '';
        this.previousValue = '';
        this.sings = {
            sumar: '+',
            restar: '-',
            multiplicar: 'x',
            dividir: '%'
        }
    }

    deleteNumbers() {
        this.currentValue = this.currentValue.toString().slice(0, -1);
        this.printValues();
    }

    deleteAll() {
        this.currentValue = '';
        this.previousValue = '';
        this.typeOperator = undefined;
        this.printValues();
    }

    computer(type) {
        this.typeOperator !== 'equal' && this.calculate();
        this.typeOperator = type;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.printValues();
    }

    addNumber(number) {
        if(number === '.' && this.currentValue.includes('.'))return;
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValues();
    }

    printValues() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.sings[this.typeOperator] || ''}`;
    }

    calculate() {
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);
        if(isNaN(previousValue) || isNaN(currentValue)) return;
        this.currentValue = this.calculator[this.typeOperator](previousValue, currentValue);
    }


}//Display

export default Display;