import React from "react";

export default function Card(props) {
    return (
        <div >
            <div className="data-cards">
                <h1 >{props.name}</h1>
                <h6>{props.date}</h6>
                <h3>{props.description}</h3>
            </div>
            <div>
                <img src={props.url} className="images"></img>
            </div>
            
        </div>
    )
}

