import React from "react";
import "../styles/main.css";
import Backgroundimg from "../img/bbackground.jpg";

function Main() {
    return (
        <>
            <div className="background-container-main">
                <img src={Backgroundimg} className="background-main" alt="background" />
                <div className="background-cover-main">
                    <div className="lhs-main">
                        <p className="up-main">Hi,</p>
                        <div className="background-pp-main">
                            <p className="up-main">I am</p>
                            <p className="yihyle">YIHYLE</p>
                        </div>
                        <p className="down-main typing-main">
                            <span className="text-main">Web Developer</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;