import classes from "./logo.module.css";

function Logo() {
    return (
        <>
            <div className={classes.wrapper__logo}>
                <div className={classes.main}></div>
            </div>
        </>
    );
};

export default Logo;