import React, { useState, useEffect } from "react";
import Axios from "axios";
import AsteroidChild from "./AsteroidChild";
import Loader from "./PageLoader";

const AsteroidParent = (props) => {
    const [list, setList] = useState([]);
    const date = props.date;
    useEffect(() => {
        Axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=DEMO_KEY`)
            .then(response => setList(response.data.near_earth_objects[date]))
            .catch(error => console.log("Error", error));
    }, [date])



    return (
        <div>
            {(!props.date) ? (<><h3>Loading...</h3> <Loader /></>) :
                (<div className="astList">
                    <h1>List of Near Miss Asteroids {date}</h1>
                    <ul>
                        {list.map(item => {
                            return <AsteroidChild key={item.id} id={item.id} distance={item.close_approach_data[0].miss_distance.kilometers}
                                speed={item.close_approach_data[0].relative_velocity.kilometers_per_second} time={item.close_approach_data[0].close_approach_date_full.split(" ")[1]} />
                        })}
                    </ul>
                </div>
                )
            }
        </div>
    )
}

export default AsteroidParent;