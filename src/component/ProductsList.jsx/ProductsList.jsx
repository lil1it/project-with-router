import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map((el) => {
        return (
          <NavLink
            style={{ textDecoration: "none" }}
            key={el.id}
            to={`/products/${el.id}/productDetails`}
          >
            <List>
              <li>{el.title}</li>

              <Button>Details</Button>
            </List>
          </NavLink>
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

  margin-bottom: 2rem;
  li {
    list-style: none;
    font-size: large;
    color: black;
    font-weight: bold;
  }
`;
