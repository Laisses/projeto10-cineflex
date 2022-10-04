import styled from "styled-components";

export const Header = () => {
    return (
        <Title>
             <h1>Cineflex</h1>   
        </Title>
    );
};

const Title = styled.div`
    width: 100%;
    height: 67px;
    background-color: #c3cfd9;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        color: #e8833a;
        font-size: 34px;
        text-transform: uppercase;
    }
`;