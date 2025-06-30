import { getSyntheticTrailingComments } from "../../node_modules/typescript/lib/typescript";

let arr:number[] = [1,2,3,]



// arr[10,'a']


let str:string[]="a,b,c".split(',');


// str = ['123','1233']


// 제네릭 타입 변수 **중요**
let _arr:Array<number> = [1,2,3];
let _str:Array<string> = ['a','b','c'];




// 유니온 타입 + array type
let multi:(string | number | boolean)[] = ['hello',10,true];

multi =['hit',22,4,25,12,5,214,21,4,124,12,44,4214,24];


// 자리를 정하면 안되나
// 빼먹으면 안되는거 아냐?

// typle type
let tupleA:[number,number,number] =[1,2,3];

tupleA = [12,123,51];


let tupleB:[string, number] = ['tiger',30];

tupleB = ['str',123];


// 다차원 배열
const user:[string,number][] = [
  ['심선범',30],
  ['신선범',30],
  ['신속범',30],
]



