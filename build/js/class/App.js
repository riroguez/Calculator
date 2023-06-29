import {btnDeleteNumbers, btnNumbers, btnOperators, displayCurrentValue, displayPreviousValue, emptyDisplay} from '../selectors.js'
import Display from './Display.js';

const display = new Display(displayCurrentValue, displayPreviousValue);

class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        btnNumbers.forEach(number => number.addEventListener('click', () => {
            display.addNumber(number.innerHTML);
        }));

        btnDeleteNumbers.addEventListener('click', () => {
            display.deleteNumbers();
        });

        emptyDisplay.addEventListener('click', () => {
            display.deleteAll();
        });

        btnOperators.forEach(btn => btn.addEventListener('click', () => {
            display.computer(btn.value);
        }));

    }

}//App

export default App;