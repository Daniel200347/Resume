import Button from "../Button";
import classes from "./Project.module.css";
import classnames from "classnames";
import Typography from "../Typography";
import { TypographyTypes } from "../Typography/Typography";

interface IProps {
  title?: string;
  text?: string;
  className?: string;
  hrefDemo?: string;
  hrefPreview?: string;
}

function Project({ title, text, className, hrefDemo, hrefPreview }: IProps) {
  return (
    <div className={classnames(classes.container, className)}>
      <Typography type={TypographyTypes.titleProject}>
        <h3 className={classes.title}>{title}</h3>
      </Typography>
      <Typography type={TypographyTypes.p2}>
        <span className={classes.text}>{text}</span>
      </Typography>
      <Typography type={TypographyTypes.btn}>
        <div className={classes.ButtonWrapper}>
          <Button
            href={hrefDemo}
            className={classes.button}
            children={"GITHUB"}
          />
          <Button href={hrefPreview} children={"DEMO"} />
        </div>
      </Typography>
    </div>
  );
}

export default Project;
