import styled from "styled-components";

export const Footer = ({title}) => {
    return (
        <FooterContainer>
            <Movie>
                <div></div>                    
            </Movie>
            <MovieTitle>
                <p>{title}</p>
                {/*colcar um if aqui para aparecer ou não o horário do filme */ }
                <p>Horário escolhido</p>
            </MovieTitle>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    width: 100%;
    height: 117px;
    background-color: #dfe6ed;
    border-top: 1px solid #9eadba;
   /*  position: fixed;
    bottom: 0;
    right: 0; */
    margin-top: 30px;
    margin-bottom: 500px;
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
    div {
        width: 48px;
        height: 72px;
        background-color: gray;
    }
`;

const MovieTitle = styled.h3`
    margin-left: 14px;
    color: #293845;
    font-size: 26px;
`;