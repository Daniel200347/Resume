import classes from "./Typography.module.css";
import classnames from "classnames";
import {ReactNode} from "react";

interface IProps {
    children: ReactNode;
    className?: string;
    type: TypographyTypes;
}

export enum TypographyTypes {
    btnMenu = "btnMenu",
    p1 = "p1",
    p2 = "p2",
    h1 = "h1",
    h2 = "h2",
    title = "title",
    btn = "btn",
    titleProject = "titleProject",
    cardProjectLink = "cardProjectLink",
    cardProjectTitle = "cardProjectTitle",
}

function Typography({children, className, type}: IProps) {
    return (
        <span className={classnames(classes[type], className)}>{children}</span>
    );
}

export default Typography;
