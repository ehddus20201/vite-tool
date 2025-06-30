// alias : 별칭


// type, interface   타입은 = 하고 중괄호 오는데 인터페이스는 그냥 바로 중괄호가 옴

type User1 = {  // 무조건 첫번째를 대문자로 써야함
  id:number;
  name:string;
  auth:string;
  isPaid:boolean;
}
// type User1 = {  
//   address:string;
// }


type User2 = User1 & {address:string}; // User1에 하나만 추가할때 사용 & 로


const user1:User1 = {
  id:1,
  name:'tiger',
  auth:'admin',
  isPaid:true,
}

const user2:User1 & {address:string} ={
  id:2,
  name:'beao',
  auth:'user',
  isPaid:false,
  address:"울산시"
}

type Fn = (a:string) => void;
interface _Fn{
  (a:string):void
}

interface User3{
    id: number;
    name: string;
    auth: string;
    isPaid: boolean;
}

// interface User3{
//   address:string
// }
// 인터페이스는 User3 를 다시 선언해줘도 병합해준다
// const user3:User3 & {address:string} 


interface User4 extends User3{
  address:string
}


const user3:User4={
  id:3,
  name:'beao2',
  auth:'user',
  isPaid:true,
  address:'울산광역시'
}

// 객체의 키가 동적으로 결정될 때 유용하게 사용할 수 있는 

// index signature //

type Person ={
  name:string;
  age:number;
  email:string;
  [key:string]:string | number
}



const person:Person = {
  name:'tiger',
  age: 30,
  email:'tiger@gmail.com',
  gener: 'male',
  phone:12312,
}