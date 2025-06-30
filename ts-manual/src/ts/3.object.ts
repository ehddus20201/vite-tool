const user:{
  name:string;
  age:number;
  id?:number; // optional property id  값은 넣어도 그만 안넣어도 그만 ? 를 붙임
} = {
  name:'tiger',
  age:30,
}


user.id =123;
// user.address = '울산시'



const config:{
  readonly apiKey:string; // readonly 읽기 전용 속성으로 다시 할당하는거는 불가능
} = {
  apiKey :'asdfasdfasdfa12'
}

// config.apiKey = 'as'