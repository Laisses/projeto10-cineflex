import styled from "styled-components";
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
    const [seatsMap, setSeatsMap] = useState(undefined);
    const [error, setError] = useState(false);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [time, setTime] = useState("");
    const [day, setDay] = useState("");
    const [selected, setSelected] = useState([]);

    const { sessionId } = useParams();

    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`;

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setSeatsMap(res.data.seats)
                setTitle(res.data.movie.title);
                setImage(res.data.movie.posterURL);
                setTime(res.data.name);
                setDay(res.data.day.weekday);

            })
            .catch(_err => {
                setError(true);
            })
    }, [URL]);

    if (!error && seatsMap === undefined) {
        return <div>Carregando...</div>;
    }

    const handleSeat = (seat) => {
        if (seat.isAvailable) {
            if (!selected.includes(seat.id)) {
                setSelected([...selected, seat.id]);
            } else {
                setSelected(selected.filter(s => s !== seat.id));
            }
        } else {
            alert("Esse assento não está disponível");
        }        
    };

    const chooseColor = (seat) => {
        if(!seat.isAvailable) {
            return SEAT_STATUS.unavailable;
        } else if (seat.isAvailable && !selected.includes(seat.id)) {
            return SEAT_STATUS.available;
        } else {
            return SEAT_STATUS.selected;
        }
    }
    
    return (
        <SeatsContainer>
            <Title>Selecione o(s) assento(s)</Title>
            <SeatsMap>
                {seatsMap.map(s =>
                    <Seat
                        key={s.id}
                        onClick={() => handleSeat(s)}
                        color={chooseColor(s)}>
                        <div>{s.name}</div>
                    </Seat>
                )}
            </SeatsMap>
            <SeatChart>
                <Div>
                    <SeatColor color={SEAT_STATUS.selected} />
                    <p>Selecionado</p>
                </Div>
                <Div>
                    <SeatColor color={SEAT_STATUS.available} />
                    <p>Disponível</p>
                </Div>
                <Div>
                    <SeatColor color={SEAT_STATUS.unavailable} />
                    <p>Indisponível</p>
                </Div>
            </SeatChart>
            <Form>
                <label htmlFor="nome">Nome do comprador:</label>
                <input type="text" id="nome" placeholder="Digite seu nome..." />
                <label htmlFor="cpf">CPF do comprador:</label>
                <input type="text" id="cpf" placeholder="Digite seu CPF..." />
                <Button>Reservar assento(s)</Button>
            </Form>            
            <Footer>
                <Movie>
                    <img src={image} alt={`Pôster do filme ${title}`} />
                </Movie>
                <MovieTitle>
                    <p>{title}</p>
                    <p>{`${day} - ${time}`}</p>
                </MovieTitle>
            </Footer>
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

const SeatsMap = styled.ul`
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
    background-color: ${({ color }) => color.backgroundColor};
    border: ${({ color }) => color.border};
    border-radius: 12px;
    div{
        text-align: center;
        font-size: 11px;
        color: #000000;
    }
`;

const SeatChart = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 40px;
`;

const Div = styled.div`
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

const Form = styled.div`
    display: flex;
    flex-direction: column;
    label {        
        margin-left: 24px;
        font-size: 18px;
        color: #293845;
        margin-top: 12px;
    }
    input {        
        margin-left: 24px;
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

const Footer = styled.footer`
    display: flex;
    align-items: center;
    width: 100%;
    height: 117px;
    background-color: #dfe6ed;
    border-top: 1px solid #9eadba;
   /*  position: fixed;
    bottom: 0;
    right: 0; */
    margin-top: 30px;
    margin-bottom: 500px;
`;

const Movie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 89px;
    margin-left: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    img {
        width: 48px;
        height: 72px;
    }
`;

const MovieTitle = styled.h3`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 14px;
    color: #293845;
    p {
        font-size: 26px;
        line-height: 30px;
    }
`;
