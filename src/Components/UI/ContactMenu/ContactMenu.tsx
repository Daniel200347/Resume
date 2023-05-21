import { ReactNode } from "react";
import classnames from "classnames";

import classes from "./ContactMenu.module.css";
import Typography from "../Typography";
import { TypographyTypes } from "../Typography/Typography";

interface IProps {
  icon: ReactNode;
  title: string;
  text: string;
  className?: string;
  href: string;
  target: string;
}

function ContactMenu({ icon, title, text, className, href, target }: IProps) {
  return (
    <div className={classnames(classes.wrapper, className)}>
      <div>
        <Typography type={TypographyTypes.cardProjectTitle}>
          <span className={classes.title}>{title}</span>
        </Typography>
        <Typography type={TypographyTypes.cardProjectLink}>
          <a target={target} href={href} className={classes.text}>
            {text}
          </a>
        </Typography>
      </div>

      <span className={classes.icon}>{icon}</span>
    </div>
  );
}

export default ContactMenu;
