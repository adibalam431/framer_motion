import React from "react";
import {motion} from "motion/react";

const App = () => {
  return (
    <>
      <motion.div 
      animate={{x:1000,animationDuration:2}}
      transition={{delay:2,duration:1}}
      className="box">

      </motion.div>
      <motion.div 
      animate={{x:100,y:200}}
      transition={{delay:2,duration:1}}
      className="circle">

      </motion.div>
    </>
  );
};

export default App;
