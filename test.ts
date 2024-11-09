let input = document.getElementById("testInput") as HTMLInputElement;
let printButton = document.getElementById("printButton") as HTMLButtonElement;
let printValue = document.getElementById("printVal") as HTMLOutputElement;

function onPrintClick()
{
    console.log("Success");
    printValue.value = input.value;
}

printButton.addEventListener("click", onPrintClick);