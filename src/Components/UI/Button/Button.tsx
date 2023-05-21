import { ReactNode } from "react";
import classnames from "classnames";
import classes from "./Button.module.css";


interface IProps {
  children: string;
  iconLeft?: ReactNode;
  className?: string;
  href?: string;
  target?: string;
}

function Button({ children, iconLeft, className, href }: IProps) {
  if (href) {
    return (
      <a
        target={"_blank"}
        href={href}
        className={classnames(classes.button, className)}
      >
        {iconLeft} {children}
      </a>
    );
  }

  return (
    <button className={classnames(classes.button, className)}>
      {iconLeft} {children}
    </button>
  );
}

export default Button;
