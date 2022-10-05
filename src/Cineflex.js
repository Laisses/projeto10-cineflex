/* import { useState } from "react"; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import { Movies } from "./Movies";
import { Sessions } from "./Sessions";
import { Seats } from "./Seats";
import { Order } from "./Order";

export const Cineflex = () => {

    return (
        <Container>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/filme/37" element={<Sessions />} />
                    <Route path="/sessao/240" element={<Seats />} />
                    <Route path="/sucesso" element={<Order />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #293845;
`;