addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


let result = 0;
const logEntries = [];

function helloWorld() {
    const userInput = document.getElementById('input-number');
    alert(userInput.value * 2);
    console.log('The addition button was pressed!');
}

function getEnteredNumber() {
    return parseInt(document.getElementById('input-number').value);
}

function log(operationIdentifier, previousResult, enteredNumber, operationResult) {
    const logEntry = createLogObject(operationIdentifier, previousResult, enteredNumber, operationResult);
    logEntries.push(logEntry);
    console.log(logEntry);
    outputResult(result, logEntry.description);
}

function createLogObject(operationIdentifier, previousResult, enteredNumber, operationResult) {
    const description = `${previousResult} ${operationIdentifier} ${enteredNumber} = ${operationResult}`;
    return {
        operationIdentifier: operationIdentifier,
        previousResult: previousResult,
        enteredNumber: enteredNumber,
        result: result,
        description: description
    };
}

function add() {
    const operator = '+';
    const enteredNumber = getEnteredNumber();
    const previousResult = result;
    result += enteredNumber;
    log(operator, previousResult, enteredNumber, result);
}

function subtract() {
    const operator = '-';
    const enteredNumber = getEnteredNumber();
    const previousResult = result;
    result -= enteredNumber;
    log(operator, previousResult, enteredNumber, result);
}

function multiply() {
    const operator = '*';
    const enteredNumber = getEnteredNumber();
    const previousResult = result;
    result *= enteredNumber;
    log(operator, previousResult, enteredNumber, result);
}

function divide() {
    const operator = '/';
    const enteredNumber = getEnteredNumber();
    const previousResult = result;
    result /= enteredNumber;
    log(operator, previousResult, enteredNumber, result);
}
