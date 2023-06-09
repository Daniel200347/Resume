import classes from "./CardsProjects.module.css";
import Project from "../Project";

interface IProps {
    leftText?: string;
    leftTitle?: string;
    leftHrefDemo?: string;
    leftHrefPreview?: string;
    rightText?: string;
    rightTitle?: string;
    rightHrefDemo?: string;
    rightHrefPreview?: string;
}

function CardsProjects({
                           leftText,
                           leftTitle,
                           leftHrefDemo,
                           leftHrefPreview,
                           rightText,
                           rightTitle,
                           rightHrefDemo,
                           rightHrefPreview,
                       }: IProps) {
    const isShowBlockRight =
        !!rightHrefDemo && !!rightHrefPreview && !!rightTitle && !!rightText;

    const isShowBlockLeft =
        !!leftHrefDemo && !!leftHrefPreview && !!leftTitle && !!leftText;

    return (
        <div className={classes.container}>
            <div className={classes.leftSide}>
                {isShowBlockLeft && (
                    <Project
                        hrefDemo={leftHrefPreview}
                        hrefPreview={leftHrefDemo}
                        className={classes.card}
                        title={leftTitle}
                        text={leftText}
                    />
                )}
            </div>
            {isShowBlockRight && (
                <div className={classes.rightSide}>
                    <Project
                        hrefDemo={rightHrefPreview}
                        hrefPreview={rightHrefDemo}
                        className={classes.card}
                        title={rightTitle}
                        text={rightText}
                    />
                </div>
            )}
        </div>
    );
}

export default CardsProjects;
