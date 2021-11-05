// Write your Character component here

import React from 'react';
import styled from "styled-components";

const StyledH2 = styled.h2`
color: #443e3e;
text-shadow: 1px 1px 5px #fff;
`;



export default function Character({character}) {
    return (
        <StyledH2>{character.name}</StyledH2>
    )
}

