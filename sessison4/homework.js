// - Function giúp cho chương trình trở nên dễ nhìn, dễ hiểu bằng tách các khối lệnh như input, output và logic thành các đoạn riêng biệt.

//  - Các hàm được xác định bằng từ khóa hàm
//  - chúng ta khai báo hàm để sử dụng chức năng

//   - để sử dụng nó chúng ta thực hiện gọi hàm và truyền tham số
//   - Không bắt buộc phải sử dụng return vì không phải tất cả các function đều phải có giá trị trả về

//   - Tham số: là biến trong khai báo hàm.
//   - Đối số: là giá trị thực của biến này được truyền cho hàm

     // Ex 1:
    //  function hello(){
    //      let a ="Hello world";
    //      console.log(a);
    //      console.log(a);
    //      console.log(a);
    //  }
   

    // Ex 2:
    // function sum(a, b){
    //    let result= a+b;
    //    console.log(result);
    // }
    // sum(1, 2);

    // Ex 3:
    // function draw_square(length, a){
    //     color(a);
    //   for(let i=0; i<4 ;i++){
    //   fd(length)
    //   rt(90)
    //      }
    //   }
    //   draw_square(100, "red")

    // Ex 4:
    // function draw_square(length, a){
    //   color(colors);
    //  for(let i=0; i<4 ;i++){
    //  fd(length)
    //  rt(90)
    //    }
    //  };

    //  for (let i = 0; i  < 30; i ++){
    //   draw_square(i * 5, 'red')
    //   lt(17)
    //   penup()
    //   fd(i * 2)
    //   pendown()
    // }



    // Ex 5:
    // function draw_star(length){
    //     rt(14)
    //     for(let i=0; i<5; i++){
    //       fd(length);
    //       rt(144);
    //     }
    //     }
    //     draw_star(150);

    // Ex 6:
    // function remove_dollar_sign = (s) =>     {
    //   let newS = s.replace(/a[$]/b, '');
    // }
    // remove_dollar_sign("viet$anh$$");
    
    // Ex 7:
    // function remove_dollar_sign(s){
    //      let newS = s.replace(/a[$]/b, '')
    //    }
    //     string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
    //   if (string_with_no_dollars == "80% percent of life is to show up"){
    //      console.log("Your function is correct")}
    //   else{
    //      console.log("Oops, there's a bug")}

    

    // Ex 8:
    // function get_even_list(l){
    //   let newList=[];
    //   for(let i=0; i<l.length; i++){
    //    if(l[i]%2==0){
    //       newList.push(l[i]);
    //    }
    //   }
    //   return newList;
    // }
    // get_even_list([1, 4, 5, -1, 10]);
    

    // Ex 9
    // function get_even_list(l){
    //      let newList=[];
    //      for(let i=0; i<l.length; i++){
    //       if(l[i]%2==0){
    //          newList.push(l[i]);
    //       }
    //      }
    //      return newList;
    //    }

    //   even_list = get_even_list([1, 2, 5, 9, -10, 6])
    //   console.log(even_list)
      
    //   if (even_list = [2, -10, 6]){
    //       console.log("Your function is correct");
    //     }
    //   else {
    //        console.log("Ooops, bugs detected");
    //      };

    // Ex 10:
    // function is_inside([x, y], [x1, y1, width, height]){
    //   let A=[x, y];
    //   if(x>=x1 && x<= x1+width ){
    //     if(y>y1 && y<= y1+height){
    //       console.log("true");
    //     }
    //     else{
    //      return false;
    //     }
    //   }
    //   else{
    //     return false;
    //   }
    // }
    // is_inside([100, 120], [140, 60, 100, 200]);

 //Ex 11:
//         let is_inside =([x,y],[x1,y1,width,height]) =>{
//     if(x>=x1 && x<= x1+width){
//       if(y>=y1 && y<=y1+height){
//         return true
//       }
//       else{ return false}
//     }
//     else{ return false}
//   }
  
//   let test = is_inside([200, 120], [140, 60, 100, 200])
//   if( test === true){
//       console.log("Your function is correct")
//   }
//   else{
//       console.log("Ooops, bugs detected")
//   }