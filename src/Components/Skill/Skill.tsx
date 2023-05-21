import Title from "../UI/Title";
import { IconJavaScript } from "../UI/Icons/IconJavaScript";
import { IconTS } from "../UI/Icons/IconTS";
import { IconHTML } from "../UI/Icons/IconHTML";
import { IconCSS } from "../UI/Icons/IconCSS";
import { IconReact } from "../UI/Icons/IconReact";
import { IconGit } from "../UI/Icons/IconGit";
import { IconJQery } from "../UI/Icons/IconJQery";
import { IconWebPack } from "../UI/Icons/IconWebPack";
import { IconJest } from "../UI/Icons/IconJest";
import { IconAjax } from "../UI/Icons/IconAjax";
import { IconAngular } from "../UI/Icons/IconAngular";
import Typography from "../UI/Typography";

import { TypographyTypes } from "../UI/Typography/Typography";
import classes from "./Skill.module.css";
import MainContainer from "../MainContainer";

function Skill() {
  return (
    <div id={"Skills"} className={classes.container}>
      <MainContainer>
        <div className={classes.wrapper}>
          <Typography type={TypographyTypes.title}>
            <Title children={"skills"} sign={"( )"} />
          </Typography>
          <div className={classes.iconShell}>
            <span>
              <IconJavaScript />
            </span>
            <span>
              <IconTS />
            </span>
            <span>
              <IconHTML />
            </span>
            <span>
              <IconCSS />
            </span>
            <span>
              <IconReact />
            </span>
            <span>
              <IconGit />
            </span>
            <span>
              <IconJQery />
            </span>
            <span>
              <IconWebPack />
            </span>
            <span>
              <IconJest />
            </span>
            <span>
              <IconAjax />
            </span>
            <span>
              <IconAngular />
            </span>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Skill;
