import styled from "styled-components";

export const Movies = () => {
    return (
        <section>
            <Title>Selecione o Filme</Title>
            <MovieList>
                <Movie>
                    <div></div>                    
                </Movie>
                <Movie>
                    <div></div>                    
                </Movie>
                <Movie>
                    <div></div>                    
                </Movie>
                <Movie>
                    <div></div>                    
                </Movie>
                <Movie>
                    <div></div>                    
                </Movie>
                <Movie>
                    <div></div>                    
                </Movie>               
            </MovieList>
        </section>
    );
};

const Title = styled.h2`
    color: #293845;
    font-size: 24px;
    margin: 55px auto;
    text-align: center;
`;

const MovieList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Movie = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 209px;
    margin: 10px 30px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    div {
        width: 129px;
        height: 193px;
        background-color: gray;
    }
`;