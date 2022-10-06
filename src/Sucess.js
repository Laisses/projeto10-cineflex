import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';

export const Sucess = () => {
    
    const location = useLocation();
    const navigate = useNavigate();

    const order = {
        title: location.state.title,
        day: location.state.day,
        time: location.state.time,
        seats: location.state.seats,
        name: location.state.name,
        cpf: location.state.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
    }

    return (
        <OrderContainer>
            <SucessMessage>
                Pedido feito
                <br />
                com sucesso!
            </SucessMessage>
            <Info>
                <InfoTitle>Filme e sessão</InfoTitle>
                <Paragraph>{order.title}</Paragraph>
                <Paragraph>{order.day} {order.time}</Paragraph>
            </Info> 
            <Info>
                <InfoTitle>Ingressos</InfoTitle>
                {order.seats.map(s => <Paragraph key={s}>Assento {s}</Paragraph>)}
            </Info>
            <Info>
                <InfoTitle>Comprador</InfoTitle>
                <Paragraph>{order.name}</Paragraph>
                <Paragraph>{order.cpf}</Paragraph>
            </Info>
            <Button onClick={() => {
                navigate("/")
                window.location.reload();
            }}>Voltar pra Home</Button>
        </OrderContainer>
    );
};

const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 67px;
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
    line-height: 26px;
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