import classes from "./iframe.module.css";

function IframeTan() {
    return (
        <>
            <div className={classes.main}>
                <iframe src="https://theorianatura.psancthus.com/" title="oldPortf" className={classes.mainIframes}></iframe>
            </div>
        </>
    );
};

export default IframeTan;