import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
    text-align:center;
    background:#f0ead6;
    padding:1% 0%;
`;

const Footer = () => {
    return (
        <Foot className="foot">All information came from the Nasa API.</Foot>
    );
}

export default Footer;