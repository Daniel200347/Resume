import classes from "./MobileHeader.module.css";
import resume from "../../documents/ResumeSultanov.pdf";
import {TypographyTypes} from "../UI/Typography/Typography";
import {useState} from "react";


import Link from "../UI/Link";
import {IconGitHub} from "../UI/Icons/IconGitHub";
import Button from "../UI/Button";
import {IconMail} from "../UI/Icons/IconMail";
import Typography from "../UI/Typography";
import MainContainer from "../MainContainer";
import classNames from "classnames";
import Logo from "../UI/Logo";


function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>


            <div className={classes.burgerWrapper}>
                <MainContainer>
                    <div className={classes.headerWrapper}>
                        <Logo className={classes.logo}/>

                        <div className={classes.burgerMenu} onClick={handleClick}>
                            <div className={classes.top}></div>
                            <div className={classes.middle}></div>
                            <div className={classes.bottom}></div>
                        </div>
                    </div>
                </MainContainer>
            </div>

            {isOpen && (
                <div className={classes.burgerActive} onClick={(event: any) => {
                    if (event.target.target !== "_blank") {
                        handleClick()
                    }
                }
                }>


                    <div className={classNames(classes.burgerMenu, classes.burgerModal)} onClick={handleClick}>
                        <div className={classes.top}></div>
                        <div className={classes.middle}></div>
                        <div className={classes.bottom}></div>
                    </div>


                    <Typography type={TypographyTypes.btnMenu}>
                        <div className={classes.wrapper}>

                            <Link
                                className={classes.item}
                                href={"#AboutMe"}>About</Link>
                            <Link
                                className={classes.item}
                                href={"#Skills"}>Skills</Link>
                            <Link
                                className={classes.item}
                                href={"#Projects"}>Projects</Link>


                            <Link
                                className={classes.item}
                                target={"_blank"} href={resume} download={"ResumeSultanov"}>
                                Resume
                            </Link>
                            <Link
                                className={classes.item}
                                target={"_blank"}
                                href={"https://github.com/Daniel200347"}
                                iconLeft={<IconGitHub/>}
                            >
                                Github
                            </Link>
                            <Button
                                className={classes.button}
                                target={"_blank"}
                                href={"https://t.me/genanna"}
                                iconLeft={<IconMail/>}>
                                Contact
                            </Button>
                        </div>
                    </Typography>

                </div>
            )}

        </>
    );
}

export default MobileHeader;
