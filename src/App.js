import React from "react";
import "./App.scss";

function App() {
    return (
        <div>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <img src={"/images/unicorn.svg"} className="logo image is-48x48"/>
                        <h1 className="title">
                            calc.sg
                        </h1>
                        <h2 className="subtitle">
                            insert subtitle here
                        </h2>
                    </div>
                </div>
            </section>
            {HomepageLayout()}
        </div>
    );
}

function HomepageLayout() {
    return (
        <div className="container">
            <div className="columns">
                <div className="column"/>
                {HomepageBox("home", "Housing")}
                {HomepageBox("grow", "Financial Independence")}
                <div className="column"/>
            </div>
            <div className="columns">
                <div className="column"/>
                {HomepageBox("family", "Family")}
                {HomepageBox("sunbed", "Luxury")}
                <div className="column"/>
            </div>
        </div>
    );
}

function HomepageBox(icon, label, link) {
    return (
        <div className="column">
            <a href={link}>
                <div className="content homepage-box">
                    <img src={`/images/${icon}.svg`} className="image" alt={label}/>
                    {label}
                </div>
            </a>
        </div>
    );
}

export default App;
