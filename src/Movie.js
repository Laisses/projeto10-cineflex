import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Movie = ({id, title, image}) => {
    
    const navigate = useNavigate();

    return (
        <Li>
            <img src={image} alt={`Pôster do filme ${title}`} onClick={() => navigate(`/filme/${id}`)}/>
        </Li>
    );
}

const Li = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 209px;
    margin: 10px 30px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    img {
        width: 129px;
        height: 193px;
    }
`;