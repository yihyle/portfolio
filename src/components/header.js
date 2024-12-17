import React from "react";
import "../styles/header.css";
import Aboutimg from "../img/about.png";
import Contactimg from "../img/contact.png";
import Discordimg from "../img/discord.png";
import Githubimg from "../img/github.png";
import Homeimg from "../img/home.png";
import Instagramimg from "../img/instagram.png";
import Projectimg from "../img/project.png";
import Rightimg from "../img/right.png";
import Skillimg from "../img/skills.png";
import Underimg from "../img/under.png";

function Header() {

    const handleScroll = (vh) => {
        window.scrollTo({
            top: window.innerHeight * vh,
            behavior: 'smooth',
        });
    };
    
    

    return(
        <>
            <div className="header-container-header">
                <div className="box-container-header">
                    <div className="login-box-header">
                        <a href="https://www.instagram.com/yihyle/" target="_blank">
                            <img src={Instagramimg} className="instagram-header" />
                        </a>
                        <a href="https://www.discord.com/users/1315638256301379606" target="_blank">
                            <img src={Discordimg} className="discord-header" />
                        </a>
                        <a href="https://github.com/yihyle" target="_blank">
                            <img src={Githubimg} className="github-header" />
                        </a>
                    </div>
                    <div className="under-arrow-header">
                        <img src={Underimg} className="underimg"/>
                    </div>
                </div>
                <div className="menu-container-header">
                    <div className="menu-box-header" onClick={() => handleScroll(0)}>
                        <div className="circle-header">
                            <img src={Homeimg} />
                        </div>
                        <div className="title-header">
                            <p>HOME</p>
                        </div>
                        <img src={Rightimg} className="right-header" />
                    </div>
                    <div className="menu-box-header" onClick={() => handleScroll(1)}>
                        <div className="circle-header">
                            <img src={Aboutimg} className="about-header"/>
                        </div>
                        <div className="title-header">
                            <p>ABOUT</p>
                        </div>
                        <img src={Rightimg} className="right-header" />
                    </div>
                    <div className="menu-box-header" onClick={() => handleScroll(2)}>
                        <div className="circle-header">
                            <img src={Skillimg} className="skill-header" />
                        </div>
                        <div className="title-header">
                            <p>SKILLS</p>
                        </div>
                        <img src={Rightimg} className="right-header" />
                    </div>  
                    <div className="menu-box-header">
                        <div className="circle-header">
                            <img src={Projectimg} className="project-header" />
                        </div>
                        <div className="title-header">
                            <p>PROJECT</p>
                        </div>
                        <img src={Rightimg} className="right-header" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;