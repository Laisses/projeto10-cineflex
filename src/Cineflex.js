import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header";
import { Movies } from "./Movies";
import { Session } from "./Session";
import { Seats } from "./Seats";
import { Order } from "./Order";

export const Cineflex = () => {
    return (
        <Container>
            <GlobalStyle />
            <Header />
            <Movies />
            <Session />
            <Seats />
            <Order />
        </Container>        
    );
}

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
`;