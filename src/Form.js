import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export const Form = ({ seatsId }) => {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [order, setOrder] = useState(undefined);
    const [error, setError] = useState(false);
    console.log(order)

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

        if (validateName(name) && validateCPF(cpf) && validateSeats(seatsId)) {
            const newOrder = {
                ids: seatsId,
                name,
                cpf
            };

            setOrder(newOrder);

            axios.post(URL, newOrder)
                .then(res => {
                    console.log("deu bom")
                    console.log(res.data)
                })
                .catch(_err => {
                    console.log("deu ruim");
                })
        }
    };

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