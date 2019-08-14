import React, { useState, useEffect } from "react";
import axios from "axios"

const NasaParent = () => {
    const [nasaData, setNasaData] = useState();
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY `)
            .then(response => {
                setNasaData(response);
            })
            .catch(error => {
                console.log("Error", error);
            })
    });
    return (
        <div>
            Hello
        </div>
    )
}

export default NasaParent;