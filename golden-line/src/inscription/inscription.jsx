 import { Link } from "react-router-dom";
 import  '../inscription/inscription.css'
 import backgrond from '../assets/background.jpg'
 import {handleRegister} from '../database'
 import { useNavigate } from "react-router-dom";
 function Inscription (){
      const navigate = useNavigate();
 return(
  <> 
     <div>  
<Link to="/" style={{ color: 'black', textDecoration: 'underline' }}>
     Retour à l'accueil
</Link> 
    </div> 
 <hr />
<img src= {backgrond} alt="backgrond" id='background'  />
<div className="container">
        <div className="form-container">
            <form className="form" onSubmit={(e) => handleRegister(e,navigate )} >
                <h1>Inscription</h1>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" placeholder="Nom" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" placeholder="Mot de passe" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirmer le mot de passe</label>
                    <input type="password" id="confirm-password" placeholder="Confirmer le mot de passe" />
                </div>
                <div className="form-group">
                    <label htmlFor="birthdate">Date de naissance</label>
                    <input type="date" id="birthdate" placeholder="Date de naissance" />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Genre</label>
                    <select id="gender">
                        <option value="">Sélectionnez un genre</option>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Adresse</label>
                    <input type="text" id="address" placeholder="Adresse" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">Ville</label>
                    <input type="text" id="city" placeholder="Ville" />
                </div>
                <div className="form-group">
                    <label htmlFor="zipcode">Code postal</label>
                    <input type="text" id="zipcode" placeholder="Code postal" />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Pays</label>
                    <select id="country">
                        <option value="">Sélectionnez un pays</option>
                        <option value="France">France</option>
                        <option value="Belgique">Belgique</option>
                        <option value="Italie">Italie</option>
                        <option value="Espagne">Espagne</option>
                        <option value="Allemagne">Allemagne</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input type="tel" id="phone" placeholder="Téléphone" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Message"></textarea>
                </div>
                <button type="submit" >Inscription</button>
            </form> <hr />
            <div className="form-group">
                <label htmlFor="newsletter">
                    <input type="checkbox" id="newsletter" />
                    Je souhaite recevoir les newsletter
                </label>
            </div>
        </div>   
 </div> 
</>   
 )}
 export default Inscription ;

 
 
 
 