import React from "react";

import classes from "./AboutMe.module.css";
import Title from "../UI/Title";
import ContactMenu from "../UI/ContactMenu";
import {IconTag} from "../UI/Icons/IconTag";
import {IconCurlyBrace} from "../UI/Icons/IconCurlyBrace";
import resume from "../../documents/ResumeSultanov.pdf";
import Typography from "../UI/Typography";
import {TypographyTypes} from "../UI/Typography/Typography";

function AboutMe() {
    return (
        <div id={"AboutMe"} className={classes.wrapper}>
            <div className={classes.container}>
                <Typography type={TypographyTypes.title}>
                    <Title children={"aboutMe"} sign={"( )"}/>
                </Typography>
                <Typography type={TypographyTypes.p1}>
          <span className={classes.text}>
            В последние годы проходил самостоятельное обучение без возможности
            работать. На данный момент оканчиваю колледж на специальность
            Инженер-Программист. В колледже прошел несколько семестров веб
            разработки и 1с разработки. Во время учебы написал несколько
            курсовых, для себя и своих одногруппников. Имел небольшой опыт в
            разработке на фрилансе на пару с дизайнером. А так же занимался
            разработкой проектов в команде с сокурсниками-энтузиастами. Во время
            выполнения заказа с фриланса прошел курс skillbox за студента
            университета РАНХиГС. <br/>
            До того, как увлечься фронтендом, я пробовал себя в бэкенд
            направлении, изучая golang и python
          </span>
                </Typography>
            </div>
            <div className={classes.cardMenu}>
                <ContactMenu
                    target={"_blank"}
                    href={"https://t.me/genanna"}
                    className={classes.card}
                    title={"My telegram"}
                    text={"Telegram"}
                    icon={<IconTag/>}
                />

                <ContactMenu
                    target={"_blank"}
                    href={"https://github.com/Daniel200347"}
                    className={classes.card}
                    title={"Go to GitHub"}
                    text={"GitHub"}
                    icon={<IconCurlyBrace/>}
                />

                <ContactMenu
                    target={"_blank"}
                    href={resume}
                    className={classes.card}
                    title={"My documents"}
                    text={"view documents"}
                    icon={<IconTag/>}
                />
            </div>
        </div>
    );
}

export default AboutMe;
