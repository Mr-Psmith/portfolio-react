import classes from "./iframe.module.css";

function IframeOP(props) {
  return (
    <>
      {/* <motion.div animate={{x: props.iframeOPPr ? 2000 : 0}} transition={{ duration: 0.5, type: "spring", bounce: 0.3 }} className={classes.mainIframes}> */} {/* I work here with animation wfor now, as the framer motion seems to have problems with iframes */}
      <div>
        <iframe src="https://psancthus.com/" title="oldPortf" className={classes.mainIframes}></iframe>
      </div>
      {/* </motion.div> */}
    </>
  );
}

export default IframeOP;
