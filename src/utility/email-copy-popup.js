import classes from "./email-copy-popup.module.css";
import { motion } from "framer-motion";

function EmailCopyPopup() {
    return (
        <>
            <motion.div className={classes.main__emailCP} initial={{opacity:0}} animate={{ opacity:1 }} transition={{ duration: 0.3, type: "spring", bounce: 0 }} >
                <h1>My email-address has been copied to the Clipboard!</h1>
            </motion.div>
        </>
    );
};

export default EmailCopyPopup;