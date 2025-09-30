
import { Canvas } from '@react-three/fiber'
import Planet from "./Planet";
import TextDisplay from './TextDisplay';
import { AnimatePresence, motion } from "framer-motion"
import './App.css'

export default function Tablet({  content, selectedId }) {

  //Tramite l'id indivituo l'elemento giusto
  const activeContent = content.find(c => c.id === selectedId);
  const textures = {
  1: "/personalpage/assets/mercurio.jpg",
  2: "/personalpage/assets/venere.jpg",
  3: "/personalpage/assets/earth.jpg",
  4: "/personalpage/assets/moon.jpg",
  5: "/personalpage/assets/mars.jpg"
};

  return (
    <div className="tb01">
      {/* Container tablet */}
      <div className=" tb02 "
          >

        {/* Bordo interno bianco per lo "schermo" */}
<div className=" mainTabletContent">



{/* Mostra contenuti in modo condizionale */}

<AnimatePresence mode="wait">
{activeContent ? ( <>

<motion.div
                key={activeContent.id} // importantissimo per trigger animazioni
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
                 style={{ position: "relative" }}
              >
 <Canvas
        camera={{ position: [0, 0, 5] }}
        className="canvasTwo"
      >
        <ambientLight intensity={3.7} />
        <pointLight position={[10, 10, 10]} />
        <Planet size={1.2} position={[-0.2, 1, 1]}
        
      textureUrl={textures[selectedId] || "/personalpage/assets/earth.jpg" }
     />
         </Canvas>
       </motion.div>
   <TextDisplay className="textDisplayTablet"
     title={activeContent.title} 
     text={activeContent.items}>
     </TextDisplay>
   
</>
) : (<>
<motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                 style={{ position: "relative" }}
              >


<Canvas
        camera={{ position: [0, 0, 5] }}
        className="canvasTwo"
      >
        <ambientLight intensity={3.7} />
        <pointLight position={[10, 10, 10]} />
        <Planet 
        size={1.2} 
        position={[-0.2, 1, 1]} 
       textureUrl={textures[selectedId] || "/personalpage/assets/earth.jpg"}

        />
         </Canvas>
              </motion.div>
     </>
      
)}
</AnimatePresence>
</div>

        {/* Versione verticale (mobile) */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-1 rounded-full bg-gray-700 shadow-inner sm:hidden"></div>
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-gray-700 sm:hidden"></div>
        <div className="absolute left-0 top-1/4 w-1 h-16 rounded-r-full bg-gray-700 sm:hidden"></div>
        <div className="absolute right-0 top-1/4 w-1 h-16 rounded-l-full bg-gray-700 sm:hidden"></div>

        {/* Versione orizzontale (desktop) */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-gray-700 hidden sm:block"></div> {/* telecamera lato sinistro */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-1 h-10 rounded-full bg-gray-700 hidden sm:block"></div> {/* pulsante lato destro */}
        <div className="absolute top-0 left-1/4 w-16 h-1 rounded-b-full bg-gray-700 hidden sm:block"></div> {/* pulsante superiore */}
        <div className="absolute bottom-0 left-1/4 w-16 h-1 rounded-t-full bg-gray-700 hidden sm:block"></div> {/* pulsante inferiore */}
      </div>
    </div>
  );
}
