import '@/style.css';
import { getNode, insertLast } from "kind-tiger";
import logo from '@/assets/js.svg';
import logo_8b from '@/assets/8b.jpg';
import classes from '@/style.module.css';

console.log(classes.figure);


console.log(logo);

const app = getNode('#app');



const template = `
  <figure class='figure'>
    <img src="${logo}" alt="">
    <figcaption>자바스크립트 로고</figcaption>
  </figure>
  <figure class = "${classes.figure}">
    <img width=100px src="${logo_8b}" alt="">
    <figcaption>8b studio 로고</figcaption>
  </figure>
`

insertLast(app,template);


