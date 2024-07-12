let display = document.getElementById('display');
let lastAnswer = 0;

function press(num) {
    display.value += num;
}

function addFunction(func) {
    if (func === 'x^') {
        display.value += '**';
    } else if (func === 'sqrt') {
        display.value += '√(';
    } else if (func === 'log') {
        display.value += 'log10(';
    } else {
        display.value += func + '(';
    }
}

function calculate() {
    let expression = display.value;
    expression = expression.replace(/÷/g, '/');
    expression = expression.replace(/×/g, '*');
    expression = expression.replace(/√/g, 'Math.sqrt');
    expression = expression.replace(/\^/g, '**');
    expression = expression.replace(/sin/g, 'Math.sin');
    expression = expression.replace(/cos/g, 'Math.cos');
    expression = expression.replace(/tan/g, 'Math.tan');
    expression = expression.replace(/log10/g, 'Math.log10'); // Correct log base 10
    expression = expression.replace(/ln/g, 'Math.log'); // Natural log
    expression = expression.replace(/exp/g, 'Math.exp');
    expression = expression.replace(/Ans/g, lastAnswer); // Replace Ans with last answer

    try {
        lastAnswer = eval(expression);
        display.value = lastAnswer;
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            clearDisplay();
        }, 1500);
    }
}

function clearDisplay() {
    display.value = '';
}

function factorial() {
    let number = parseInt(display.value);
    if (number === 0 || number === 1) {
        display.value = 1;
    } else {
        let fact = 1;
        for (let i = 2; i <= number; i++) {
            fact *= i;
        }
        display.value = fact.toString();
    }
}

function percentage() {
    display.value = (parseFloat(display.value) / 100).toString();
}

function backspace() {
    display.value = display.value.slice(0, -1);
}
