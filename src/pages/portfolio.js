import React from "react";
import Card from "../components/card/card";
import fitness from "./fitness.png";
import covid from "./covid.png";
import stats from "./stats.png";
import notes from "./notes.png";
import manager from "./manager.png";
import employeeDir from "./employeeDir.png";


function Portfolio() {
    return (
        <section className="container">
            <div className="row">
                <div className="col-4">
                    <Card title="Solo Project 1" desc="Employee Directory" />
                    <img src={employeeDir} id="my-pic" alt="Mo's pic" width="287" height="200" />
                    <p><a href="https://github.com/MoCivers-Davis/Employee-Directory">GitHub Repo Link</a></p>
                    <p><a href="https://mocivers-davis.github.io/Employee-Directory/">Deployed App Link</a></p>

                </div>
                <div className="col-4">
                    <Card title="Solo Project 2" desc="Fitness Tracker App" />
                    <img src={fitness} id="my-pic" alt="Mo's pic" width="287" height="200" />
                    <p><a href="https://peaceful-basin-13128.herokuapp.com/ ">Heroku Deployed Link</a></p>
                <p><a href="https://mocivers-davis.github.io/Workout-Tracker-App/">Deployed App Link</a></p>
                </div>
                <div className="col-4">
                    <Card title="Solo Project 3" desc="Employee Management System" />
                    <img src={manager} id="my-pic" alt="Mo's pic" width="287" height="200" />
                    <p><a href="https://github.com/MoCivers-Davis/Employee-Template-Engine">GitHub Repo Link</a></p>
                </div>

            </div>
            <br></br>
            <div className="row">

                <div className="col-4">
                    <Card title="Solo Project 4" desc="Notetaker App" />
                    <img src={notes} id="my-pic" alt="Mo's pic" width="287" height="200" />
                    <p><a href="https://github.com/MoCivers-Davis/Notetaker-App">GitHub Repo Link</a></p>
                    <p><a href="https://mocivers-davis.github.io/Notetaker-App/">Deployed App Link</a></p>
                </div>

                <div className="col-4">
                    <Card title="Group Project 1" desc="COVID-19 Tracker" />
                    <img src={covid} id="my-pic" alt="COVID19" width="287" height="200" />
                    <p><a href="https://github.com/MoCivers-Davis/Covid-19-Tracking-App">GitHub Repo Link</a></p>
                <p><a href="https://covid-19-tracking-app.herokuapp.com/">Heroku Deployed Link</a></p>
                </div>
                <div className="col-4">
                    <Card title="Group Project 2" desc="Stats On The Fly" />
                    <img src={stats} id="my-pic" alt="Mo's pic" width="287" height="200" />
                    <p><a href="https://github.com/MoCivers-Davis/Stats-On-The-Fly">GitHub Repo Link</a></p>
                    <p><a href=" https://mocivers-davis.github.io/Stats-On-The-Fly/">Deployed App Link</a></p>
                </div>
            </div>

        </section>
    )
}
export default Portfolio;