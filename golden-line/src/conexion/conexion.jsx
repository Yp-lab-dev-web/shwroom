import { Link } from "react-router-dom";
import backgroun from '../assets/background.jpg'
import { handleLogin } from "../database2";
import { useNavigate } from "react-router-dom";
import './conexion.css'
function Conexion(){
     const Navigate = useNavigate();
    return( 
 <>
     <Link to="/" style={{ color: 'black', textDecoration: 'underline' }}>
        Retour à l'accueil
      </Link> 
      <img src={backgroun} alt="backgroun" id='background'  />
      <div className="container">
              <div className="form-container">
                  <form className="form" onSubmit={(e) => handleLogin(e,Navigate )} >
                      <h1>conexion</h1>
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
                           <button type="submit" >conexion</button>
                    </div>
                                
                  </form>    
                    
                </div>
     </div>
        
</>
    )

}
   
export default Conexion;

