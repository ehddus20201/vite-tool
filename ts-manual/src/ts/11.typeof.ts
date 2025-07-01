


const user = {
  name:'tiger',
  age:30,
  gender:'male',
  address:'남양주시',
}

//typeof 'a' // 'string'

//TS
type User = typeof user;   

//JS
if(typeof user === 'string'){
  
}  



type UserKey = keyof User
// keyof 는 키를 뽑아서 전달함

const settings = {
  theme:'dark',
  fontSize:16,
  language:'ko'
}

type SettingsKey = keyof typeof settings
// 타입만 뽑은거의 키를 뽑음



// typeof 뒤에는 무조건 자바스크립트 객체가 와야한다
// keyof  뒤에는 타입스크립트의 타입이 와야함