import classes from "./footer.module.css";

function Footer() {
    
    return (
        <>
            <div className={classes.footer}>
                <li className={classes.mainFooter__link}>
                    <button className={classes.link}>
                        psancthus@gmail.com
                    </button>
                </li>
                {/* <li className={classes.mainFooter__link}>
                    <button className={classes.link} onClick={props.termsHandlerPr}>Terms of Use</button>
                </li> */}
            </div>
        </>
    );
}

export default Footer;
