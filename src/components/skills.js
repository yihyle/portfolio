import React from "react";
import "../styles/skills.css";
import Htmlimg from "../img/html.png";
import Cssimg from "../img/css.png";
import Jsimg from "../img/js.png";
import Reactimg from "../img/react.png";
import Javaimg from "../img/java.png";

function Skills() {
    return(
        <>
            <div className="background-skills">
                <div className="title-about">
                    <div className="title-container-about">
                        <h1>Skills</h1>
                        <div className="line-about" />
                    </div>
                </div>
                <div className="menu-skills">
                    <div className="skills-container-skills">
                        <div className="skills-skills">
                            <img src={Htmlimg}/>
                            <div className="bar-skills html"/>
                        </div>
                        <div className="skills-skills">
                            <img src={Cssimg}/>
                            <div className="bar-skills css"/>
                        </div>
                        <div className="skills-skills">
                            <img src={Jsimg}/>
                            <div className="bar-skills js"/>
                        </div>
                        <div className="skills-skills">
                            <img src={Reactimg}/>
                            <div className="bar-skills react"/>
                        </div>
                        <div className="skills-skills">
                            <img src={Javaimg}/>
                            <div className="bar-skills java"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;