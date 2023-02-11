import React from "react";
import { Route, Routes } from "react-router";
import MyCart from "../../pages/MyCart";
import MyOrders from "../../pages/MyOrders";
import Product from "../../pages/Product";
import styled from "styled-components";
import ProductDetails from "../../pages/ProductDetails";

const Main = () => {
  const products = [
    {
      title: "something - 1",
      name: "PRODUCT-aaaa",
      id: 1,
      amount: "50",
      price: 2500,
    },
    {
      title: "something - 2",
      name: "PRODUCT-bbbbb",
      id: 2,
      amount: 16,
      price: 1250,
    },
    {
      title: "something - 3",
      name: "PRODUCT-cccc",
      id: 3,
      amount: 6,
      price: 432,
    },
    {
      title: "something - 4",
      name: "PRODUCT-ddddd",
      id: 4,
      amount: 27,
      price: 4780,
    },
  ];

  return (
    <>
      <MainStyle>
        <Routes>
        

          <Route path="/products/" index element={<Product products={products} />} />

          <Route
            path="products/:id/productDetails"
            element={<ProductDetails products={products} />}
          />

          <Route path="/mycart" element={<MyCart />} />

          <Route path="/myorders" element={<MyOrders />} />
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
  padding-left: 23rem;
  min-height: 45rem;
  box-sizing: border-box;
`;
