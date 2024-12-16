const minText = document.getElementById("numRandom1");
const maxText = document.getElementById("numRandom2");
const changeBtn = document.getElementById("changeBtn");
const genBtn = document.getElementById("genBtn");
const display = document.getElementById("displayNum");

function generateRandom(min, max) {
    return result = Math.floor(Math.random() * (max - min + 1) ) + min;
}

genBtn.onclick = function(){
    min = Number(minText.value);
    max = Number(maxText.value);

    display.textContent = generateRandom(min, max);
    console.log(result);
}