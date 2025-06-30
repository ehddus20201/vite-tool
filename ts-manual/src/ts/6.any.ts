// any type

let obj:any;

obj =1;
obj ='asdf';
obj =[123,321];
obj =() => {};
obj.toUpperCase();








let arr:unknown;

arr = 1;
arr = 'hello'


// 타입 좁히기 (narrowing)
// arr.toFixed()

if(typeof arr==='number'){
  arr.toFixed()
}
