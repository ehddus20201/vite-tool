// const input = document.querySelector('#textField') as HTMLInputElement;
const input = document.querySelector<HTMLInputElement>('#textField')!;

//! 쓰면 null은 아니라는 뜻
// <HTMLInputElement> 을 붙이거나 as HTMLInputElement;를 붙여야함
// ! 붙이는 거랑<HTMLInputElement> 붙이는거 합친 버전이 as HTMLInputElement; 이다.




//밑에 처럼 null을 걸러주면 ! 는 안붙이고 <HTMLInputElement>만 붙여도 되고
// 맨 아래처럼 as HTMLInputElement 해주면 암것도 안붙여도 된다 !

if(input){
  input.value
}

if(input){
  (input as HTMLInputElement).value
}

const personA:{
  readonly name:string;
  readonly age:number;
} = {
  name:'tiger',
  age: 30,
}

//person.name = 'asdf' 수정 불가 리드온리기 때문에


const personB = {
  name:'tiger',
  age: 30,
} as const

// personB.name = 'sdf'
