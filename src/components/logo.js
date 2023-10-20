import classes from "./logo.module.css";
import { motion } from "framer-motion";

function Logo() {
    return (
        <>
            <div className={classes.wrapper__logo}>
                <motion.div initial={{x: "300%"}} animate={{ x: "-100%" }} transition={{ delay:4, duration: 1, type: "spring", bounce: 0.2 }}>
                    <h1 className={classes.pWord}>P</h1>
                </motion.div>
                <motion.div initial={{x: "-300%"}} animate={{ x: "-100%" }} transition={{ delay:4, duration: 1, type: "spring", bounce: 0.2 }}>
                    <h1 className={classes.sWord}>S</h1>
                </motion.div>
            </div>
        </>
    );
};

export default Logo;