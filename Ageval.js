// let Val = document.getElementById ('Age');
// let AgeMaximum = 120;
// let AgeMinimum = 18;

let Val = document.getElementById ('Age');
let Val1 = document.getElementById ('man');
Val.addEventListener("click", SUBMIT);
function SUBMIT() {
    let inputdisplay = document.getElementById ('display');
    let Age = parseInt(inputdisplay.value);

    if (Age > 18) {
        Val1.innerHTML = "This age meets the voting Criteria.";
}
else  if (Age < 18) {

       Val1.innerHTML = "This age should go through database.";
}
else {
    Val1.innerHTML = "Thie criteria is not met."
}

}
// {
//     alert("The Criteria is not met.");
