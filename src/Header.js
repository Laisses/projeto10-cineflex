import styled from "styled-components";

export const Header = () => {
    return (
        <AppTitle>
             <h1>Cineflex</h1>   
        </AppTitle>
    );
};

const AppTitle = styled.div`
    width: 100%;
    height: 67px;
    background-color: #c3cfd9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    h1 {
        color: #e8833a;
        font-size: 34px;
        text-transform: uppercase;
    }
`;