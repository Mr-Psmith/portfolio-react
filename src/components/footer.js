import classes from "./footer.module.css";

function Footer(props) {
    
    return (
        <>
            <div className={classes.footer}>
                <li className={classes.mainFooter__link}>
                    <button className={classes.link} onClick={props.emailCopyHandler}>
                        psancthus@gmail.com
                    </button>
                </li>
            </div>
        </>
    );
}

export default Footer;
