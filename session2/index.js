// console.log("Buổi 2");

//  for (let i = 1; i < 101; i += 1) {
//     console.log(i);
// }
// for (let i = 0; i < 101; i += 2) {
//     console.log(i);
// }
// for (let i = 100; i > 0 ; i--) {
//     console.log(i);
// }
// // i += 2
// // i = i + 2
// let len = 0;
// for (let i = 0; i < 300; i+= 5) {
//   fd(i)
//   rt(90)
//   len += 5;
// }
// clear()


// let num = prompt ("Enter x");
// let tong = 0;
//  for (let i = 1; i <= num; i++){
//    tong = tong + i;
// }
// console.log(tong)

//Conditional / branch

// let age = prompt("Enter your age: ")
// if (age < 10) {
//     console.log("Baby");
// }
// else if (age < 18) {
//     console.log("Teenager");
// }
// else if (age < 25) {
//     console.log("Tre trau");
// }
// else {
//     console.log("Audi");
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// let n = Math.floor(Math.random()*100+1);
// console.log(n);
// if(n < 30) {
//     console.log("Sunny");
// }else if(n<70) {
//     console.log("Rainy");
// }else{
//     console.log("Cloudy");
// }

//Caculater

// let a = prompt ("Enter a: ");
// let b = prompt ("Enter b: ");
// let c = prompt ("Enter c: ");
// let delta = (b*b) - (4*a*c);
// if(delta > 0){
//    console.log( "x1 =", ((-b)- delta**0.5)/(2*a));
//    console.log( "x2 =", ((-b)+ delta**0.5)/(2*a));
// }else if (delta === 0){
//     console.log( "x =", (-b)/(2*a));
// }
// else  {
//     console.log("Vo nghiem")
// }

// vẽ nét đứt xnah đỏ
// clear()
// penwidth(5)
// rt(90)
// for(let i = 0; i < 20; i++){
  
// color("red")
// fd(10)
// penup()
// fd(10)
// pendown()
// color("green")
// fd(10)
// penup()
// fd(10)
// pendown()
// }
//cách 2
// for (let i = 0; i< 10; i++){
// if (i% 2 ===0){
//color("red");
//}else {
//    Color("blue");
//    }
//fd(10);
// penup();
//fd(10);
//pendown(); 
//}


// let name = prompt("Enter Username: ")
// if(name === "c4e"){
//     let password = prompt("Enter pasword: ")
//     if(password === "mindx"){
//         console.log("welcome")
//     }else{
//         console.log("nhap sai password")
//     }
    
// }else {
//     console.log("wrong ");
// }