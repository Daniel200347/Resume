import {ReactNode} from "react";
import classes from "./Link.module.css";
import classnames from "classnames";

interface IProps {
    children: string;
    iconLeft?: ReactNode;
    href?: string;
    target?: string;
    download?: string;
    className?: string

}

function Link({children, iconLeft, href, target, download, className}: IProps) {
    if (href) {
        return (
            <a
                target={target}
                href={href}
                className={classnames(classes.link, className)}
                download={download}
            >
                {iconLeft} {children}
            </a>
        );
    }
    return (
        <a className={classes.link}>
            {iconLeft} {children}
        </a>
    );
}

export default Link;
