import classes from "./loader.module.css";
import { motion } from "framer-motion";

function Loader() {
    return (
        <>
            <motion.div className={classes.main__loader} animate={{ opacity:0 }} transition={{ delay: 3, duration: 1, type: "spring", bounce: 0 }} exit={{ y: "-150vh" }}>
                <motion.div animate={{ x: "70vw" }} transition={{ delay: 3, duration: 1, type: "spring", bounce: 0 }}>
                    <h1 className={classes.pWord__loader}>P</h1>
                </motion.div>
                <motion.div animate={{ x: "-70vw" }} transition={{ delay: 3, duration: 1, type: "spring", bounce: 0 }}>
                    <h1 className={classes.sWord__loader}>S</h1>
                </motion.div>
            </motion.div>
        </>
    );
};

export default Loader;