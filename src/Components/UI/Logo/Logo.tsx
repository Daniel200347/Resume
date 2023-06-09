import classes from "./Logo.module.css";
import {TypographyTypes} from "../Typography/Typography";

import Typography from "../Typography";
import classnames from "classnames";

interface IProps {
    className?: string;
}

function Logo({className}: IProps) {
    return (
        <div>

            <Typography type={TypographyTypes.title}>
                <div className={className}>
          <span className={classnames(classes.titleLeft, classes.title)}>
            PORT
            <span className={classnames(classes.titleRight, classes.title)}> FOLIO</span>
          </span>
                </div>
            </Typography>

        </div>
    )
}

export default Logo;