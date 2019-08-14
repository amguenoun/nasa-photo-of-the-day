import React, { useState, useEffect } from "react";
import Axios from "axios";
import AsteroidChild from "./AsteroidChild";

const AsteroidParent = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        Axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-08-14&end_date=2019-08-14&api_key=DEMO_KEY')
            .then(response => setList(response.data.near_earth_objects["2019-08-14"]))
            .catch(error => console.log("Error", error));
    }, [])
    return (
        <div className="astList">
            <h1>List of Near Miss Asteroids Today</h1>
            <ul>
                {list.map(item => {
                    return <AsteroidChild key={item.id} id={item.id} distance={item.close_approach_data[0].miss_distance.kilometers}
                        speed={item.close_approach_data[0].relative_velocity.kilometers_per_second} />
                })}
            </ul>
        </div>
    )
}

export default AsteroidParent;