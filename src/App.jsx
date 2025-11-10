import React from "react";
import {motion} from "motion/react";

const App = () => {
  return (
    <>
      <motion.div 
      initial={{
        x:0,
        y:0
      }}
      animate={{
        x:[0,800,800,0,0],
        y:[0,0,300,300,0]
      }}
      transition={{
        duration:4,
        delay:1
      }}
      className="box">

      </motion.div>
      <motion.div 
      drag
      whileDrag={{
        scale:0.8
      }}
      dragConstraints={{
        left:0,
        
        
      }}
      dragDirectionLock="true"
      className="circle">

      </motion.div>
    </>
  );
};

export default App;
