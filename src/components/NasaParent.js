import React, { useState, useEffect } from "react";
import axios from "axios"
import NasaChild from "./NasaChild";

const NasaParent = () => {
    const [nasaData, setNasaData] = useState({});
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY `)
            .then(response => {
                setNasaData(response.data);
            })
            .catch(error => {
                console.log("Error", error);
            })
    }, []);
    return (
        <div className="nasaParent">
            <h1>Nasa Astronomy Picture of the Day</h1>
            <NasaChild title={nasaData.title} date={nasaData.date}
                explanation={nasaData.explanation} link={nasaData.url} />
        </div>
    )
}

export default NasaParent;