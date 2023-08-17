import classes from "./right-navi.module.css";

function Navi() {
    return (
        <>
            <div className={classes.mainContainer}>
                <ul className={classes.main}>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                </ul>
            </div>
        </>
    );
};

export default Navi;