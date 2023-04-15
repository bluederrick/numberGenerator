const generatebtn = document.getElementById('btn');
const max = document.getElementById('maxNumber').value;
const min = document.getElementById('minNumber').value;

const minValue = Number(min);
const maxValue = Number(max);
// console.log(min)
// console.log(maxValue)
function generateNumber() {
    if (min > max) {
        min = max + min;
        max = min - max;
        min = min - max;
        minValue = min;
        maxValue = max;
    } else {
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);

        document.getElementById('result').innerHTML = randomNumber
    }
}

generatebtn.addEventListener('click', generateNumber)

// generate random number 



