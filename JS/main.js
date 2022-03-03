const display = (val) => {
     document.getElementById("textval").value += val;
}

const returnEqual = () => {
    let x = document.getElementById("textval").value;
    let y = eval(x);
    document.getElementById("textval").value = y;
}


const clearData = () => {
    document.getElementById("textval").value = "";
}