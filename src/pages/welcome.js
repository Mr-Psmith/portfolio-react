import classes from "./welcome.module.css";

function Welcome (props) {

    return (
        <>
            <div className={classes.main}>
                    <h1>Hi, I am Paul.</h1>
                    <h3>I am a web developer - designer, writer, web-magazin-editor and builder</h3>
                    <p>I like to make beautiful Custom websites with React, - Javascript, Css, for making them simple, fast, yet elegant</p>
                    <h4>Let's work together, help each-other growing!</h4>
                    <button onClick={props.contactButtonHandlerPr}>Contact Me!</button>
                </div>
            
        </>
    );
};

export default Welcome;
