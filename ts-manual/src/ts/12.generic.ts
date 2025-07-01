


// generic type

type User<T,U> = {name:T; age:U};

const user:User<string,number> = {
  name:'tiger',
  age:30,
}



function fn<T>(value:T):T{
  return value;
}


fn(10)
fn('hello')
fn([])
fn({})


/* 

T => Type
U => Util => Unique
K => Key
V => Value
R => return type
E => Element / Error
S => State


*/



const arr:Array<number> = [1,2,3]




function swapAtoB<T,U>(a:T,b:U):(T|U)[]{
  return [b,a];
}


swapAtoB(0,'a');
swapAtoB([],'a')

function getLength<T extends {length:number}>(arr:T):number{
  return arr.length;
}

//1. 숫자의 배열만 받기
//2. 문자열의 배열도 같이 받기
//3. 슬슬 불편함을 느끼고 제네릭 사용
//4. 제네릭이 length 속성이 있는지 확신이 없기 때문에 오류 발생
//5. T를 length 속성이 있다고 확장시켜주기 


getLength([1,2,3]);
getLength(['asdf','fff','f']);
getLength({length:10});


type Response<T> = T extends string ? {type:string;content:string} : {type:string;content:T} ;

const r1:Response<string> = { type:'text', content:'hello'}
const r2:Response<{name:string}> = { type:'json', content:{name:'tiger'}}

// 처음에는 extends 안보고 해보기
// T 가 string 이면 삼항연산식 만들기

function getById<T extends {id:number}>(item:T):number{
  return item.id
}

getById({id:10,title:'아이폰'})
getById({id:20,title:'갤럭시'})
getById({title:'맥북'})