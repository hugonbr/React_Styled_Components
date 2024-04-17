import React from "react";
import styled from "styled-components";

function InputForm() {
    return <IpForm></IpForm>;
}

const IpForm = styled.input`
    border: solid 1px #619ee5;
    border-radius: 4px;
    &:focus {
        outline: none !important;
        border-color: #619ee5;
        box-shadow: 0 0 2px #619ee5;
    }
`;

export default InputForm;
