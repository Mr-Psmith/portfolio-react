import classes from "./backdrop.module.css";

function Backdrop(props) {

    //const cssClasses = ["main", props.show ? "BackdropOpen" : "BackdropClosed"];

    return (
        <>
            <div className={classes.main} onClick={props.closeBackdrHandlerPr}> {/* cssClasses.join(" ") */}
                
            </div>
        </>
    );
};

export default Backdrop;