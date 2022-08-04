import './App.css';
import image from './images/logo.png'

export default function App() {
  return (
    <div className='App'>
      <div className='nav-header'>
        <div className='logo'>
          <img className='logo-image' src={image} height={150} width={150}/>
            <div className='logo-name'>
              <div className='slide-border'>
                <div className=' slide-in-right1'>Emil</div>
              </div>
              <div className='slide-border'>
                <div className='slide-in-right2'>Collins</div>
              </div>
            </div>
        </div>
        <ul >
          <div className='nav-links'>
            <li><div className='slide-border'><p className='slide-in-up1'>Über mich</p></div></li>
            <li><div className='slide-border'><p className='slide-in-up2'>Schulische Laufbahn</p></div></li>
            <li><div className='slide-border'><p className='slide-in-up3'>Kenntnisse & Fähigkeiten</p></div></li>
            <li><div className='slide-border'><p className='slide-in-up4'>Kontakt</p></div></li>
          </div>
        </ul>
      </div>
      <div className='content'>
        <div className='vorstellung'>
          <ul className='typewriter'>
            <li className='text2'>Mein Name ist...</li>
            <li className='text1'>Hallo User,</li>
          </ul>
          <div className='slide-border'>
            <div className='name'>Emil Collins Udupuzhayil</div>
          </div>
          <div className='slide-border'>
            <div className='vorstellung-text'>
            Ich bin 17 Jahre Alt und mache die Ausbildung zum Applikationsentwickler 
            durch die IMS (Informatikmittelschule) an der  <a href='https://www.kbw.ch/'>
              Kantonsschule Büelrain</a>.
            </div>
          </div>
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
    </div>
  );
}