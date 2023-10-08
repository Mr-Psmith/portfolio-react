import classes from "./close-x.module.css";

function Close(props) {



    return (
        <>
                <div className={classes.closeXMain} onClick={props.closeAllHandlerPr}></div>
        </>
    );
};

export default Close;