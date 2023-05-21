import classes from "./MobileHeader.module.css"
import classNames from "classnames";

function MobileHeader() {
    return (
        <div className={classes.burgerMenu}>
            <div className={classes.top}></div>
            <div className={classes.middle}></div>
            <div className={classes.bottom}></div>
        </div>
    )
}

export default MobileHeader;