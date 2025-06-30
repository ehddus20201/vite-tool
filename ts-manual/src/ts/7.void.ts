// void type


function sayHi(message:string):string{
  return 'hello'
}

function printHi():void{  // 어떠한 값도 리턴하지 않으면 void를 써줘야한다 타입스크립트에서는
  console.log('hello');
}



// never type

// 존재하지 않는 / 불가능한 타입 / 어떤 값도 정의 할 수 없는 타입
// 절대 발생하지 않는 값 / 절대 도달할 수없는 코드

function showError(message:string):never{
  throw new Error(message)
}

function loop():never {
  while(true){


  }
}
