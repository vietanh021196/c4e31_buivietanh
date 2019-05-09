//1. Có thể kiểm tra variable's type bằng cách sử dụng typeof

//  Đặt name variable có một số quy tắc:
//     Tên biến phải bắt đầu bằng bằng chữ hoặc kí tự gạch dưới _.
//     Tên biến không được bắt đầu bằng số và không chứa các kí tự đặc biệt như @; &; *; , .
//     Tên biến không được trùng với từ khóa như var, for, if...
//  Nếu đặt name sai sẽ hiện lỗi SyntaxError:
//  VD:    let 12 = "vietanh";
//         let 123@anh= "anh";
//         let var = "viet";
// 2.  
//  let circleRadius = prompt("Radius?");
// console.log("Area=", circleRadius*circleRadius*3.14)
// 3.
//  let celsius = prompt("Enter the temperature in Celsius");
// console.log(celsius,"(C)=", celsius*1.8+32,"(F)");

//  A square 
//     for (var i=1; i <= 4; i++) {
//         fd(100);
//         rt(90)
//     }
//   An equilateral triangle 
//     rt(30)
//     fd(200)
//     rt(120)
//     fd(200)
//     rt(120)
//     fd(200)
//  A circle
//     for(let i=0;i<=360;i++){
//      fd(3)
//      lt(1)
//      }

//  Multi-circles
//   rt(90)
//   for( let j=0; j<6; j++){
//     rt(60)
//     for( let i=0; i<360; i++){
//       fd(1)
//       lt(1)
//     }
//   }
  
//   Or even better
//     rt(90)
//     for( let j=0; j<50; j++){
//       rt(64)
//       for( let i=0; i<360; i++){
//         fd(2)
//         lt(1)
//       }
//     }