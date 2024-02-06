import classes from "./works.module.css";
import "./transition.css";
import { motion } from "framer-motion";

import oldPortf from "../img/works-oldPortf.jpg";
import tan from "../img/photographerPortf.jpg";

function Works(props) {
  return (
    <>
      <motion.div animate={{x: props.worksSlidePr ? "90%" : 0, opacity: props.worksSlidePr ? 1 : 0}} transition={{ duration: 0.4, type: "spring", bounce: 0.2 }} exit={{x: "90%"}} className={classes.mainWorks}>
        <div className={classes.mainn} id="works">
          <h1>Here are some of my works:</h1>
          <div className={classes.unvisibleblock}>
          <h4>You can check them out by clicking the pictures</h4>
            <div className={classes.block1} >
              <div className={classes.work1}>
                <div className={classes.image} >
                  <img src={tan} className={classes.tanC} alt="" onClick={props.tanPrHandler}></img>
                </div>
                <div  className={classes.descript} >
                  <p>This site is the prototype of my Theoria Natura webmagazine, a small webmagazin which I made in 2022 as part of my resume. It uses Javascript, CSS, Html.</p>
                </div>
              </div>
              <div className={classes.work2} >
                <div className={classes.image} onClick={props.openOPHandlerPr}>
                  <img src={oldPortf} className={classes.startAzoresC} alt=""></img>
                </div>
                <div className={classes.descript} >
                  <p>This is my old portfolio written in Javascript, CSS.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Works;
