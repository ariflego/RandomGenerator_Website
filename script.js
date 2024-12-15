let minText = document.getElementById("numRandom1");
let maxText = document.getElementById("numRandom2");
let changeBtn = document.getElementById("changeBtn");
let genBtn = document.getElementById("genBtn");
let display = document.getElementById("displayNum");

function generateRandom(min, max) {
    return result = Math.floor(Math.random() * (max - min + 1) ) + min;
}

genBtn.onclick = function(){
    min = Number(minText.value);
    max = Number(maxText.value);

    display.textContent = generateRandom(min, max);
    console.log(result);
}