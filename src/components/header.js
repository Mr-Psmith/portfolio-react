import NameDesignation from "./name-designation";

import classes from "./header.module.css"
import Logo from "./logo";


function Header (props) {

    return (
        <>
            <div className={classes.main}>
                <NameDesignation />
                <Logo />
                {/* <LanguageSelect /> */}
            </div>
        </>
    );
};

export default Header;
