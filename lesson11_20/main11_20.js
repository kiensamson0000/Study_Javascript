
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 11: Object methods
 * 
 * 
*/ 


// var myDog = {
//   weight: 5,
//   name: 'đần',
//   age: 1,
//   bark: function(){  // anonymous function (function ko co ten)
//     console.log('Gau dau');   // undefind
//   }
// };

// myDog; 
// myDog.name;
// myDog.bark();

// // vi du 
// function bark1() {
//   console.log('Gau 123');
// }
// bark1();

// // vi du
// var myTiger = {
//   weight: 10,
//   name: 'HUNG DU',
//   age: 3,
//   bark: function(){  
//     console.log('Gau dau, my name is', this.name);  // this: keyword, use trg ngữ cảnh của method, đại diện cho myTiger(Object)
//   }
// };
// myTiger.bark();


// // vi du
// function bark2() {
//   console.log('Gau 123, my name is', this.name); // this.name ko co thuoc tinh = undefind
// }
// bark2();

// //vi du thay doi weight cua myDog
// var myDog = {
//   weight: 5,
//   name: 'đần',
//   age: 1,
//   bark: function(){
//     console.log('Gau dau, my name is', this.name);  
//   },
//   eat: function(bone) {
//     this.weight = this.weight + bone.weight;
//     return this;
//   }
// };
// var bone = {
//   weight: 0.5
// };
// console.log('before eat', myDog.weight);
// myDog.eat(bone);
// console.log('after eat', myDog.weight);


/**
 * Khai báo biến rectangle là 1 object gồm có các property:
 * - width: chiều rộng
 * - height: chiều dài
 * - getWidth: trả về chiều rộng
 * - getHeight: trả về chiều dài
 * - getArea: trả về diện tích
 */
 
//  var rectangle = {
//    width: 2,
//    height: 3,
//    getWidth: function(){
//      return this.width;
//    },
//    getHeight: function(){
//      return this.height
//    },
//    getArea: function(){
//      return this.width * this.height
//    },
// };





//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 12: Comparison operators
 *    (cac phep tinh so sanh)
 *     > , < , >= , <= , !== , === ,(==, !=)   
*/ 

// vi du
// var a = 5 >= 5;
// console.log(a);

// console.log('a' === 'a');

// // 
// var a = [1, 2];
// var b = [1, 2];
// console.log(a === b); //Result: False, because: a khong = b vi a, b la 2 array nen luu tru 2 vung bo nho khac nhau.

// //
// var a = {
//   foo: 'bar'
// };
// var b = {
//   foo: 'bar'
// };
// console.log(a === b); //Result: False, because: a,b la 2 objcet nen luu tru 2 vung bo nho khac nhau

// //
// var a = '1000';
// var b = '200';
// console.log(a > b); //Result: False, because: so sanh string, so sanh cac ki tu, lan luot dau --> cuoi







//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 13: Vòng lặp for (For loop)
 * 
 * 
*/ 


// vi du
// hien thi man hinh tu 0 --> 9
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// vidu
//hien thi thogn tin nhan vien
// var employees = [
//   {name: 'Thinh', age: 3},
//   {name: 'Kien', age: 32},
//   {name: 'Long', age: 11},
// ];

// for (var i = 0; i < employees.length; i++) {
//   console.log(employees[i]);
//   console.log(employees[i].name, employees[i].age); // in ten
// }





//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 14: for ... of, for ... in
 * 
 * 
*/ 


///////   for ... of
// vidu
//hien thi thogn tin nhan vien
// var employees = [
//   {name: 'Thinh', age: 3},
//   {name: 'Kien', age: 32},
//   {name: 'Long', age: 11},
// ];
// for (var employee of employees) {  // employee dai dien tung phan tu trong employees
//   console.log(employee.name, employee.age);
// }


// vi du 
// var content = '';
// for (var employee of employees) {
//   content += '<li>' + employee.name + '</li>';
// };
// document.getElementById('contact-list').innerHTML = content; // xu ly gan values vao HTML, voi tag co id = contact-list

// console.log('===================')

// ///////   for ... in
// // vidu
// var myDog = {
//   weight: 5,
//   name: 'đần',
//   age: 1,
// };

// for (var key in myDog) {
//   console.log(key, myDog[key]); // myDog.name = myDog[key]
// }


///////    baitap
// bt1

/**
* Dùng vòng lặp for kiểm tra số nguyên tố.
* @param {number} x Số cần kiểm tra
* @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
*/
// console.log("==========================")
// function isPrimeNumber(x) {
//   var dem = 0;
//   for (var i =1; i<=x; i++) {
//       if (x % i === 0) {
//           dem ++;
//       }
//   }
//   if (dem == 2) {
//       return true;
//   }
//   else {
//       return false;
//   }
// }
// console.log(isPrimeNumber(7));


// bt2
/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */

console.log("=============bt2=============")
function fromCharCode() {
  var content = "";
  for (var i = 97; i<=122; i++) {
    content += String.fromCharCode(i);
  }
  return content; // chu y yeu cau bt, khi nao return khi nao console.log
}
console.log(fromCharCode());


// bt3
/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */
var array = [1,2,3];
function sum(array) {
  var sum = 0;
  for(var i=0 ; i<array.length;i++ ){
    sum += array[i];
  }
  return sum;
}
console.log(sum(array));

//bt4
// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */
console.log("===========bt4==========");
function sumMultiplyArray(a, b) {
  var sum = 0;
  for (var i =0;i<a.length;i++){
    for (var j=0;j<b.length;j++){
      sum += (a[i] *b[j]);
    }
  }
  return sum;
}
var a = [1, 2, 3];
var b = [10, 20];
console.log(sumMultiplyArray(a,b));

//bt5
/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
 function calculate(start, end) {
  // viết code ở đây.
}





//bt6
/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

*/
function has(array, value) {
  // viết code ở đây
}


//bt7
//Tính giai thừa của một số nguyên







//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 15: 
 * 
 * 
*/ 

































//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 11: 
 * 
 * 
*/ 

































//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 11: 
 * 
 * 
*/ 