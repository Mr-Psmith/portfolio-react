import classes from "./footer.module.css";

function Footer() {
    return (
        <>
            <div className={classes.footer}>
                {/* <ul className={classes.mainFooter__links}> */}
                    <li className={classes.mainFooter__link}>
                        <a href="..." className={classes.link}>psancthus@gmail.com</a>
                    </li>
                    <li className={classes.mainFooter__link}>
                        <a href="..." className={classes.link}>Terms of Use</a>
                    </li>
                {/* </ul> */}
            </div>
        
        </>
    );
};

export default Footer;