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
            </div>
        </>
    );
}

export default Footer;
