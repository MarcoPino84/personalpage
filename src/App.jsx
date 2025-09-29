import { useState,useRef,useEffect } from 'react'

import { Canvas } from '@react-three/fiber'
import TextDisplay from './TextDisplay'

 
import logo from './assets/logo2.jpg';
import PillNav from './PillNav';
import './App.css'

import Tablet from './Tablet'
import Planet from './Planet'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faBootstrap, faReact,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap,faRocket ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faHandSpock } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from "framer-motion"





function App() {


  //Schermata loading
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 2500)
  return () => clearTimeout(timer)
}, [])


  // DATI Con State come archivio
const [content] = useState([


  { id:1,
    title: "Formazione", items: [
    
      <>
        <ul > 

        <li> <FontAwesomeIcon icon={faGraduationCap}  size="2x" /> Laure triennale in <i>Scienze Psicologiche della personalità e delle e relazioni interpersonali</i>   .</li>
        <li>Corso enaip in <i>"Tecnico di produzione multimediale"</i>.</li>
        <li>Corso Aulab  <i>"Sviluppatore web fullstack"</i>.</li>
        <li>Approfondimenti e specializzazione in React e tecnologie moderne tramite corsi online e autoformazione.</li>
    
      </ul>
      {/* <span> <p><i>Qui accanto: Mercurio</i></p></span> */}
      </>
    
      
  ]},


  { id:2,
    title: "Esperienza", items: [
     
      <>
      <ul>
        <li>Libero professionista: produzioni multimediali per case editrici scolastiche.</li>
         <li> Project manager presso Libre.</li>
          <li> Collaborazione con il gruppo editoriale SEI - La Scuola </li>
      </ul>
      
     
   

      {/* <span> <p><i>Qui accanto: Venere</i></p></span> */}
      </>
  ]},

  { id:3,
    title: "Skills", items: [
 <>
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
  }}
>
  <div>
    <FontAwesomeIcon icon={faHtml5} size="2x" />
    <div>HTML</div>
  </div>
  <div>
    <FontAwesomeIcon icon={faCss3Alt} size="2x" />
    <div>CSS</div>
  </div>
  <div>
    <FontAwesomeIcon icon={faJs} size="2x" />
    <div>JavaScript</div>
  </div>
  <div>
    <FontAwesomeIcon icon={faBootstrap} size="2x" />
    <div>Bootstrap</div>
  </div>
  <div>
    <FontAwesomeIcon icon={faReact} size="2x" />
    <div>React</div>
  </div>
  <div>
    <FontAwesomeIcon icon={faGithub} size="2x" />
    <div>GitHub</div>
  </div>
 
</div>

 <p>P.s. Questo sito è stato realizzato usando React, Motion e React Three Fiber.
     {/* <span> <p><i>Qui ci siamo noi, il terzo pianeta dal sole.</i></p></span> */}
 </p>
 </>

  
  ]},
    { id:4,
    title: "Contatti", items: [
      <ul>
        <li> <FontAwesomeIcon icon={faEnvelope} />Email: marco.pino.psy@gmail.com </li>
        <li> <FontAwesomeIcon icon={faLinkedin} />
        
         <a 
          href="https://www.linkedin.com/in/marco-pino-multimedia/" 
          target="_blank" 
          rel="noopener noreferrer"
        >Linkedin</a></li>
         {/* <span> <p><i> Qui accanto il nostro bellissimo satellite. </i></p></span> */}
    
       
      </ul>

  ]},
      { id:5,
    title: "Portfolio", items: [

        <>
        <h1><i>Coming Soon...</i></h1>
        <span> <br></br> </span>
        <span>  <FontAwesomeIcon icon={faRocket} size="2x" /></span> 
        </>
    
  ]},
      { id:6,
    title: "", items: [
  <div>
    <h1> Ciao!</h1>
    <p>Sono Marco Pino, uno sviluppatore web appassionato di frontend e nuove tecnologie. Dopo diverse esperienze lavorative in altri settori, ho scelto di dedicarmi alla programmazione perché mi entusiasma creare soluzioni utili e dinamiche per il web.

Se cerchi una persona motivata, con voglia di crescere e di contribuire al tuo team o ai tuoi progetti digitali, contattami: potremmo fare grandi cose insieme.
    </p>
    <h3>Pace e prosperità (cit.) <FontAwesomeIcon icon={faHandSpock}  size="2x" /></h3>

  </div>
        
    
  ]},

]);



const [selectedId, setSelectedId] = useState(6);


 const handleButtonClick = (id) => {
    setSelectedId(id);
   
  };










  return (
    
<>
 <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Logo o spinner */}
            <motion.img
             src={logo}
              alt="Logo"
              className="w-32 h-32  mb-2"
              initial={{ scale: 0 }}
              animate={{ scale:2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div
              className="w-12 h-12 border-4 border-t-transparent border-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <motion.p
              className="mt-4 text-white font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Caricamento...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>



{!loading && (
  <>
    <div className="canvasContainer">
      <Canvas camera={{ position: [0, 0, 5] }} className="canvas">
        <ambientLight intensity={3.7} />
        <pointLight position={[10, 10, 10]} />
        <Planet size={3.5} position={[0, 0, 0]} textureUrl="/earth.jpg" />
      </Canvas>
    </div>

    <div className="contenuti">
      <Tablet
        className="tablet"
        content={content}
        selectedId={selectedId}
      >
        Pagina di Marco Pino
      </Tablet>

      <div id="containerTwo">
        <PillNav
          onNavClick={handleButtonClick}
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { id: 1, label: "Formazione", href: "/formazione" },
            { id: 2, label: "Esperienza", href: "/esperienza" },
            { id: 3, label: "Skills", href: "/skills" },
            { id: 4, label: "Contatti", href: "/contatti" },
            { id: 5, label: "Portfolio", href: "/portfolio" },
          ]}
          activeHref="/"
          className="custom-nav  m-5"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </div>
    </div>
  </>
)}



       </>
  )
}

export default App 


