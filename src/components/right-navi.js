import classes from "./right-navi.module.css";
import facPic from "../img/fac.jpg";

function Navi(props) {
 
    return (
        <>
            <div className={classes.mainContainer}>
                <ul className={classes.ul}>
                    <li className={classes.li} onClick={props.welcomeHandlerPr} >Welcome</li>
                    <li className={classes.li} onClick={props.worksHandlerPr}>Works</li>
                    <li className={classes.li} onClick={props.aboutHandlerPr}>About</li>
                    <li className={classes.li} onClick={props.connectHandlerPr}>Connect</li>
                    {/* <a href="https://psancthus.com/" className={classes.a}>OldSite</a> */}
                    <li><img src={facPic} className={classes.facPic} alt=""></img></li>
                </ul>
            </div>
        </>
    );
};

export default Navi;