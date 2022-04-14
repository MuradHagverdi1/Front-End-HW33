function addItem() {
    let a = document.getElementById("list");
    let candidate = document.getElementById("Inputt");
    let li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    a.appendChild(li);
}


function removeItem() {

    let a = document.getElementById("list");
    let candidate = document.getElementById("Inputt");
    let item = document.getElementById(candidate.value);
    a.removeChild(item);
}