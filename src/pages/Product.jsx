import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";


import ProductsList from "../component/ProductsList.jsx/ProductsList";
import Button from "../component/UI/Button";

const Product = ({products}) => {
  
  

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

