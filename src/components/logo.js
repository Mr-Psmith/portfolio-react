import classes from "./logo.module.css";
import { motion } from "framer-motion";

function Logo(props) {
    return (
        <>
            <div className={classes.wrapper__logo}>
                <motion.div initial={{x: "300%"}} animate={{ x: "-100%" }} transition={{ delay:1, duration: 1, type: "spring", bounce: 0.2 }} /* exit={{ x: "-70vw" }} */>
                    <h1 className={classes.pWord}>P</h1>
                </motion.div>
                <motion.div initial={{x: "-300%"}} animate={{ x: "-100%" }} transition={{ delay:1, duration: 1, type: "spring", bounce: 0.2 }} /* exit={{ x: "-70vw" }} */>
                    <h1 className={classes.sWord}>S</h1>
                </motion.div>
                <div className={classes.main}></div>
            </div>
        </>
    );
};

export default Logo;