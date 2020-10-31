import React from "react";
import "./App.scss";

function App() {
    return (
        <div>
            <div className="section">
                <div className="columns">
                    <div className="column is-3">
                        <section className="hero header">
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
                    </div>
                    <div className="column">
                        {HomepageLayout()}
                    </div>
                </div>
            </div>
            <footer className="footer">insert footer stuff here</footer>
        </div>
    );
}

function HomepageLayout() {
    return (
        <div className="container">
            <div className="columns">
                {/*<div className="column is-hidden-mobile"/>*/}
                {HomepageTile("home", "Housing", "", "blue-one")}
                {HomepageTile("grow", "Financial Independence", "", "pink-two")}
                <div className="column is-hidden-mobile"/>
            </div>
            <div className="columns">
                {/*<div className="column is-hidden-mobile"/>*/}
                {HomepageTile("family", "Family", "", "yellow")}
                {HomepageTile("sunbed", "Luxury", "", "blue-two")}
                <div className="column is-hidden-mobile"/>
            </div>
        </div>
    );
}

function HomepageTile(icon, label, link, colour) {
    return (
        <div className="column">
            <a href={link}>
                <div className={`homepage-tile bg-${colour}`}>
                    <img src={`/images/${icon}.svg`} className="image" alt={label}/>
                    <p>{label}</p>
                </div>
            </a>
        </div>
    );
}

export default App;
