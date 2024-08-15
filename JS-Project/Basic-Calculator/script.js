//Addition function
function Addition(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    const result = num1 + num2;

    document.getElementById('result').textContent = `Result: ${result}`;
}

//Subtraction function
function Subtraction(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    const result = num1 - num2;

    document.getElementById('result').textContent = `Result: ${result}`;
}

//Multiplication function
function Multiplication(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    const result = num1 * num2;

    document.getElementById('result').textContent = `Result: ${result}`;
}

//Division Function
function Division(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    const result = num1 / num2;

    document.getElementById('result').textContent = `Result: ${result}`;
}




