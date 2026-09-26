import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
export const Database2 = [];

export function handleLogin(e,Navigate) {
  
    e.preventDefault();
    const newUSer ={
        name:document.getElementById('name').value ,
        email:document.getElementById('email').value ,
        password:document.getElementById('password').value, 
     }
    Database2.push(newUSer)
    console.log("nouvelle utulisateur : " ,  newUSer) ;
    console.log("contenue actuelle de la database : " , Database2) ; 
     e.target.reset();
     if (Navigate) {
        NProgress.start();
      setTimeout(() => {
            NProgress.done(); 
            Navigate('/');    
        }, 800);
     }  
   }