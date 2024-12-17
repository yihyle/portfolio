import React from "react";
import "../styles/home.css";
import Header from "../components/header";
import Main from "../components/main";
import Under from "./under";

function Home() {
    return(
        <>
            <Header/>
            <div id="home">
                <Main/>
            </div>
            <Under/>
        </>
    )
}

export default Home;