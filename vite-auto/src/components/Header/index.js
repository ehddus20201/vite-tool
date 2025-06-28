// import { navigate } from "../../router/index";
import { navigate } from "/src/router/index";
import { Link } from '/src/components/Header/Link'

export class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:'open'});

    this.linkList = [
      {to:'/',label:'HOME'},
      {to:'/about',label:'ABOUT'},
      {to:'/contact',label:'CONTACT'},
    ]

    this.render();

    this.links = [...this.shadowRoot.querySelectorAll('header-link')];

    this.aa = this.links.map((link)=> link.shadowRoot.querySelector('a'));
    
    console.log( this.aa );
    
    this.attachEvent();
  }

  handleRouter(e){
    e.preventDefault();
    navigate(e.target.href)
  }

  attachEvent(){
    this.aa.forEach((a)=>{
      a.addEventListener('click',this.handleRouter)
    })
  }

  render() {

    const linkItems = this.linkList
    .map(({to,label})=> `<header-link to="${to}">${label}</header-link>`)
    .join('')

    this.shadowRoot.innerHTML = `
      <style>
        :host{
          width: 100vw;
        }
        header{
          background: orange;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:1rem;
          
          h1{
            margin:0;
          }

          ul{
            list-style:none;
            display:flex;
            gap:1rem;
          }
        }
      </style>
      <header>
        <h1 class="logo">❤️</h1>
        <nav>
          <ul>
            ${linkItems}
          </ul>
        </nav>
      </header>

    `
  }
}