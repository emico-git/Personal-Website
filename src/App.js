import './App.css';
import { useRef } from "react";
import image1 from './images/logo.png';
import image2 from './images/praktikum_edited2.jpg';

export default function App() {

  const aboutMe = useRef(null);
  const career = useRef(null);
  const abilities = useRef(null);
  const contact = useRef(null);


  const scrollToSection = (elementref) => {
    window.scrollTo({
      top: elementref.current.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <div className='App'>
      <div className='nav-header'>
        <div className='logo'>
          <img className='logo-image' src={image1} height={150} width={150}/>
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
            <li onClick={() => scrollToSection(aboutMe)}><div className='slide-border'><p className='slide-in-up1'>Über mich</p></div></li>
            <li onClick={() => scrollToSection(career)}><div className='slide-border'><p className='slide-in-up2'>Schulische Laufbahn</p></div></li>
            <li onClick={() => scrollToSection(abilities)}><div className='slide-border'><p className='slide-in-up3'>Kenntnisse & Fähigkeiten</p></div></li>
            <li onClick={() => scrollToSection(contact)}><div className='slide-border'><p className='slide-in-up4'>Kontakt</p></div></li>
          </div>
        </ul>
      </div>
      <div className='content'>
        <div className='vorstellung'>
            <div className='vorstellung-image'>
              <div className='slide-border'>
                <img className='image' src={image2} height={400}/>
              </div>
            </div>
          <div className='vorstellung-text'>
            <ul className='typewriter'>
              <li className='text2'>Mein Name ist...</li>
              <li className='text1'>Hallo User,</li>
            </ul>
            <div className='slide-border'>
              <div className='name'>Emil Collins Udupuzhayil</div>
            </div>
            <div className='slide-border'>
              <div className='description'>
                Ich bin 17 Jahre Alt und mache die Ausbildung zum Applikationsentwickler 
                durch die IMS (Informatikmittelschule) 
                an der <a href='https://www.kbw.ch/'target="_blank"> Kantonsschule Büelrain</a>.
              </div>
            </div>
          </div>
        </div>
        <div ref={aboutMe} className='uebermich'>
          <div className='titel'>
            <p>Übermich</p>
          </div>
        </div>
        <div ref={career} className='schulischeLaufbahn'>
          <div className='titel'>
            <p>Schulische Laufbahn</p>
          </div>
        </div>
        <div ref={abilities} className='kf'>
          <div className='titel'>
            <p>Kenntnisse & Fähigkeiten</p>
          </div>
        </div>
        <div ref={contact} className='kontakt'>
          <div className='titel'>
            <p>Kontakt</p>
          </div>
        </div>
      </div>
    </div>
  );
}