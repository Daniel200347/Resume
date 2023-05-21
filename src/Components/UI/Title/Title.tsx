import classes from "./Title.module.css"
import classnames from "classnames"
interface IProps {
    children: string
    sign: string
    className?: string;
}

function Title({children, sign, className}: IProps) {
    return (
        <span className={classnames(classes.title, className)}>{children}
            <span className={classes.white}>{sign}</span>
        </span>
    )
}

export default Title;
