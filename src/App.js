import './App.css'
import { useRef, useMemo, useState, useEffect } from "react";
import image1 from './images/logo.png';
import image2 from './images/praktikum_edited2.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaJava, FaNodeJs, FaLanguage } from 'react-icons/fa';
import { SiJavascript, SiCsharp, SiHtml5, SiReact, SiCss3 } from 'react-icons/si';      
import Contact from './Contact';

export default function App() {

  const aboutMe = useRef(null);
  const whoami = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementref) => {
    window.scrollTo({
      top: elementref.current.offsetTop,
      behavior: "smooth",
    });
  }

  
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: 'ease',
      once: true
    });
  }, []);

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
            <li onClick={() => scrollToSection(whoami)}><div className='slide-border'><p className='slide-in-up1'>Wer bin ich</p></div></li>
            <li onClick={() => scrollToSection(aboutMe)}><div className='slide-border'><p className='slide-in-up2'>Über mich</p></div></li>
            <li onClick={() => scrollToSection(contact)}><div className='slide-border'><p className='slide-in-up3'>Kontakt</p></div></li>
            <li ><div className='slide-border'><p className='slide-in-up4'>Blog (Work in Progress)</p></div></li>
          </div>
        </ul>
      </div>
      <div className='content'>
        <div className='vorstellung'>
            
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
            <div className='slide-border'>
              <div className='emoticon1'>(・‿・)/</div>
            </div>
          </div>
        </div>
        <div ref={whoami} className='whoami'>
          <div className='titel'>Wer bin ich?</div>
          <div className='whoami-content'>
            <div className='whoami-image'>
             <div className='slide-border'>
               <img data-aos='fade-right'  className='image' src={image2} height={400}/>
            </div>
          </div>
          <div className='whoami-right-side'>
            <div data-aos='fade-up' className='whoami-text'>
            Ich bin am 5. Februar 2005 in Österreich, Wien geboren. 
            In meiner Freizeit spiele ich Videospiele gerne und gehe regelmässig in 
            den Kraftraum. Ich bin eine sehr neugierige Person und 
            probiere gerne neue Sachen aus. Zumbeispiel planne ich 
            momentan ein Spiel zu programmieren und in der nahen Zukunft
            auch vielleicht einmal Musik zu machen. 
            </div>
            <div data-aos='fade-up' className='emoticon2'>(⌐■_■)</div>
          </div>
        </div>
        </div>
        <div ref={aboutMe} className='aboutMe'>
          <div className='titel'>Über mich</div>
          <div className='aboutMe-content'>
            <div data-aos='fade-up' className='aboutMe-text'>
            Seit dem beginn der IMS habe ich auch begonnen mit dem gelernten Stoff 
            zu programmieren. Die meisten Projekte sind kleine Konsolen Applikationen. 
            Mein erstes grössere Projekt ist diese Webseite in der ich mich vorstelle. 
            Hier sind noch ein paar weitere Information über mich…
            </div>
            <div className='aboutMe-tables'>
              <div data-aos='fade-right' className='table'>
                <div className='table-title'>Sprachen</div>
                <div className='table-item'><FaLanguage size="2em"/> Deutsch</div>
                <div className='table-item'><FaLanguage size="2em"/> English</div>
                <div className='table-item'><FaLanguage size="2em"/> Französisch</div>
              </div>
              <div data-aos='fade-up' className='table'>
                <div className='table-title'>Programmiersprachen</div>
                <div className='table-item'><FaJava size="2em"/> Java</div>
                <div className='table-item'><SiJavascript size="2em"/> JavaScript</div>
                <div className='table-item'><SiCsharp size="2em" /> C#</div>
              </div>
              <div data-aos='fade-left' className='table'>
                <div className='table-title'>Sonstige Kenntnisse:</div>
                <div className='table-item'><SiReact size="2em" /> React</div>
                <div className='table-item'><SiHtml5 size="2em" /> HTML</div>
                <div className='table-item'><SiCss3 size="2em" /> CSS</div>
                <div className='table-item'><FaNodeJs size="2em" /> Node.js</div>
              </div>
            </div>
          </div>
        </div>
        <div ref={contact} className='kontakt'>
          <div className='titel'>
            <p>Kontakt</p>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}