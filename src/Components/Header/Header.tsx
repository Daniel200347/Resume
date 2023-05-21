import classes from "./Header.module.css";
import classNames from "classnames";
import Link from "../UI/Link";
import {IconGitHub} from "../UI/Icons/IconGitHub";
import Button from "../UI/Button";
import {IconMail} from "../UI/Icons/IconMail";
import resume from "../../documents/ResumeSultanov.pdf";
import Typography from "../UI/Typography";
import {TypographyTypes} from "../UI/Typography/Typography";

function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.wrapper}>
                <Typography type={TypographyTypes.title}>
          <span className={classNames(classes.titleLeft, classes.title)}>
            PORT
            <span className={classNames(classes.titleRight, classes.title)}> FOLIO</span>
          </span>
                </Typography>
                <Typography type={TypographyTypes.btnMenu}>
                    <div className={classes.linkMenu}>
                        <Link href={"#AboutMe"}>About</Link>
                        <Link href={"#Skills"}>Skills</Link>
                        <Link href={"#Projects"}>Projects</Link>
                    </div>
                </Typography>
                <div className={classes.buttonMenu}>
                    <Typography
                        type={TypographyTypes.btnMenu}
                        className={classes.buttonMenu}
                    >
                        <Link target={"_blank"} href={resume} download={"ResumeSultanov"}>
                            Resume
                        </Link>
                        <Link
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
