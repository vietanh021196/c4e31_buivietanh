let x  = Number(prompt("Nhap a?"))
let y = Number(prompt("Nhap y?"))
let op = prompt("Dau?")

let ketqua = 0;

if (op === "+") {
    ketqua = x + y;
}else if (op === "-") {
    ketqua = x - y;
}else if (op === "*") {
    ketqua = x * y;
}else if (op === "/") {
    ketqua = x / y;
} else {
    console.log("Nhap lai")
} 
console.log(ketqua);
