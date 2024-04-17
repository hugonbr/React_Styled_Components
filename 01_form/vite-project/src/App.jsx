import { useState } from "react";
import "./App.css";
import BotaoOk from "./components/BotaoOk";
import InputForm from "./components/InputForm";

import styled from "styled-components";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Cont>
                <Pform>Formulário</Pform>
                <InputForm></InputForm>
                <InputForm></InputForm>
                <BotaoOk></BotaoOk>
            </Cont>
        </>
    );
}

const Pform = styled.p`
    color: blue;
`;
const Cont = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default App;
