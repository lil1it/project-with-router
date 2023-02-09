import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../component/UI/Button";

const MyOrders = () => {
  return (
    <Container>
      <TextStyle>
        <h2>Adding the GitHub Pages dependency package</h2>
        <p>
          Next, we`ll install the gh-pages package in our project. The package
          allows us to publish build files into a gh-pages branch on GitHub,
          where they can then be hosted.
        </p>
      </TextStyle>
      <Link to="/products">
        <Button>Back</Button>
      </Link>
    </Container>
  );
};

export default MyOrders;
const Container = styled.div`
  width: 50%;
  margin: 3rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
`;
const TextStyle = styled.div`
background-color:white;
width: 100%;
border-radius: 5px;
padding: 2rem 1rem 2rem 2rem;
margin-bottom: 3rem;
 `
