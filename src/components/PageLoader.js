import React from "react";
import Loader from 'react-loader-spinner'

export default class App extends React.Component {
    //other logic
    render() {
        return (
            <Loader
                type="Rings"
                color="#000"
                height={500}
                width={500}
            />
        );
    }
}