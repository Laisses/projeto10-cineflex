import styled from "styled-components";
import { Footer } from "./Footer";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SEAT_STATUS = {
    available: {
        backgroundColor: "#C3CFD9",
        border: "1px solid #7B8B99",
    },
    unavailable: {
        backgroundColor: "#FBE192",
        border: "1px solid #F7C52B",
    },
    selected: {
        backgroundColor: "#1AAE9E",
        border: "1px solid #0E7D71",
    },
};

export const Seats = () => {
    const [seats, setSeats] = useState(undefined);
    const [error, setError] = useState(false);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [time, setTime] = useState("");
    const [day, setDay] = useState("");
    
    const { sessionId } = useParams();

    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`;

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                console.log(res.data)
            })
    }, [URL]);

    if (!error && seats === undefined) {
        return <div>Carregando...</div>;
    }

    return (
        <SeatsContainer>
            <Title>Selecione o(s) assento(s)</Title>
            <SeatsChartContainer>
                {seats.map(seat => <Seat key={seat} color={SEAT_STATUS}><div>{seat}</div></Seat>)}
            </SeatsChartContainer>
            <SeatContainer>
                <Availability>
                    <SeatColor color={SEAT_STATUS.selected} />
                    <p>Selecionado</p>
                </Availability>
                <Availability>
                    <SeatColor color={SEAT_STATUS.unavailable} />
                    <p>Disponível</p>
                </Availability>
                <Availability>
                    <SeatColor color={SEAT_STATUS.available} />
                    <p>Indisponível</p>
                </Availability>
            </SeatContainer>
            <FormContainer>
                <label htmlFor="nome">Nome do comprador:</label>
                <input type="text" id="nome" placeholder="Digite seu nome..." />
                <label htmlFor="cpf">CPF do comprador:</label>
                <input type="text" id="cpf" placeholder="Digite seu CPF..." />
            </FormContainer>
            <Button>Reservar assento(s)</Button>
            <Footer />
        </SeatsContainer>
    );
};

const SeatsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    color: #293845;
    font-size: 24px;
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: center;
`;

const SeatsChartContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0 24px;    
`;

const Seat = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27px;
    height: 27px;
    margin: 10px 4px;    
    background-color: ${({ color }) => color.available.backgroundColor};
    border: ${({ color }) => color.available.border};
    border-radius: 12px;
    cursor: pointer;
    div{
        text-align: center;
        font-size: 11px;
        color: #000000;
    }
`;

const SeatContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 40px;
`;

const Availability = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SeatColor = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${({ color }) => color.backgroundColor};
    border: ${({ color }) => color.border};
    border-radius: 17px;
`;

const Button = styled.button`
    align-self: center;
    width: 225px;
    height: 42px;
    font-size: 18px;
    text-align: center;
    margin-top: 57px;
    margin-right: 8px;
    color: #ffffff;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    label {
        font-size: 18px;
        color: #293845;
        margin-top: 12px;
    }
    input {
        width: 327px;
        height: 51px;
        border: 1px solid #d5d5d5;
        border-radius: 3px;
        font-size: 18px;
        padding-left: 18px;
        &::placeholder {
            font-style: italic;
            color: #afafaf;            
        }
    }
`;



