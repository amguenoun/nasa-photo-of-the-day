import React from "react"

const NasaChild = (props) => {
    return (
        <div>
            <h1 className="title">{props.title}</h1>
            <p className="date">{props.date}</p>
            <div className="flex">
                <img className="nasa-img" src={props.link} />
                <p className="desc">{props.explanation}</p>
            </div>

        </div>
    )
}


export default NasaChild;