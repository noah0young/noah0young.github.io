var input = document.getElementById("testInput");
var printButton = document.getElementById("printButton");
var printValue = document.getElementById("printVal");
function onPrintClick() {
    console.log("Success");
    printValue.value = input.value;
}
printButton.addEventListener("click", onPrintClick);
