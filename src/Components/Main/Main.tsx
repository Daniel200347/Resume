import {ReactNode} from "react";

import image from "./image/MyPhoto.png";
import classes from "./Main.module.css";
import Typography from "../UI/Typography";
import {TypographyTypes} from "../UI/Typography/Typography";

interface IProps {
    name: ReactNode;
}

function Main({name}: IProps) {
    return (
        <div className={classes.wrapper}>
            <div>
                <Typography type={TypographyTypes.titleProject}>
                    <span className={classes.greetings}>Hello, i am</span>
                </Typography>
                <Typography type={TypographyTypes.h1}>
                    <p className={classes.title}>{name}</p>
                </Typography>
                <Typography type={TypographyTypes.h2}>
                    <span className={classes.text}>Frontend Developer</span>
                </Typography>
            </div>
            <img className={classes.img} src={image} alt="Тут была картинка :с"/>
        </div>
    );
}

export default Main;
