import styled from "styled-components";
import { Footer } from "./Footer";

const MovieSession = () => {
    return (
        <MovieContainer>
            <P>Dia da semana - data</P>
            <Button>horário</Button>
            <Button>horário</Button>
        </MovieContainer>
    );
};

export const Sessions = () => {
    return (
        <section>
            <Title>Selecione o horário</Title>
            <MovieSession />
            <MovieSession />       
            <Footer />
        </section>
    );
};

const Title = styled.h2`    
    font-size: 24px;
    margin: 55px auto;
    text-align: center;
`;
const MovieContainer = styled.div`
    margin-bottom: 25px;
    margin-left: 24px;
`;
const P = styled.p`
    font-size: 20px;
`;
const Button = styled.button`
    width: 83px;
    height: 43px;
    font-size: 18px;
    margin-top: 22px;
    margin-right: 8px;
    color: #ffffff;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
`;