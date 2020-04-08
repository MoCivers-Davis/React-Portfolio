import React from "react";
import "./style.css";

function Card(props) {
    return (
        <section className="card">
            <h5 className="card-title"><strong>{props.title}</strong></h5>
            <p className="card-text">{props.desc}</p>
        </section>
    );
}
export default Card;