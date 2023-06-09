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


                rightTitle={"GPTutor"}
                rightText={"Совместный проект мини приложение вконтакте с реалиализацией Chat-GPT. Проект близок к коммерческому по сложности и функционалу. На нём я частично подготовился к кровавому интерпрайзу. Работал с VKUI, VKAPI, React, TypeScript."}
                rightHrefDemo={"https://vk.com/services?w=app51602327_548334196"}
                rightHrefPreview={"https://github.com/grigoriy-grisha/ChatGPT-vk-mini-app"}

            />
            <CardsProjects
                leftTitle={"Neumorphism"}
                leftText={
                    "Проект, который позволит просто сгенерировать дизайн-приём неоморфизм. В этом проекте я отточил свои навыки манипуляции стилями через js."
                }
                leftHrefDemo={"https://daniel200347.github.io/neumorphismm/"}
                leftHrefPreview={"https://github.com/Daniel200347/neumorphismm"}
                rightTitle={"Janstay"}
                rightText={"Проект написан для моего товарища дизайнера. В этом проекте я работал с React и TypeScript. А так же познакомился с i18n."}
                rightHrefDemo={"https://janstay.com/ru"}
                rightHrefPreview={"https://github.com/Daniel200347/Janstay-portfolio"}
            />

            <CardsProjects
                leftTitle={"Mars Rovers"}
                leftText={
                    "Мой единственный проект на Angular, в левый инпут нужно ввести число от 1-1000. Выбрать любой марсоход и он покажет снимки этих марсоходов."
                }
                leftHrefPreview={"https://github.com/Daniel200347/Angular-MarsAPi"}
                leftHrefDemo={"https://daniel200347.github.io/Angular-MarsAPi/"}
                rightTitle={"Demotivator"}
                rightText={
                    "Приложение с помощью которого можно сгенерировать шуточный демотиватор. В этом проекте я познакомился с canvas и научился кастомизировать html элементы, сохраняя доступность."
                }
                rightHrefDemo={"https://daniel200347.github.io/demotivator/"}
                rightHrefPreview={"https://github.com/Daniel200347/demotivator"}
            />

            <CardsProjects
                leftTitle={"Graduation Work"}
                leftText={
                    "Мой дипломный проект. поработал с JavaScript JQuery, и немного познакомился с PHP."
                }
                leftHrefPreview={"https://github.com/Daniel200347/Diplom"}
                leftHrefDemo={"http://danielbi.beget.tech/"}
                rightTitle={"Crypto Rocket"}
                rightText={
                    "Один из первых моих проектов html css. С него я начал знакомство с веб разработкой."
                }
                rightHrefPreview={"https://github.com/Daniel200347/verstka"}
                rightHrefDemo={"https://daniel200347.github.io/verstka/"}
            />
            <CardsProjects

                leftTitle={"Infinity Cats"}
                leftText={
                    "Приложение которое покажет вам кучу разных котов ))0 В этом проекте я познакомился с async await и promises"
                }
                leftHrefPreview={"https://github.com/Daniel200347/kot-api"}
                leftHrefDemo={"https://daniel200347.github.io/kot-api/"}
                rightTitle={"Resume"}
                rightText={"В этом проекте я собрал все свои работы, проект написан с помощью React Typescript"}
                rightHrefDemo={"https://vk.com/services?w=app51602327_548334196"}
                rightHrefPreview={"https://github.com/Daniel200347/Resume"}
            />
        </div>
    );
}

export default Projects;
