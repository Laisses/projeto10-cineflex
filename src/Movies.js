import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Movie } from "./Movie";

export const Movies = () => {
    const [movies, setMovies] = useState(undefined);
    const [error, setError] = useState(false);

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";

        axios.get(URL)
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => {
                setError(true);
            })
    }, []);

    if (!error && movies === undefined) {
        return <div>Carregando...</div>;
    }

    return (
        <section>
            <Title>Selecione o Filme</Title>
            <MovieList>
                {movies.map(m => <Movie
                    key={m.id}
                    id={m.id}
                    tilte={m.tilte}
                    image={m.posterURL}
                />)}
            </MovieList>
        </section>
    );
};

const Title = styled.h2`
    color: #293845;
    font-size: 24px;
    margin: 40px auto;
    text-align: center;
`;

const MovieList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
