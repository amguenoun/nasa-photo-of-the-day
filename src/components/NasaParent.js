import React, { useState, useEffect } from "react";
import axios from "axios"
import AsteroidParent from "./AsteroidParent"
import NasaCard from "./NasaCard";
import DatePicker from "./DatePicker";
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
            <DatePicker />
            <NasaCard title={nasaData.title} date={nasaData.date}
                explanation={nasaData.explanation} link={nasaData.url} />
            <AsteroidParent date={nasaData.date} />
        </div>
    )
}

export default NasaParent;