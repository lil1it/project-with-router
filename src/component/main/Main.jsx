import React from "react";
import { Route, Routes } from "react-router";
import MyCart from "../../pages/MyCart";
import MyOrders from "../../pages/MyOrders";
import Product from "../../pages/Product";
import styled from "styled-components";
import ProductDetails from "../../pages/ProductDetails";

const Main = () => {
  return (
    <>
      <MainStyle>
        <Routes >
          <Route path="/products" element={<Product />} />

          <Route path="/mycart" element={<MyCart />} />

          <Route path="/myorders" element={<MyOrders />} />

          <Route path="/productDetails" element={<ProductDetails />} />

        </Routes>
      </MainStyle>
    </>
  );
};

export default Main;
const MainStyle = styled.main`
  background-color: #a19f9f;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding-left:23rem ;
  min-height: 45rem;
  box-sizing: border-box;
`;
