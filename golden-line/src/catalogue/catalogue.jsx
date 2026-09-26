import { Link } from 'react-router-dom';
import bmw from '../assets/BMW M3.png'
import bmwx3 from '../assets/bmwX3.png'
import mercedes from '../assets/mercedesse classe A .jpeg'
import './catalogue.css'

function Catalogue() {
  
  return (
    <>
    <div >
      <Link to="/" style={{ color: 'black', textDecoration: 'underline' }}>
        Retour à l'accueil
      </Link>
    </div> 
    <hr /> 
   <div id="presentation-vehicule"  >
  <ol className="vehicules-list">
    <li className="vehicule-card">
      <div className="vehicule-img-box">
        <img src={bmw } alt="BMW M3 Competition" />
      </div>
      <div className="vehicule-details">
        <h2>BMW M3 Competition</h2>
        <ul className="vehicule-specs">
          <li><strong>Moteur :</strong> 3.0L Bi-Turbo 6 cylindres</li>
          <li><strong>Puissance :</strong> 510 CH</li>
          <li><strong>0 à 100 km/h :</strong> 3.9s</li>
        </ul>
        <div className="vehicule-footer">
          <span className="vehicule-price">105 000 €</span>
          <button className="btn-buy" id="btn-buy" >Acheter</button>
        </div>
      </div>
    </li>

    {/* Véhicule 2 */}
    <li className="vehicule-card">
      <div className="vehicule-img-box">
        <img src={bmwx3} alt="BMW X3 M" />
      </div>
      <div className="vehicule-details">
        <h2>BMW X3 M</h2>
        <ul className="vehicule-specs">
          <li><strong>Moteur :</strong> 3.0L TwinPower Turbo</li>
          <li><strong>Puissance :</strong> 480 CH</li>
          <li><strong>Transmission :</strong> xDrive Intégrale</li>
        </ul>
        <div className="vehicule-footer">
          <span className="vehicule-price">98 000 €</span>
          <button className="btn-buy" id='btn-buy'>Acheter</button>
        </div>
      </div>
    </li>
    <li className="vehicule-card">
      <div className="vehicule-img-box">
        <img src={mercedes} alt="Mercedes S-Class" />
      </div>
      <div className="vehicule-details">
        <h2>Mercedes S-Class</h2>
        <ul className="vehicule-specs">
          <li><strong>Moteur :</strong> 3.0L TwinPower Turbo</li>
          <li><strong>Puissance :</strong> 480 CH</li>
          <li><strong>Transmission :</strong> xDrive Intégrale</li>
        </ul>
        <div className="vehicule-footer">
          <span className="vehicule-price">98 000 €</span>
          <button className="btn-buy" id='btn-buy'>Acheter</button>
        </div>
      </div>
    </li>
  </ol>
</div>
     </>
   
  )
};



export default Catalogue;