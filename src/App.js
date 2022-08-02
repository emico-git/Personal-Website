import './App.css';
import image from './images/logo.png'

export default function App() {
  return (
    <div className='App'>
      <div className='nav-header'>
        <img className='logo' src={image} height={150} width={150}/>
        <ul >
          <div className='nav-links'>
            <li><p>Über mich</p></li>
            <li><p>Schulische Laufbahn</p></li>
            <li><p>Kenntnisse & Fähigkeiten</p></li>
            <li><p>Kontakt</p></li>
          </div>
        </ul>
      </div>
      <div className='uebermich'>
        <div className='titel'>
          <p>Übermich</p>
        </div>
      </div>
      <div className='schulischeLaufbahn'>
        <div className='titel'>
          <p>Schulische Laufbahn</p>
        </div>
      </div>
      <div className='kf'>
        <div className='titel'>
          <p>Kenntnisse & Fähigkeiten</p>
        </div>
      </div>
      <div className='kontakt'>
        <div className='titel'>
          <p>Kontakt</p>
        </div>
      </div>
    </div>
  );
}