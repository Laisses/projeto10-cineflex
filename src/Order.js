import styled from "styled-components";

export const Order = () => {
    return (
        <OrderContainer>
            <SucessMessage>
                Pedido feito
                <br />
                com sucesso!
            </SucessMessage>
            <Info>
                <InfoTitle>Filme e sessão</InfoTitle>
                <Paragraph>Enola Holmes</Paragraph>
                <Paragraph>24/06/2021 15:00</Paragraph>
            </Info>
            <Info>
                <InfoTitle>Ingressos</InfoTitle>
                <Paragraph>Assento 15</Paragraph>
                <Paragraph>Assento 16</Paragraph>
            </Info>
            <Info>
                <InfoTitle>Comprador</InfoTitle>
                <Paragraph>Nome: João da Silva Sauro</Paragraph>
                <Paragraph>CPF: 123.456.789-10</Paragraph>
            </Info>
            <Button>Voltar pra Home</Button>
        </OrderContainer>
    );
};

const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SucessMessage = styled.h2`
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: #247a6b;
    line-height: 28px;
    margin: 30px 0;
`;

const Info = styled.div`
    margin-left: 28px;
    margin-bottom: 30px;
`;

const InfoTitle = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: #293845;
    margin-bottom: 6px;
`;

const Paragraph = styled.p`
    font-size: 22px;
    color: #293845;
`;

const Button = styled.button`
    align-self: center;
    width: 225px;
    height: 42px;
    font-size: 18px;
    text-align: center;
    margin-top: 70px;
    margin-right: 8px;
    color: #ffffff;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
`;