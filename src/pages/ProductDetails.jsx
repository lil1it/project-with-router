import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../component/UI/Button";

const ProductDetails = ({ products }) => {
  const param = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const productFind = products.find((product) => product.id >= param.id);
    setPost(productFind);
  }, [products, param.id]);
  return (
    <Container>
      <List>
        <h1>{post.name}</h1>
        <h3> amount :{post.amount}</h3>
        <h2>$ {post.price}</h2>
      </List>
      <Link to="/products">
        <Button>Back</Button>
      </Link>
    </Container>
  );
};

export default ProductDetails;

const Container = styled.div`

  width: 50%;
  margin: 3rem;
  align-self: flex-start;
  display: flex;
  flex-direction: column;


`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 5px;
  background-color: white;
  padding:2rem;
  list-style: none;
  font-size: large;
  margin-bottom: 2rem;
`;
