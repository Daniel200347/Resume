import classes from "./Projects.module.css";
import Title from "../UI/Title";
import CardsProjects from "../UI/CardsProject";
import Typography from "../UI/Typography";
import {TypographyTypes} from "../UI/Typography/Typography";

function Projects() {
    return (
        <div id={"Projects"} className={classes.container}>
            <Typography type={TypographyTypes.title}>
                <Title className={classes.title} sign={"( )"}>
                    Projects
                </Title>
            </Typography>
            <CardsProjects
                rightTitle={"Cat Madness"}
                rightText={
                    "Простенький демотиватор, с его помощью можно делать открыточки. Во время написания познакомился с *Canvas* в *JS*."
                }
                rightHrefPreview={"sa"}
                rightHrefDemo={"sa"}
            />
            <CardsProjects
                leftText={
                    "Простенький демотиватор, с его помощью можно делать открыточки. Во время написания познакомился с *Canvas* в *JS*"
                }
                leftTitle={"DEMOTIVATOR"}
                leftHrefDemo={"HREF "}
                leftHrefPreview={"#"}
                rightTitle={"Mars Rovers"}
                rightText={
                    "Это мой первый и единственный проект на *Angular*. Его я делал для освоения основ фреймворка. Он генерирует снимки поверхности марса в заданное время"
                }
                rightHrefDemo={"MARSROVERS"}
                rightHrefPreview={"MARSROVER"}
            />

            <CardsProjects
                leftTitle={"Neumorphism"}
                leftText={
                    "В этом проекте я реализовывал зависимости и автоматизацию CSS стилей для общего блага и удобства(идея не моя) да и вообще поебать, что я тут пишу, потом всё равно отредактирую"
                }
                leftHrefPreview={"as"}
                leftHrefDemo={"gf"}
                rightTitle={"CryptoRocket"}
                rightText={"Простенькая верстка. (Практиковался в навыках *HTML+CSS*)"}
                rightHrefDemo={"crypto"}
                rightHrefPreview={"crypto"}
            />
        </div>
    );
}

export default Projects;
