
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 11: Object methods
 * 
 * 
*/ 


var myDog = {
  weight: 5,
  name: 'đần',
  age: 1,
  bark: function(){  // anonymous function (function ko co ten)
    console.log('Gau dau');   // undefind
  }
};

myDog; 
myDog.name;
myDog.bark();


// vi du 
function bark1() {
  console.log('Gau 123');
}
bark1();

// vi du
var myTiger = {
  weight: 10,
  name: 'HUNG DU',
  age: 3,
  bark: function(){  
    console.log('Gau dau, my name is', this.name);  // this: keyword, use trg ngữ cảnh của method, đại diện cho myTiger(Object)
  }
};
myTiger.bark();


// vi du
function bark2() {
  console.log('Gau 123, my name is', this.name); // this.name ko co thuoc tinh = undefind
}
bark2();

//vi du thay doi weight cua myDog
var myDog = {
  weight: 5,
  name: 'đần',
  age: 1,
  bark: function(){
    console.log('Gau dau, my name is', this.name);  
  },
  eat: function(bone) {
    this.weight = this.weight + bone.weight;
    return this;
  }
};
var bone = {
  weight: 0.5
};
console.log('before eat', myDog.weight);
myDog.eat(bone);
console.log('after eat', myDog.weight);


//vi du thay doi tuoi cua nguoi
var nguoiTamGiac = {


};






















//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 12: Comparison operators
 * 
 * 
*/ 















//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 13: 
 * 
 * 
*/ 
























//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**  Lesson 14: 
 * 
 * 
*/ 



























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