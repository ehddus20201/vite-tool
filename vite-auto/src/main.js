import { Header } from "./components/Header"
import { router } from "/src/router"
import '/src/style.css'




function defineElements(){
  customElements.define('c-header', Header)
}








defineElements();

window.addEventListener('DOMContentLoaded',router)