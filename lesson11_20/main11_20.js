
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
 *     > , < , >= , <= , !== === ,(==, !=)   
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
var employees = [
  {name: 'Thinh', age: 3},
  {name: 'Kien', age: 32},
  {name: 'Long', age: 11},
];
for (var employee of employees) {  // employee dai dien tung phan tu trong employees
  console.log(employee.name, employee.age);
}


// vi du 
// var content = '';
// for (var employee of employees) {
//   content += '<li>' + employee.name + '</li>';
// };
// document.getElementById('contact-list').innerHTML = content; // xu ly gan values vao HTML, voi tag co id = contact-list

console.log('===================')

///////   for ... in
// vidu
var myDog = {
  weight: 5,
  name: 'đần',
  age: 1,
};

for (var key in myDog) {
  console.log(key, myDog[key]); // myDog.name = myDog[key]
}





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