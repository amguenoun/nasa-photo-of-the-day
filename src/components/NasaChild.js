import React from "react"

const NasaChild = (props) => {
    return (
        <div>
            <h2 className="title">{props.title}</h2>
            <p className="date">{props.date}</p>
            <div className="flex">
                <img className="nasa-img" src={props.link} alt="Nasa APOD" />
                <p className="desc">{props.explanation}</p>
            </div>
        </div>
    )
}


export default NasaChild;