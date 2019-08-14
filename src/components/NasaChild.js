import React from "react"

const NasaChild = (props) => {
    return (
        <div>
            <h1 className="title">{props.title}</h1>
            <p className="date">{props.date}</p>
            <img src={props.link} />
            <p className="desc">{props.explanation}</p>
        </div>
    )
}


export default NasaChild;