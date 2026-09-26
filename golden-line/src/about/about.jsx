import { Link } from "react-router-dom";
import  './about.css'
function about(){
 return(
      <>
       <div>  
<Link to="/" style={{ color: 'black', textDecoration: 'underline' }}>
     Retour à l'accueil
</Link> 
    </div> 
   <div className="about-container">
      <div className="about-header">
        <h1>À propos de <span className="highlight">Golden Line</span></h1>
        <p>L'excellence et l'innovation à votre service.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Notre Vision</h2>
          <p>
            Chez Golden Line, nous nous engageons à fournir des solutions de la plus haute qualité. 
            Notre objectif est de transformer vos idées en réalité avec une touche de prestige, de modernité 
            et une interface utilisateur irréprochable.
          </p>
          
          <h2>Notre Mission</h2>
          <p>
            Allier un design élégant à des technologies de pointe pour propulser vos projets vers le succès. 
            Nous mettons un point d'honneur à créer des expériences fluides et mémorables.
          </p>
        </div>
        </div>
      </div>
      <br />
       <hr />
      <footer>
        <p>© 2023 Golden Line tout droit reservé </p>
      </footer>
</>
 )

}
 export default about
