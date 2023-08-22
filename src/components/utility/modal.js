import classes from "./modal.module.css";

function Modal(props) {
    
    //const cssClasses = ["main", props.show ? "BackdropOpen" : "BackdropClosed"];
    
    return (
        <>
            <div className={classes.main}>{/* cssClasses.join(" ") */}
            </div>
        </>
    );
};

export default Modal;