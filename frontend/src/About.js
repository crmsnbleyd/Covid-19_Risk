import React from "react";
import './About.css'
import Agastya from './img/Agastya.png';
import Arnav from './img/Arnav.png';
import Simran from './img/Simran.png';

const About = () => (
  <div className="fade-in about">
    <h1 className="title is-1 text-center mt-4 text-info mb-4">The About Page</h1>
    <p className="container text-secondary">
    You’ve heard about predatory loan sharks but what about a shark that helps you make sound financial decisions through the troubled waters of the stock market?<strong><p className="text-center text-info">Meet Sharky!</p></strong>
    At Shark Rank, we work with historical data about the stock prices of a publicly listed company. We implement a mix of machine learning algorithms to predict the future stock price of a company.<br/>
    <ul>
      <li>We analyze the company’s future profitability on the basis of its current business environment and financial performance by gathering information from Twitter Analytics.</li>
      <li>We also read the charts and use statistical figures to identify the trends in the stock market.</li>
    </ul>

    </p>
    <h3 className= "text-center mt-5">Meet the Team</h3>
    <div className="container mt-5">
        <div className="card about d-inline-block mx-1">
        <img src={Agastya} className="img shark mx-auto d-block" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center text-dark">Agastya</h5>
            <p className="card-text">Agastya is pursuing his Bachelors in Computer Science Engineering from Manipal Institute of Technology and has a passion for Machine Learning, Web Development, and Gaming.</p>
            <a href="https://www.linkedin.com/in/agastya-varma-51b9881a7/" target="_blank" rel="noreferrer" className="btn btn-outline-dark d-block mx-auto">Linkedin Profile</a>
        </div>
        </div>
        <div className="card about d-inline-block mx-1">
        <img src={Arnav} className="img shark mx-auto d-block" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center text-dark">Arnav</h5>
            <p className="card-text">Arnav is pursuing their Bachelors in Computer Science Engineering from Manipal Institute of Technology and has a passion for Machine Learning, Web Development, and Filmmaking.</p>
            <a href="https://www.linkedin.com/in/arnav-jose-0a3a501bb/" target="_blank" rel="noreferrer" className="btn btn-outline-dark d-block mx-auto">Linkedin Profile</a>
        </div>
        </div>
        <div className="card about d-inline-block mx-1">
        <img src={Simran} className="img shark mx-auto d-block" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-center text-dark">Simran</h5>
            <p className="card-text">Simran is pursuing her Bachelors in Electrical and Electronics Engineering from Manipal Institute of Technology and has a passion for Machine Learning, Web Development, and Dancing.</p>
            <a href="https://www.linkedin.com/in/simran-98b4561a8/" target="_blank" rel="noreferrer" className="btn btn-outline-dark d-block mx-auto">Linkedin Profile</a>
        </div>
        </div>
        
    </div>
  </div>
);

export default About;