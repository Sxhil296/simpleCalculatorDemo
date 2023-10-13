function addToValue(value){
    document.getElementById('display').value += value
}

function clearDisplay() {
    document.getElementById('display').value = ''
}

function calculateResult() {
    const display = document.getElementById('display')
    // display.value = eval(display.value)
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'ERROR'
    }
}

// console.log(eval("3+8"))