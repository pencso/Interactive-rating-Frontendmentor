const numbers = document.querySelectorAll(".circle");
const button = document.getElementById("submit");
button.addEventListener("click", submit);

for (let i = 0; i < 6; i++) {
    numbers[i].addEventListener("click", function() {
        let pushedButton = i + 1;
        myFunction(i, pushedButton);
    });
    
}

let isSelected;
let selectedNumber;

function myFunction(i, pushedButton) {

    if (!isSelected) {
        numbers[i].classList.add("selected");
        isSelected = true;
        selectedNumber = i;
    } else if (isSelected) {
        numbers[selectedNumber].classList.remove("selected");
        numbers[i].classList.add("selected");

        isSelected = true;
        selectedNumber = i;
    }
    console.log(isSelected)
    
    document.querySelector("span").innerHTML = pushedButton;
    
}

function submit() {
    if (selectedNumber) {
        document.querySelector(".rating-card").style.display = "none";
        document.querySelector(".thankyou-card").style.display = "flex";
        document.getElementById("result").innerHTML = selectedNumber;
    } 
}
