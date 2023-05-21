import { PropsWithChildren } from "react";
import classes from "./MainContainer.module.css";
function MainContainer({ children }: PropsWithChildren) {
  return <div className={classes.wrapper}>{children}</div>;
}
export default MainContainer;
