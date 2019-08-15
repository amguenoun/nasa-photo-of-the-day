import React from "react";

const AsteroidChild = (props) => {

    return (
        <>
            <li>Asteroid {props.id} is going approximately {Math.round(props.speed)} km/s
            and will miss Earth by {Math.round(props.distance)} km at {props.time}</li>
        </>
    )
}
export default AsteroidChild;