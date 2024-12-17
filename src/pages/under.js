import React from "react";
import "../styles/under.css";
import About from "../components/about";
import Bgimg from "../img/bg.jpg";
import Skills from "../components/skills";

function Under() {
    return(
        <>
            <div className="background-under">
                <img src={Bgimg} />
                <div id="about">
                    <About/>
                </div>
                <Skills/>
            </div>
        </>
    )
}

export default Under;