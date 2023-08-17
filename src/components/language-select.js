// import { Link } from "react-router-dom";
import classes from "./language-select.module.css"

function LanguageSelect () {

    return (
        <>
            <div className={classes.lang}>
                <a href="..." className={classes.en}>En</a>
                <a href="..." className={classes.hu}>Hu</a>
            </div>
        </>
    );
};

export default LanguageSelect;
