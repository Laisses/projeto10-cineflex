import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Form = ({ seats, title, day, time }) => {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    const validateName = name => {
        if (name.length < 3) {
            alert("O nome deve ter pelo menos 3 letras");
            return false;
        }
        return true;
    };

    const validateCPF = cpf => {
        if (cpf.length !== 11) {
            alert("O CPF tem é composto por 11 números");
            return false;
        }
        return true;
    }

    const validateSeats = seats => {
        if (seats.length < 1) {
            alert("Você deve escolher pelo menos um assento");
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";

        if (validateName(name) && validateCPF(cpf) && validateSeats(seats)) {
            const order = {
                ids: seats.map(s => s.id),
                name,
                cpf,
            };
           
            setLoading(true);

            axios.post(URL, order)
                .then(res => {
                    navigate("/sucesso", {
                        state: {
                            seats: seats.map(s => s.name),
                            name: order.name,
                            cpf: order.cpf,
                            title,
                            day,
                            time,
                        }
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        }
    };

    if (loading) {
        return <p>Processando...</p>
    }

    return (
        <FormStructure onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome do comprador:</label>
            <input
                type="text"
                id="nome"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Digite seu nome..."
            />
            <label htmlFor="cpf">CPF do comprador:</label>
            <input
                type="text"
                id="cpf"
                required
                value={cpf}
                onChange={e => {
                    const cpf = e.target.value.replace(/[^0-9]/g, '');
                    setCpf(cpf)
                }}
                placeholder="Digite seu CPF..."
            />
            <Button>Reservar assento(s)</Button>
        </FormStructure>
    );
};

const Button = styled.button`
    align-self: center;
    width: 225px;
    height: 42px;
    font-size: 18px;
    text-align: center;
    margin-top: 57px;
    margin-right: 8px;
    color: #ffffff;
    background-color: #e8833a;
    border: none;
    border-radius: 3px;
`;

const FormStructure = styled.form`
    display: flex;
    flex-direction: column;
    label {        
        margin-left: 24px;
        font-size: 18px;
        color: #293845;
        margin-top: 12px;
    }
    input {        
        margin-left: 24px;
        width: 327px;
        height: 51px;
        border: 1px solid #d5d5d5;
        border-radius: 3px;
        font-size: 18px;
        padding-left: 18px;
        &::placeholder {
            font-style: italic;
            color: #afafaf;            
        }
    }
`;