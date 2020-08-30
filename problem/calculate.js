// function calculate
function calculateVat(total) {
    const vat = 1.07
    return total * vat;
}

console.log(calculateVat(5))

let paid = 5000;
let saraly = 10000;

function percent(){
    return (paid/saraly)*100;
}

console.log(percent())
