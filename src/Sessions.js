import styled from "styled-components";

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
        <SessionContainer>
            <Title>Selecione o horário</Title>
            <MovieSession />
            <MovieSession />       
            <div>Div esquisita com o filme dentro</div>
        </SessionContainer>
    );
};

const SessionContainer = styled.section`
    margin-left: 23px;
`;
const Title = styled.h2`    
    font-size: 24px;
    margin: 55px auto;
    text-align: center;
`;
const MovieContainer = styled.div`
    margin-bottom: 25px;
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