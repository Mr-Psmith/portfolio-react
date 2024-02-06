import classes from "./right-navi.module.css";
import facPic from "../img/facebookGold.png";
import gith from "../img/github130Gold.png";
import inst from "../img/instaGold.png";
import twit from "../img/twitterGold.png";
import linkedin from "../img/linkedinGold.png";

function Navi(props) {

    return (
        <>
            <div className={classes.mainContainer}>
                <ul className={classes.ul}>
                    <li className={classes.li} onClick={props.welcomeHandlerPr}> 
                        Welcome
                    </li>
                    <li className={classes.li} onClick={props.worksHandlerPr}>
                        Works
                    </li>
                    <li className={classes.li} onClick={props.aboutHandlerPr}>
                        About
                    </li>
                    <li className={classes.li} onClick={props.connectHandlerPr}>
                        Contact
                    </li>
                    <div className={classes.socalPics}>
                            <a href="https://www.facebook.com/messages/t/100000633126813" target="_blank"  rel="noreferrer">
                                <img src={facPic} alt="Face" className={classes.fac}></img>
                            </a>
                            <a href="https://github.com/Mr-Psmith" target="_blank"  rel="noreferrer">
                                <img src={gith} alt="Gith" className={classes.github}></img>
                            </a>
                            <a href="https://instagram.com/..." target="_blank"  rel="noreferrer">
                                <img src={inst} alt="Inst" className={classes.inst}></img>
                            </a>
                            <a href="https://twitter.com/messages/1581314633595494400-1581314633595494400?text=" target="_blank"  rel="noreferrer">
                                <img src={twit} alt="Twit" className={classes.twitter}></img>
                            </a>
                            <a href="https://www.linkedin.com/in/pal-szenthe-3b182b14b/" target="_blank"  rel="noreferrer">
                                <img src={linkedin} alt="Twit" className={classes.linkedin}></img>
                            </a>
                    </div>
                </ul>
            </div>
        </>
    );
}

export default Navi;
