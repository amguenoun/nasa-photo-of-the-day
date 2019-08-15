import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import styled from "styled-components";

const CustomImage = styled.img`
    width:750px;
    max-width:100%;
    object-fit:contain;
`;
const NasaCard = (props) => (
    <Card>
        <CustomImage src={props.link} />
        <Card.Content>
            <Card.Header>{props.title}</Card.Header>
            <Card.Meta>
                <span className='date'>{props.date}</span>
            </Card.Meta>
            <Card.Description>
                {props.explanation}
            </Card.Description>
        </Card.Content>
    </Card>
)

export default NasaCard;