import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
export const Database = [];
export function handleRegister(e, navigate) {
    e.preventDefault();
    const newUSer ={
        name:document.getElementById('name').value ,
        email:document.getElementById('email').value ,
        password:document.getElementById('password').value, 
        confirmPassword: document.getElementById('confirm-password').value,
        date:document.getElementById('birthdate').value ,
     }
    Database.push(newUSer)
    console.log("nouvelle utulisateur : " ,  newUSer) ;
    console.log("contenue actuelle de la database : " , Database) ; 
     e.target.reset();
     if (navigate) {
        NProgress.start();
      setTimeout(() => {
            NProgress.done(); 
            navigate('/');    
        }, 800);
     }  
  }

  
    
   
      
    
