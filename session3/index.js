// let food1 = "com";
// let food2 = "thit";
// let food2 = "ca";
// let food2 = "ghe";
// let food2 = "rau";

//array (mảng)
//  let foods = ["com", "thit", "ca", "ghe", "rau" , "tom"];
//  console.log(foods);

//index (chỉ số)

// console.log(foods[1]);
// console.log(foods[5]); ko nên để gtri ngoai mảng (undefine)

// if (!foods[3]) {
//     console.log("hihi");
// }

//Read

//1.1 read one
//console.log(foods[3]);
//1.2 Read many
// console.log(foods.length);

// for (let i = 0; i < foods.length; i++ ){      // i = index
// let oneFood = foods[i];
// console.log(`${i + 1}. ${oneFood}`); //backticks
// } 

// 2.CREAT 

// let newFood = prompt("Enter new food"); //them vao tu ban phim
// foods.push(newFood);
// console.log(foods);


//3. Update

 //let foods = ["com", "thit", "ca", "dau", "tom", "rau"];
//  console.log(foods);
//  foods[0] = "chao";
//  console.log(foods);

//4.Delete

// let foods = ["com", "thit", "ca", "dau", "tom", "rau"];
// foods.splice(1, 4);
// console.log(foods);

// let food = ["com", "thit", "ca", "dau", "tom", "rau"];
// let a = prompt("có muốn update ko? Y/N");

// if (a === "Y") {   
//     let b = prompt("vị trí?");
//     let c = prompt("giá trị?");
//     food[b -1] = c;
//     console.log(food);
// }

// let food = ["com", "thit", "ca", "dau", "tom", "rau"];
// console.log(food);
// let a = prompt("bạn có muốn delete ko? Y/N");
// if (a === "Y") {   
//         let b = prompt("vị trí?");
//         food.splice(b,1);
//         console.log(food);
//      }
//cách 2
// let food = ["com", "thit", "ca", "dau", "tom", "rau"];
// for (let i = 0; i < food.length; i++ ){  
//     console.log(`${i+1}. ${food[i]}`);
//         } 
// let a = prompt("bạn có muốn delete ko? Y/N");
// if (a === "Y") {   
//         let b = prompt("vị trí?");
//         food.splice(b-1,1);
//         console.log(food);
//      }

//A.
//let numbers = [1, 2, 3, 4, 5];
//cách 1
// for (let index = 0; index < numbers.length; index++) {
//     let number = numbers[index];
//     console.log(`Món ăn số ${number}`)
    
// }
//cách 2
 //numbers.map((number, i) => console.log(`${i+1}.Món ăn số ${number}`) );


