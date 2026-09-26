import '../acceille/acceille.css';
import baniere from '../assets/baniere.mp4'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'; 
function App() {
return (
<>
<img src= {logo} alt="logo" id='logo'  /> 

  <div>
 <nav className='navigation' > 
  <Link to="/catalogue" >
   catalogue
</Link>
 <Link to="/inscription" >
   inscription
</Link>
 <Link to="/conexion" >
   conexion
  </Link>
   <Link to="/about" >
    à propos
  </Link>
<hr />
</nav>
</div>
 <div id='container-presentation'>
       <video  id="video" autoPlay loop muted playsInline>
      <source src={baniere} type="video/mp4" />
    </video> 
    <hr />
</div>
<footer className="footer-container">
  <div className="footer-column contact-info">
    <h3>Nos réseaux sont à votre disposition :</h3>
    <ul>
      <li>📞 +33(0)6 01 02 03 04</li>
      <li>📧 contact@goldenline.fr</li>
      <li>📍 abu-dhabi, UAE</li>
      <li>✖️ Twitter : @goldenline_fr</li>
    </ul>
  </div>
  <div className="footer-separator"></div>
  <div className="footer-column extra-info">
    <h3>Nos Horaires / Liens utiles</h3>
    <ul>
      <li>Lun - Ven : 9h00 - 18h00</li>
      <li>Mentions légales</li>
      <li>Politique de confidentialité</li>
    </ul>
  </div>
</footer>
<footer id='fotter2'>
  @2026 Golden Line ©All rights reserved
</footer>
</>
) };
export default App;
 
