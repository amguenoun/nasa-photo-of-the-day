import React from "react"
import styled from "styled-components";

const CustomImage = styled.img`
    width:45%;
    max-width:100%;
    object-fit:contain;
`;

const NasaChild = (props) => {
    return (
        <div>
            <h2 className="title">{props.title}</h2>
            <p className="date">{props.date}</p>
            <div className="flex">
                <CustomImage className="nasa-img" src={props.link} alt="Nasa APOD" />
                <p className="desc">{props.explanation}</p>
            </div>
        </div>
    )
}


export default NasaChild;