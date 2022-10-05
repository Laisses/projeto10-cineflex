import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header";
import { Movies } from "./Movies";
import { Sessions } from "./Sessions";
import { Seats } from "./Seats";
import { Order } from "./Order";

export const Cineflex = () => {
    return (
        <Container>
            <GlobalStyle />
            <Header />
            {/* <Movies />
            <Sessions /> 
            <Seats /> */}
            <Order />
        </Container>
    );
}

const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #293845;
`;