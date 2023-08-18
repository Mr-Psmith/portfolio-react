import LanguageSelect from "./language-select";
import NameDesignation from "./name-designation";

import classes from "./header.module.css"
import Logo from "./logo";
import Navi from "./right-navi";


function Header () {

    return (
        <>
            <div className={classes.main}>
                <NameDesignation />
                <Logo />
                <LanguageSelect />

            </div>
        </>
    );
};

export default Header;
