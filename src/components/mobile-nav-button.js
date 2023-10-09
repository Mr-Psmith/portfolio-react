import classes from "./mobile-nav-button.module.css";


function Hamburger(props) {

    return (
        <>
            <div className={classes.hamburgerMain} onClick={props.hamburgerClickHandlerPr}>
                <span className={classes.hamburgerLines}></span>
                <span className={classes.hamburgerLines}></span>
                <span className={classes.hamburgerLines}></span>
                <span className={classes.hamburgerLines}></span>
            </div>
        </>
    );
}

export default Hamburger;
