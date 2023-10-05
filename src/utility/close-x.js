import "./close-x.css";
import classes from "./close-x.module.css";
import Transition from "react-transition-group/Transition";

function Close(props) {

    //const classAll = ["main", props.closeXpr ? "opened" : "closed"];   classAll.join(" ")



    return (
        <>
            <Transition in={props.closeXPr} timeout={300} classNames="closeX">
                {state => (<div className={classes.main} onClick={props.closeAllHandlerPr}></div>)}
                
                </Transition>
        </>
    );
};

export default Close;