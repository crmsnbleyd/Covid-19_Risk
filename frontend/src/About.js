import React from "react";
import './About.css'
import Agastya from './img/agastya.jpg';
import Arnav from './img/arnav.jpg';
import Simran from './img/simran.jpg';

const About = () => (
  <div className="fade-in about">
    <h1 className="title is-1 text-center mt-4 text-info mb-4">The About Page</h1>
    <p className="container text-secondary">
    Scientists have been trying to develop a vaccine ever since covid-19 became a pandemic.
    But, now that it is here one of the biggest challenges is the logistics of distributing it in an effective manner.<br/>
    The solution we have come up with employs machine learning to make the best decision and also to eliminate natural human bias.
    We have also made this website which uses the trained model to act as the frontend for our project, conveying the information in a digestible form.
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