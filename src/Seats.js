import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "./Form";

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
    const [weekday, setWeekday] = useState("");
    const [selected, setSelected] = useState([]);

    const { sessionId } = useParams();
    const navigate = useNavigate();

    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`;

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setSeatsMap(res.data.seats);
                setTitle(res.data.movie.title);
                setImage(res.data.movie.posterURL);
                setTime(res.data.name);
                setDay(res.data.day.date);
                setWeekday(res.data.day.weekday);
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
            if (!selected.includes(seat)) {
                setSelected([...selected, seat]);
            } else {
                setSelected(selected.filter(s => s !== seat));
            }
        } else {
            alert("Esse assento não está disponível");
        }
    };

    const chooseColor = (seat) => {
        if (!seat.isAvailable) {
            return SEAT_STATUS.unavailable;
        } else if (seat.isAvailable && !selected.includes(seat)) {
            return SEAT_STATUS.available;
        } else {
            return SEAT_STATUS.selected;
        }
    };

    return (
        <SeatsContainer>
            <Title>Selecione o(s) assento(s)</Title>
            <SeatsMap>
                {seatsMap.map(s =>
                    <Seat
                        data-identifier="seat"
                        key={s.id}
                        onClick={() => handleSeat(s)}
                        color={chooseColor(s)}>
                        <div>{s.name}</div>
                    </Seat>
                )}
            </SeatsMap>
            <SeatChart>
                <Div>
                    <SeatColor data-identifier="seat-selected-subtitle" color={SEAT_STATUS.selected} />
                    <p>Selecionado</p>
                </Div>
                <Div>
                    <SeatColor data-identifier="seat-available-subtitle" color={SEAT_STATUS.available} />
                    <p>Disponível</p>
                </Div>
                <Div>
                    <SeatColor data-identifier="seat-unavailable-subtitle" color={SEAT_STATUS.unavailable} />
                    <p>Indisponível</p>
                </Div>
            </SeatChart>
            <Form
                seats={selected}
                title={title}
                day={day}
                time={time}
            />
            <Footer>
                <Movie>
                    <img src={image} alt={`Pôster do filme ${title}`} />
                </Movie>
                <MovieTitle>
                    <p data-identifier="movie-and-session-infos-preview">{title}</p>
                    <p data-identifier="movie-and-session-infos-preview">{`${weekday} - ${time}`}</p>
                </MovieTitle>
            </Footer>
            <ButtonBack onClick={() => navigate(-1)}>Voltar</ButtonBack>
        </SeatsContainer>
    );
};

const SeatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 67px;
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

const Footer = styled.footer`
    display: flex;
    align-items: center;
    width: 100%;
    height: 117px;
    background-color: #dfe6ed;
    border-top: 1px solid #9eadba;
    position: fixed;
    bottom: 0;
    right: 0;
    margin-top: 30px;
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

const MovieTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 14px;
    color: #293845;
    p {
        font-size: 26px;
        line-height: 30px;
    }
`;

const ButtonBack = styled.button`
    width: 83px;
    height: 43px;
    font-size: 18px;
    text-align: center;
    color: #ffffff;
    background-color: #393A73;
    border: none;
    border-radius: 3px;
    position: absolute;
    margin-top: 10px;
    margin-left: 10px;
    left: 0;
    top: 0;
`;
