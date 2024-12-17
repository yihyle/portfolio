import React from "react";
import "../styles/about.css";
import Psjimg from "../img/psj.jpeg";
import Nameimg from "../img/name.png";
import Birthimg from "../img/birth.png";
import Schoolimg from "../img/school.png";
import Mailimg from "../img/mail.png";

function About() {
    return (
        <>
            <div className="background-about">
                <div className="title-about">
                    <div className="title-container-about">
                        <h1>About</h1>
                        <div className="line-about" />
                    </div>
                </div>
                <div className="ex-about">
                    <div className="circle-about">
                        <img src={Psjimg} />
                    </div>
                    <div className="menu-about">
                        <div className="m-about">
                            <img src={Nameimg}/>
                            <p>Lee Hyeon-Seok</p>
                        </div>
                        <div className="m-about">
                            <img src={Birthimg}/>
                            <p>January 19th, 2008</p>
                        </div>
                        <div className="m-about">
                            <img src={Schoolimg}/>
                            <p>Gyeongbuk Software High School</p>
                        </div>
                        <div className="m-about">
                            <img src={Mailimg}/>
                            <p>son2wg@gamil.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;