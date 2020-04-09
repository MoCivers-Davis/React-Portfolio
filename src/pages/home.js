import React from "react";
import photo from "./profile.jpg";
import resume from './resume.pdf';
import "./home.css";


function Home() {
    return (
        <section className="container">
            <div className="row">
                <div className="col-5">
                    <h3>About Me</h3>
                    <img src={photo} id="my-pic" alt="Mo's pic" width="300" height="280" />
                </div>

                <div className="col-6">
                    <p>I am Mo Civers-Davis. I'm originally from Georgia but I have lived in
                    Philadelphia for almost 18 years. I am a military veteran of the United States Air Force.
                    I currently work as a civilian for the United States Department of the Navy. As a U.S.
                    Navy Program Manager I oversee multiple naval programs that range from STEM, cyber
                            and data science.</p>
                    <p>I am new to software development. Prior to this coding program I had no experience in
                    coding. Althougth no coding experience, I have always been interested in learning but
                    was to afraid to try. Since becoming a Dad, I have been more inspired to follow my dream
                            of becoming a coder.</p>

                    <p>Ultimately, I would like to become a data scientist with a focus on machine learning.
                    In order to do this successfully, I will need to have a working knowlede of higher order
                            langauges such as JavaScript and Python just to name a few.</p>

                    <p>This is a little about me. I thank you for taking the time to visit my site and for
                            reviewing some of my most recent projects</p>

                </div>

            </div>

            <div className="row">
                <div className="col-12">
                    <h5>Links</h5>
                    <p><a href="https://www.linkedin.com/in/r-maurice-civers-davis-11978777/">Connect via
                                    Linkedin</a></p>
                    <p><a href="https://github.com/MoCivers-Davis">Mo's GitHub Profile</a></p>
                    {/* <iframe src={"resume.pdf"} title="mo resume"/> */}
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="text-blue">Link to resume</a>
                    <h6 class="phoneNumber">Phone Number: 484-367-5720</h6>
                </div>

            </div>

        </section>
    )
}
export default Home;