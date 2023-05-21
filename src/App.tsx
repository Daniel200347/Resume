import React from "react";
import Projects from "./Components/Projects";
import Skill from "./Components/Skill";
import AboutMe from "./Components/AboutMe";
import Main from "./Components/Main";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import MobileHeader from "./Components/MobileHeader";

function App() {
    return (
        <>
            {/*<Header />*/}
            <MainContainer>
            <MobileHeader></MobileHeader>
            </MainContainer>
            <MainContainer>
                <Main
                    name={
                        <>
                            {"< Daniel"}
                            <br/> {" Sultanov />"}
                        </>
                    }
                />
                <AboutMe/>
            </MainContainer>
            <Skill/>
            <MainContainer>
                <Projects/>
            </MainContainer>
        </>
    );
}

export default App;
