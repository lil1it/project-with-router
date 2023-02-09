import React from "react";
import styled from "styled-components";


const Button = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;

const ButtonStyle = styled.button`
    background-color: #1c8e7b;
    border-radius: 18px;
    color: white;
    font-weight: bold;
    padding: 15px 15px;
    border: none;
    font-size: large;

`
