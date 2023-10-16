import { useState } from "react";
import classes from "./name-designation.module.css";
import { motion } from "framer-motion";


function NameDesignation() {
  const [nameSwitch, setNameSwitch] = useState("");

  const timeoutedHoverHandler = event => {

  }
  function hoverHandler() {
    setTimeout(() => {
      if (!nameSwitch) {
        setNameSwitch(true);
      } else {
        setNameSwitch(false);
      }
    }, 500);
  }

  return (
    <>
      <div className={classes.main} onMouseEnter={hoverHandler}>
        {/* {!nameSwitch ? ( */}
        <div>
          <motion.div animate={{ x: !nameSwitch ? "-110%" : 0, opacity: nameSwitch ? 1 : 0 }} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} exit={{ x: "110%" }} className={classes.nameTransition}>
            <h4 className={classes.nameTransitionH4}>P. Sancthus</h4>
          </motion.div>
          {/* <h5>Web-developer, designer, writer, thinker</h5> */}
        </div>
        {/* ) : ( */}
        <div>
          <motion.div animate={{ x: nameSwitch ? "-110%" : 0, opacity: !nameSwitch ? 1 : 0  }} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} exit={{ x: "110%" }} className={classes.nameTransition}>
            <h4 className={classes.nameTransitionH4}>Pal Mihaly Szenthe</h4>
          </motion.div>
          <h5>Web-developer, designer, writer, thinker</h5>

        </div>
        {/*  )} */}
      </div>
    </>
  );
}

export default NameDesignation;
