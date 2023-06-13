import './App.css'
import { useRef, useEffect } from "react";
import image1 from './images/logo.png';
import image2 from './images/praktikum.jpg';
import image3 from './images/portfolio.png';
import image4 from './images/budget.png';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaJava, FaNodeJs, FaLanguage, FaPhp } from 'react-icons/fa';
import { SiJavascript, SiCsharp, SiHtml5, SiReact, SiCss3 } from 'react-icons/si';      
import Contact from './Contact';
import Helmet from "react-helmet";


export default function App() {

  const aboutMe = useRef(null);
  const whoami = useRef(null);
  const contact = useRef(null);
  const projekte = useRef(null);

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

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className='App'>
      <Helmet>
        <title>emico's Website</title>
      </Helmet>
      <head>
        <script src="https://cdn.counter.dev/script.js" data-id="d0ce3fa0-4e83-4625-9cbf-f231023f58dd" data-utcoffset="2"></script>
      </head>
      <div className='nav-header'>
        <div className='logo'>
          <img onClick={refreshPage} className='logo-image' src={image1} height={150} width={150} alt="Emil's Logo"/>
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
            <li onClick={() => scrollToSection(projekte)}><div className='slide-border'><p className='slide-in-up4'>Projekte</p></div></li>
            <li ><div className='slide-border'><p className='slide-in-up'><a href='https://github.com/emico-git' target="_blank" className='github-link'>Github</a></p></div></li>
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
                Ich bin 18 Jahre Alt und mache die Ausbildung zum Applikationsentwickler 
                durch die IMS (Informatikmittelschule) 
                an der <a className='kbw-link' href='https://www.kbw.ch/'target="_blank"> Kantonsschule Büelrain</a>.
              </div>
            </div>
            <div className='slide-border'>
              <div className='emoticon1'>(.‿.)/</div>
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
            Meine Name ist Emil Collins Udupuzhayil und ich bin am 5. Februar 2005 in 
            Österreich, Wien geboren. In meiner Freizeit programmiere ich 
            gerne und gehe regelmässig in den Kraftraum. 
            Ich bin eine sehr neugierige Person und 
            probiere gerne neue Sachen aus. Zum beispiel probiere ich 
            momentan ein Spiel zu programmieren. 
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
            Meine grösseren Projekte habe ich weiter unten ausgestellt. Hier sind noch ein paar weitere 
            Information über mich…
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
                <div className='table-item'><FaPhp size="2em" /> PHP</div>
              </div>
              <div data-aos='fade-left' className='table'>
                <div className='table-title'>Web App Kenntnisse:</div>
                <div className='table-item'><SiReact size="2em" /> React</div>
                <div className='table-item'><SiHtml5 size="2em" /> HTML</div>
                <div className='table-item'><SiCss3 size="2em" /> CSS</div>
                <div className='table-item'><FaNodeJs size="2em" /> Node.js</div>
              </div>
            </div>
            
          </div>
        </div>
        <div ref={projekte} classname='projekte'>
          <div className='titel'>
            <p>Projekte</p>
          </div>
          <div className='projekte-content'>
              <div className='cards'>
                <div data-aos='fade-right' className='card'>
                  <a className='kbw-link' href='https://emil.collins.at/'target="_blank">
                    <img className='projekt-image1' src={image3} height='465px' width='950px'></img>
                    <div className='intro'>
                      <h2>Portfolio</h2>
                      <p>
                        Dieses Portfolio ist meine erste eigene Website. Ich habe es mit der hilfe
                        von React (Aos, emailJs, Helmet), und CSS gemacht und dient zur Presentation meiner 
                        weiteren Projekte. 
                      </p>
                    </div>
                  </a>
                </div>
                <div data-aos='fade-left' className='card' >
                <a className='kbw-link' href='https://budget.collins.at/'target="_blank">
                <img className='projekt-image2' src={image4} height={465} width={950}></img>
                  <div className='intro'>
                    <h2>Budget App</h2>
                    <p>
                      Eine einfache Budget App welche einer Person hilft ihre Ausgaben im Überblick zu behalten.
                      Es wurde mit der hilfe von React (express), NodeJS und MySQL und ist noch 
                      ausbaufähig.  
                    </p>
                  </div>
                  </a>
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