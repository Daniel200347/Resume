import { ReactNode } from "react";
import classes from "./Link.module.css";

interface IProps {
  children: string;
  iconLeft?: ReactNode;
  href?: string;
  target?: string;
  download?: string;
}

function Link({ children, iconLeft, href, target, download }: IProps) {
  if (href) {
    return (
      <a
        target={target}
        href={href}
        className={classes.link}
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
