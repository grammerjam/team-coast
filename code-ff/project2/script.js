

function getValue() {
    let textInput = document.getElementById("grid-first-name");
    let textValue= textInput.value;

    let result = document.getElementById("show");
    result.innerText=textValue;
}