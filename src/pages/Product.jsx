import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductsList from "../component/products-list/ProductsList";
import Button from "../component/UI/Button";

const Product = () => {
  const products = [
    {
      title: "something - 1",
      id: new Date().toISOString(),
      amount: 50,
      price: 2500,
    },
    {
      title: "something - 2",
      id: new Date().toISOString(),
      amount: 16,
      price: 1250,
    },
    {
      title: "something - 3",
      id: new Date().toISOString(),
      amount: 6,
      price: 432,
    },
    {
      title: "something - 4",
      id: new Date().toISOString(),
      amount: 38,
      price: 4780,
    },
  ];

  return (
    <Container>
     <ProductsList products={products}/>
      <Link to="/mycart">
        <Button>Back</Button>
      </Link>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  width: 50%;
  padding: 2rem 1rem 2rem 1rem;
  margin: 3rem;
  align-self: center;
`;

