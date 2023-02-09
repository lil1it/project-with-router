import React from "react";
import { Router, useParams } from "react-router";
import styled from "styled-components";

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

const ProductDetails = () => {
  const params = useParams();

  const product = products.find((product) => product.id === params.productId);
  return(<Container>
<p>{product.title}</p>
<Router path={`/details/${params.productId}`}/>
  </Container>) 
};

export default ProductDetails;

const Container = styled.div`
  width: 50%;
  margin: 3rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
`;
