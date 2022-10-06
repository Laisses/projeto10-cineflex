import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import { Movies } from "./Movies";
import { Sessions } from "./Sessions";
import { Seats } from "./Seats";
import { Sucess } from "./Sucess";

export const Cineflex = () => {

    return (
        <Container>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/filme/:movieId" element={<Sessions />} />
                    <Route path="/sessao/:sessionId" element={<Seats />} />
                    <Route path="/sucesso" element={<Sucess />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #293845;
`;