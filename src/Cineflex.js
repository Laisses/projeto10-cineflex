import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./Header";
import { Movies } from "./Movies";
import { Session } from "./Session";
import { Seats } from "./Seats";
import { Order } from "./Order";

export const Cineflex = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Movies />
            <Session />
            <Seats />
            <Order />
        </>        
    );
}