// import { loadStorage, saveStorage } from "./storage";
// import { addTodo, deleteTodo } from "./todo";
// import type { Todo, TodoList } from "./type";
// import S from "/src/style.module.css"

// // /* 

// // 1. todolist 구조를 가진 태그를 만들어 화면에 렌더링 해주세요.
// // 2. css module을 사용해 스타일링을 해주세요.
// // 3. 생성된 DOM 요소를 잡아 submit 이벤트를 바인딩(handleSubmit) 해주세요.
// // 4. input의 value값을 가져와주세요.
// // 5. render 함수를 만들어 아이템을 appendChild를 사용해 렌더링 해주세요.

// // */

// const list = document.querySelector('#renderPlace') as HTMLUListElement
// function createTag(){
//   const tag = `<div class="${S.container}">
//        <form>
//           <label for="todo">할 일 :</label>
//           <input type="text" id="todo" />
//           <button type="submit">추가</button>
//         </form>
//         <hr />
//         <ul id="renderPlace">
        
//       </ul>
//     </div> 
  
//   `
//   return tag;
// }

// function renderTag(target:HTMLElement|null){
//   if(target){
//     target.insertAdjacentHTML('beforeend',createTag())
//   }
// }
// const app:HTMLElement | null = document.querySelector('#app');

// renderTag(app)
// const input = document.querySelector('#todo') as HTMLInputElement;
// const form = document.querySelector('form')
// function handleSubmit(e:SubmitEvent){
//   e.preventDefault();
//   const value = input.value.trim();
//   if(!value) return 
//   addTodo(value)
//   input.value = '';
  
//   render()
// }



// // 마지막 실슴 느낌스
// // 삭제 버튼을 클릭했을 때 데이터 삭제
// // 1. 버튼을 선택합니다
// // 2. 버튼에 클릭 이벤트 바인딩
// // 3. 선택 항목 제거 (filter)
// // 4. 스토리지 저장
// // 5. 리렌더링






// function render(){
//   const todos:TodoList= loadStorage();
//    const list = document.querySelector('#renderPlace') as HTMLUListElement;

// //   const todos:TodoList = [
// //     {id:Date.now(),content:'밥먹기',completed:false},
// //     {id:Date.now(),content:'밥 안먹기',completed:true},
// //     {id:Date.now(),content:'밥 먹지않기',completed:false},

// // ]
//    todos.forEach((todo:Todo)=>{

//     const li = document.createElement('li');
//     li.dataset.id = String(todo.id);
//     li.innerHTML = `
//     <input name="checkbox" type='checkbox' ${todo.completed ? 'checked': ""}/>
//     <span contenteditable>${todo.content}</span>
//     <button type ="button" class="delete">삭제</button>
//     `

//   list.appendChild(li);

  

//   const btn= li.querySelector('button')!;

//   btn.addEventListener('click',() => {
//     const id = todo.id;
//     console.log(todos.filter(todo=> todo.id!==id));
//     saveStorage(todos.filter(todo=> todo.id!==id));
//     render();
//     deleteTodo(id)
    
//   })
//   console.log(btn);
  
//   function handleDelete(){
    
//   }
  
// })


  
  
//   // EventTarget.appendChild(element)
// }
// render();
// form?.addEventListener('submit',handleSubmit)
































































// import type { TodoList } from "./type";
// import S from "/src/style.module.css";



// /* 

// 1. todolist 구조를 가진 태그를 만들어 화면에 렌더링 해주세요.
// 2. css module을 사용해 스타일링을 해주세요.
// 3. 생성된 DOM 요소를 잡아 submit 이벤트를 바인딩(handleSubmit) 해주세요.
// 4. input의 value값을 가져와주세요.
// 5. render 함수를 만들어 아이템을 appendChild를 사용해 렌더링 해주세요.

// */

// const tag = `
//   <div class="${S.container}">
//     <form>
//       <label for="todo">할 일 : </label>
//       <input type="text" id="todo"/>
//       <button type="submit">추가</button>
//     </form>
//     <hr />
//     <ul id="renderPlace">
//       <li>
//         <input name="checkbox" type="checkbox" />
//         <span>${'밥 먹기'}</span>
//         <button type="button" class="delete">삭제</button>
//       </li>
//     </ul>
//   </div>
// `
// document.querySelector('#app')?.insertAdjacentHTML('beforeend',tag);



// const input = document.querySelector('#todo') as HTMLInputElement;
// const list = document.querySelector('#renderPlace') as HTMLUListElement;

// const form = document.querySelector('form');

// function handleSubmit(e:SubmitEvent){
//   e.preventDefault()

//   console.log( input.value );
  
//   render(input.value)
  
// }

// // todos 데이터를 2개 이상 추가해서 리스트 렌더링 바꿔주세요.

// function render(value:string){

//   const todos:TodoList = [ ]
  
//   const li = document.createElement('li');
//   li.dataset.id = String(Date.now());
//   li.innerHTML = `
//     <input name="checkbox" type="checkbox" />
//     <span>${value}</span>
//     <button type="button" class="delete">삭제</button>
//   `

//   list.appendChild(li)
// }


// form?.addEventListener('submit',handleSubmit)




































































// import { loadStorage, saveStorage } from "./storage";
// import { addTodo } from "./todo";
// import type { Todo, TodoList } from "./type";
// import S from "/src/style.module.css";



// /* 

// 1. todolist 구조를 가진 태그를 만들어 화면에 렌더링 해주세요.
// 2. css module을 사용해 스타일링을 해주세요.
// 3. 생성된 DOM 요소를 잡아 submit 이벤트를 바인딩(handleSubmit) 해주세요.
// 4. input의 value값을 가져와주세요.
// 5. render 함수를 만들어 아이템을 appendChild를 사용해 렌더링 해주세요.

// */

// const tag = `
//   <div class="${S.container}">
//     <form>
//       <label for="todo">할 일 : </label>
//       <input type="text" id="todo"/>
//       <button type="submit">추가</button>
//     </form>
//     <hr />
//     <ul id="renderPlace"></ul>
//   </div>
// `
// document.querySelector('#app')?.insertAdjacentHTML('beforeend',tag);

//   // <div class="${S.container}">
//   //   <form>
//   //     <label for="todo">할 일 : </label>
//   //     <input type="text" id="todo"/>
//   //     <button type="submit">추가</button>
//   //   </form>
//   //   <hr />
//   //   <ul id="renderPlace"></ul>
//   // </div>

// const input = document.querySelector('#todo') as HTMLInputElement;
// const list = document.querySelector('#renderPlace') as HTMLUListElement;
// const form = document.querySelector('form');

// function handleSubmit(e:SubmitEvent){
//   e.preventDefault()
//   const value = input.value.trim();
//   if(!value) return;

//   addTodo(value)
//   input.value = '';
//   render()
// }


// // 삭제 버튼을 클릭했을 때 데이터 삭제
// // 1. 버튼을 선택합니다.
// // 2. 버튼에 클릭 이벤트 바인딩
// // 3. 선택 항목 제거 (filter)
// // 4. 스토리지 저장 
// // 5. 리렌더링


// function render(){

//   const todos:TodoList = loadStorage()

//   list.innerHTML = '';
  
//   todos.forEach((todo:Todo)=>{

//     const li = document.createElement('li');
//     li.dataset.id = String(todo.id);
//     li.innerHTML = `
//       <input name="checkbox" type="checkbox" ${ todo.completed ? 'checked' : '' } />
//       <span contenteditable="true">${todo.content}</span>
//       <button type="button" class="delete">삭제</button>
//     `

//     list.appendChild(li)

//     /* after */


//     const btn = li.querySelector('button')!;

//     btn.addEventListener('click',() => {
      
//       console.log( todo.id );
      
      
//     })
    




//   })




// }


// render();

// form?.addEventListener('submit',handleSubmit)
























































































// import { loadStorage, saveStorage } from "./storage";
// import { addTodo, deleteTodo, updateTodo } from "./todo";
// import type { Todo, TodoList } from "./type";
// import S from "/src/style.module.css";



// /* 

// 1. todolist 구조를 가진 태그를 만들어 화면에 렌더링 해주세요.
// 2. css module을 사용해 스타일링을 해주세요.
// 3. 생성된 DOM 요소를 잡아 submit 이벤트를 바인딩(handleSubmit) 해주세요.
// 4. input의 value값을 가져와주세요.
// 5. render 함수를 만들어 아이템을 appendChild를 사용해 렌더링 해주세요.

// */

// const tag = `
//   <div class="${S.container}">
//     <form>
//       <label for="todo">할 일 : </label>
//       <input type="text" id="todo"/>
//       <button type="submit">추가</button>
//     </form>
//     <hr />
//     <ul id="renderPlace"></ul>
//   </div>
// `
// document.querySelector('#app')?.insertAdjacentHTML('beforeend',tag);

//   // <div class="${S.container}">
//   //   <form>
//   //     <label for="todo">할 일 : </label>
//   //     <input type="text" id="todo"/>
//   //     <button type="submit">추가</button>
//   //   </form>
//   //   <hr />
//   //   <ul id="renderPlace"></ul>
//   // </div>

// const input = document.querySelector('#todo') as HTMLInputElement;
// const list = document.querySelector('#renderPlace') as HTMLUListElement;
// const form = document.querySelector('form');

// function handleSubmit(e:SubmitEvent){
//   e.preventDefault()
//   const value = input.value.trim();
//   if(!value) return;

//   addTodo(value)
//   input.value = '';
//   render()
// }


// // 삭제 버튼을 클릭했을 때 데이터 삭제
// // 1. 버튼을 선택합니다.
// // 2. 버튼에 클릭 이벤트 바인딩
// // 3. 선택 항목 제거 (filter)
// // 4. 스토리지 저장 
// // 5. 리렌더링


// function render(){

//   const todos:TodoList = loadStorage()

//   list.innerHTML = '';
  
//   todos.forEach((todo:Todo)=>{

//     const li = document.createElement('li');
//     li.dataset.id = String(todo.id);
//     li.innerHTML = `
//       <input name="checkbox" type="checkbox" ${ todo.completed ? 'checked' : '' } />
//       <span contenteditable="true">${todo.content}</span>
//       <button type="button" class="delete">삭제</button>
//     `

//     list.appendChild(li)

//     /* after */


//     const btn = li.querySelector('button')!;
//     const checkbox = li.querySelector('input[type="checkbox"]')!;
//     const span = li.querySelector('span')!;

//     btn.addEventListener('click',() => {
//       deleteTodo(todo.id)
//       render()
//     })
//     checkbox?.addEventListener('change',()=>{
//       const id = todo.id
//       console.log(checkbox);
//       // 배열을 반환(map) => 기존 데이터 배열 (해당 id 아이템을 찾아서 completed: !completed)
//     })
//     span?.addEventListener('blur',()=>{
//       console.log('change');
//        // span의 글자 가져오기(textContent)
//        // updateTodo()
//        // render()
//       const newContent =span.textContent?.trim() || '';
//       if(newContent && newContent !==todo.content){
//         updateTodo(todo.id,newContent)

//         render()

//       }
//     })
    




//   })


  


//   // document.querySelector('#app')?.addEventListener('click',(e)=>{
//   //   console.log(e.target.closest('li').dataset.id);
    
//   // })

// }


// render();

// form?.addEventListener('submit',handleSubmit)

















import { loadStorage } from "./storage";
import { addTodo, deleteTodo, toggleTodo, updateTodo } from "./todo";
import type { Todo, TodoList } from "./type";
import S from "/src/style.module.css";



/* 

1. todolist 구조를 가진 태그를 만들어 화면에 렌더링 해주세요.
2. css module을 사용해 스타일링을 해주세요.
3. 생성된 DOM 요소를 잡아 submit 이벤트를 바인딩(handleSubmit) 해주세요.
4. input의 value값을 가져와주세요.
5. render 함수를 만들어 아이템을 appendChild를 사용해 렌더링 해주세요.

*/

const tag = `
  <div class="${S.container}">
    <form>
      <label for="todo">할 일 : </label>
      <input type="text" id="todo"/>
      <button type="submit">추가</button>
    </form>
    <hr />
    <ul id="renderPlace"></ul>
  </div>
`
document.querySelector('#app')?.insertAdjacentHTML('beforeend',tag);

  // <div class="${S.container}">
  //   <form>
  //     <label for="todo">할 일 : </label>
  //     <input type="text" id="todo"/>
  //     <button type="submit">추가</button>
  //   </form>
  //   <hr />
  //   <ul id="renderPlace"></ul>
  // </div>

const input = document.querySelector('#todo') as HTMLInputElement;
const list = document.querySelector('#renderPlace') as HTMLUListElement;
const form = document.querySelector('form');

function handleSubmit(e:SubmitEvent){
  e.preventDefault()
  const value = input.value.trim();
  if(!value) return;

  addTodo(value)
  input.value = '';
  render()
}


// 삭제 버튼을 클릭했을 때 데이터 삭제
// 1. 버튼을 선택합니다.
// 2. 버튼에 클릭 이벤트 바인딩
// 3. 선택 항목 제거 (filter)
// 4. 스토리지 저장 
// 5. 리렌더링


function render(){

  const todos:TodoList = loadStorage()

  list.innerHTML = '';
  
  todos.forEach((todo:Todo)=>{

    const li = document.createElement('li');
    li.dataset.id = String(todo.id);
    li.innerHTML = `
      <input name="checkbox" type="checkbox" ${ todo.completed ? 'checked' : '' } />
      <span contenteditable="true">${todo.content}</span>
      <button type="button" class="delete">삭제</button>
    `

    list.appendChild(li)

    /* after */


    const btn = li.querySelector('button')!;
    const checkbox = li.querySelector('input[type="checkbox"]')!;
    const span = li.querySelector('span')!;

    btn.addEventListener('click',() => {
      deleteTodo(todo.id)
      render()
    })
    
    checkbox.addEventListener('change',()=>{
      const id = todo.id;

      // 배열을 반환(map) => 기존 데이터 배열 (해당 id 아이템을 찾아서 completed: !completed)
      
      toggleTodo(todo.id);
      render()
      

    })
    
    span.addEventListener('blur',()=>{
      

      // span의 글자 가져오기 (textContent)
      // 글이 있어야 함 & 기존 글자랑 달라야

      const newContent = span.textContent?.trim() || ''
      if(newContent && newContent !== todo.content){

        updateTodo(todo.id,newContent)
        render()
      }
      

    })

    




  })


  


  // document.querySelector('#app')?.addEventListener('click',(e)=>{
  //   console.log(e.target.closest('li').dataset.id);
    
  // })

}


render();

form?.addEventListener('submit',handleSubmit)

































