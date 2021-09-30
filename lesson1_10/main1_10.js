////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 3: Biến (Variable)
 * 
 * 
*/  

// var a = 1;
// var b = 4;
// console.log(a+b);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 4: Kiểu dữ liệu
 * 
 * 
*/ 

// var fullName = 'duong trung hieu'; // dau '' use nhieu hon ""
// var age = 10;
// var isMale = true;
// var str3 = 'hello, i\'m kien.';  // escape a character (them dau \ )

// truong hop dac biet


// var a;  //undefind

// a = null; //null (phan biet null khac undefind)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 5: Object
 * 
 * 
*/ 

// khai bao Object
// var a = {
//     key: value
// };

// dat ten bien(camelCase), vi du: myDog, sumMyFriend

// var myMeo = {
//   name: 'trang',
//   gender: 'male',
//   tuoi: 12
// };

// var myDog = {
//   meo: 'trang',
//   cho: 'den',
//   tuoi: 12
// };

// //
// console.log(myMeo);
// console.log(myMeo.name);
// // thay doi gia tri (2 cach tuong tu nhau)
// ///cach1
// myMeo.tuoi = 30;
// console.log(myMeo);
// ///cach2
// myMeo['tuoi'] = 40
// console.log(myMeo);




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 6: Mảng (Array)
 * 
 * 
*/ 

var cho1 = {
  name: 'cho1',
  tuoi: 10
};
var cho2 = {
  name: 'cho2',
  tuoi: 11
};
var cho3 = {
  name: 'cho3',
  tuoi: 12
};

// khai bao Array
var array_cho = [cho1, cho2, cho3];

console.log(array_cho);
console.log(array_cho[2].name);

// thay doi gia tri
var cho4 = {
  name: 'cho4'
};
array_cho[0] = cho4;
console.log(array_cho);

// bai tap 1: Tinh s, p cua HCN

var width = 10;
var height = 20;
var s = width * height;
var p = (width + height) * 2;


// bai tap 3: Tinh s, p cua hinh tron
var r = 4;
var p = 2 * 3.14 * r;
var s = 3.14 * r*r;






//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 7 & 8: Arithmetic Operators 
 * 
 * 
*/ 

// ++ -- (increment decrement)
// * / %
// + - 


var a = 5;
console.log(a++); // tăng +1, Result: values a = trc khi đổi (=5)
console.log(++a); // tăng +1, Result: values đã thay đổi (=6)
// tuogn tu a-- & --a


//vi du
a++ + ++a ;
//5 + ++a   =>  a= 6
//5 + 7     =>  a= 7
//12


a++ + ++a - --a + a--;
// 5   + ++a - --a + a--;   => a=6 
// 5   +  7  - --a + a--;   => a=7
//    12     -  6  +  6     => a=5
// 12





//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 9: Assignment operators
 * 
 * 
*/ 

// = , +=, -=, *=, /=


















//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 9: 
 * 
 * 
*/ 























//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 10: 
 * 
 * 
*/ 

