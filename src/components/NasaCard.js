import React from 'react';
import { Card } from 'semantic-ui-react';
import NasaChild from "./NasaChild"

const NasaCard = (props) => {

    return (
        !props.title ? <></> :
            <Card>
                <NasaChild title={props.title} date={props.date}
                    explanation={props.explanation} link={props.link} />
            </Card>
    )


}

export default NasaCard;