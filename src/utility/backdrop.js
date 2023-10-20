import classes from "./backdrop.module.css";

function Backdrop(props) {
    return (
        <>
            <div className={classes.main} onClick={props.closeBackdrHandlerPr}>
                
            </div>
        </>
    );
};

export default Backdrop;