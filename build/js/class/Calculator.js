class Calculator {

    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2 ? num1 - num2 : '0';
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }

    dividir(num1, num2) {
        return num1 / num2;
    }

}//Calculator

export default Calculator;