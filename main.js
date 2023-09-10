let displayBox = document.querySelector("p");

function showDisplay (event) {
    const x = event.target.innerText
    if (displayBox.innerHTML == 0) {
        return displayBox.innerHTML = x;
    }
    return displayBox.innerHTML += x;
};

function calculate () {
    let result = displayBox.innerText;
    displayBox.innerText = eval(result);
};

 function allClear () {
    displayBox.innerText = 0;
 };

 function clear () {
   let text = displayBox.innerText;
   if (text.length === 1 ) {
    displayBox.innerText = 0;
   }else {
    displayBox.innerText = text.substring(0, text.length - 1);
   }
 };

document.querySelector("#clac").addEventListener("click", calculate);
document.querySelector("#ac").addEventListener("click", allClear);
document.querySelector("#c").addEventListener("click", clear);
let list = document.querySelectorAll(".button");
list.forEach( item => {
    item.addEventListener("click", showDisplay)
});