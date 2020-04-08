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
                <div className="col-3">
                    <Card title="Solo Project 1" desc="Employee Directory" />
                    <img src={employeeDir} id="my-pic" alt="Mo's pic" width="200" height="200" />
                </div>
                <div className="col-3">
                    <Card title="Solo Project 2" desc="Fitness Tracker App" />
                    <img src={fitness} id="my-pic" alt="Mo's pic" width="200" height="200" />
                </div>
                <div className="col-3">
                    <Card title="Solo Project 3" desc="Employee Management System" />
                    <img src={manager} id="my-pic" alt="Mo's pic" width="200" height="200" />
                </div>
                <div className="col-3">
                    <Card title="Solo Project 4" desc="Notetaker App" />
                    <img src={notes} id="my-pic" alt="Mo's pic" width="200" height="200" />
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-3">
                    <Card title="Group Project 1" desc="COVID-19 Tracker" />
                    <img src={covid} id="my-pic" alt="COVID19" width="200" height="200" />
                </div>
                <div className="col-3">
                    <Card title="Group Project 2" desc="Fitness Tracker App" />
                    <img src={stats} id="my-pic" alt="Mo's pic" width="200" height="200" />
                </div>
            </div>

        </section>
    )
}
export default Portfolio;