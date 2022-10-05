import styled from "styled-components";
import { Footer } from "./Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MovieSession = ({ weekday, date, showtimes, sessionId }) => {
    const navigate = useNavigate();

    return (
        <>
            <P>{weekday} - {date}</P>
            {showtimes.map(s => <Button
                key={s.id}
                onClick={() => navigate(`/sessao/${sessionId}`)}
                >
                {s.name}
            </Button>)}
        </>
    );
};

export const Sessions = () => {
    const [sessions, setSessions] = useState(undefined);
    const [error, setError] = useState(false);
    const [title, setTitle] = useState("");
    const { movieId } = useParams();

    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`;

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                console.log(res.data.days)
                setTitle(res.data.title)
                setSessions(res.data.days);
            })
            .catch(_err => {
                setError(true);
            })
    }, [URL]);

    if (!error && sessions === undefined) {
        return <div>Carregando...</div>;
    }

    return (
        <section>
            <Title>Selecione o horário</Title>
            <MovieContainer>
                {sessions.map(s => <MovieSession
                    key={s.id}
                    sessionId={s.id}
                    weekday={s.weekday}
                    date={s.date}
                    showtimes={s.showtimes}
                />)}
            </MovieContainer>
            <Footer title={title} />
        </section>
    );
};

const Title = styled.h2`    
    font-size: 24px;
    margin: 55px auto;
    text-align: center;
`;
const MovieContainer = styled.div`
    margin-left: 24px;
`;
const P = styled.p`
    font-size: 20px;
`;
const Button = styled.button`
    width: 83px;
    height: 43px;
    font-size: 18px;
    text-align: center;
    margin-top: 22px;
    margin-bottom: 36px;
    margin-right: 8px;
    color: #ffffff;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
`;