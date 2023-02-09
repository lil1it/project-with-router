import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map((el, index) => {
        return (
          <List key={index}>
            <li>{el.title}</li>
            <Link  to={`/details`}>
              <Button>Details</Button>
            </Link>
          </List>
        );
      })}
    </div>
  );
};

export default ProductsList;
const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  padding: 1rem;
  list-style: none;
  font-size: large;
  margin-bottom: 2rem;
`;
