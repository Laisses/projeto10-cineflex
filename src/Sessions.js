import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieSession = ({ weekday, date, showtimes }) => {
    const navigate = useNavigate();
    
    return (
        <>
            <P>{weekday} - {date}</P>
            {showtimes.map(s => <Button
                key={s.id}
                onClick={() => navigate(`/sessao/${s.id}`)}
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
    const [image, setImage] = useState("");
    const { movieId } = useParams();
    const navigate = useNavigate();

    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`;

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setTitle(res.data.title);
                setImage(res.data.posterURL);
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
                    weekday={s.weekday}
                    date={s.date}
                    showtimes={s.showtimes}
                />)}
            </MovieContainer>
            <FooterContainer>
                <Movie>
                    <img src={image} alt={`Pôster do filme ${title}`}/>
                </Movie>
                <MovieTitle>
                    <p>{title}</p>                  
                </MovieTitle>
            </FooterContainer>
            <ButtonHome onClick={() => navigate("/")}>Voltar</ButtonHome>
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
    margin-bottom: 117px;
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

const FooterContainer = styled.footer`
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

const MovieTitle = styled.h3`
    margin-left: 14px;
    color: #293845;
    p {
        font-size: 26px;
    }
`;

const ButtonHome = styled.button`
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