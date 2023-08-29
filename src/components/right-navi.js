import classes from "./right-navi.module.css";
import facPic from "../img/fac.jpg";
import gith from "../img/github.png";
import inst from "../img/insta.png";
import twit from "../img/twit.png";
import { useState } from "react";

function Navi(props) {
/* this is how it would look like with a css class dinamic ly accepted or not, but cant do it, cause dont know what to bring here to make it true or false. Max go fuck yourselves you arent as good a teacher as a parrot I am afraid it seems.<li className={`${classes.li} ${fckyuMx1 ? classes.arrow : " "}`} onClick={props.welcomeHandlerPr}> */
//let classPlusArrow = {`${classes.li} ${welcomeHandlerPr ? classes.arrow : "" }`};

    /* const [welcomeSlider, setWelcomeSlider] = useState();
    const [worksSlider, setWorksSlider] = useState();
    const [aboutSlider, setAboutSlider] = useState();
    const [connectSlider, setConnectSlider] = useState();

    function welcomeSlideHandler(){
        setWelcomeSlider(true);
        setWorksSlider(false);
        setAboutSlider(false);
        setConnectSlider(false);
    };
    function worksSlideHandler(){
        setWelcomeSlider(false);
        setWorksSlider(true);
        setAboutSlider(false);
        setConnectSlider(false);
    };
    function aboutSlideHandler(){
        setWelcomeSlider(false);
        setWorksSlider(false);
        setAboutSlider(true);
        setConnectSlider(false);
    };
    function connectSlideHandler(){
        setWelcomeSlider(false);
        setWorksSlider(false);
        setAboutSlider(false);
        setConnectSlider(true);
    }; */


    return (
        <>
            <div className={classes.mainContainer}>
                <ul className={classes.ul}>
                    <li /* className={`${classes.li} ${welcomeSlider ? classes.arrow : "" }`} */ className={classes.li} onClick={props.welcomeHandlerPr /* welcomeSlideHandler */}> 
                        Welcome
                    </li>
                    <li /* className={`${classes.li} ${worksSlider ? classes.arrow : "" }`} */ className={classes.li} onClick={props.worksHandlerPr /* worksSlideHandler */}>
                        Works
                    </li>
                    <li /* className={`${classes.li} ${aboutSlider ? classes.arrow : "" }`} */ className={classes.li} onClick={props.aboutHandlerPr /* aboutSlideHandler */}>
                        About
                    </li>
                    <li /* className={`${classes.li} ${connectSlider ? classes.arrow : "" }`}*/ className={classes.li} onClick={props.connectHandlerPr/* connectSlideHandler */}>
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
                    </div>
                </ul>
            </div>
        </>
    );
}

export default Navi;
