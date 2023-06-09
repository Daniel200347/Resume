import classes from "./Header.module.css";

import Link from "../UI/Link";
import {IconGitHub} from "../UI/Icons/IconGitHub";
import Button from "../UI/Button";
import {IconMail} from "../UI/Icons/IconMail";
import resume from "../../documents/ResumeSultanov.pdf";
import Typography from "../UI/Typography";
import {TypographyTypes} from "../UI/Typography/Typography";
import Logo from "../UI/Logo";

function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.wrapper}>
                <Logo className={classes.logo}/>
                <Typography type={TypographyTypes.btnMenu}>
                    <div className={classes.linkMenu}>
                        <Link
                            className={classes.link}
                            href={"#AboutMe"}>About</Link>
                        <Link
                            className={classes.link}
                            href={"#Skills"}>Skills</Link>
                        <Link
                            className={classes.link}
                            href={"#Projects"}>Projects</Link>
                    </div>
                </Typography>
                <div className={classes.buttonMenu}>
                    <Typography
                        type={TypographyTypes.btnMenu}
                        className={classes.buttonMenu}
                    >
                        <Link className={classes.link}
                              target={"_blank"} href={resume} download={"ResumeSultanov"}>
                            Resume
                        </Link>
                        <Link
                            className={classes.link}
                            target={"_blank"}
                            href={"https://github.com/Daniel200347"}
                            iconLeft={<IconGitHub/>}
                        >
                            Github
                        </Link>
                    </Typography>
                    <Typography type={TypographyTypes.btn}>
                        <Button className={classes.button}
                                target={"_blank"}
                                href={"https://t.me/genanna"}
                                iconLeft={<IconMail/>}>
                            Contact me
                        </Button>
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default Header;
