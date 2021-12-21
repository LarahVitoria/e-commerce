/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "../../components/navbar";
import { Container } from "@mui/material";
import CartContainer from "../../components/cartContainer";


const Cart = () => {


  return (
    <>
      <Navbar />
      <Container
        sx={{
          py: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "#e9e9e9",
        }}
        maxWidth="xl"
      >
        <CartContainer />
      </Container>
    </>
  );
};

export default Cart;
