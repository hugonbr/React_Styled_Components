import React from "react";
import styled from "styled-components";

function BotaoOk() {
    return <Botao>Entrar</Botao>;
}

const Botao = styled.button`
    background-color: blue;
    border: solid 1px blue;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    color: white;
    &:hover {
        background-color: #00008b;
        border: solid 1px #00008b;
    }
`;

export default BotaoOk;
