/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import DescProduct from "../../components/descriptionProduct";
import { IPropsCards } from "../../interface/interface";

const ProductPage = () => {
  const { idProduct } = useParams();
  const [cards, setCards] = useState<IPropsCards[]>([]);

  const listTasks = () => {
    axios
      .get(`https://wine-back-test.herokuapp.com/products`)
      .then((response) => {
        setCards(response.data.items);
        console.log(cards);
      });
  };

  useEffect(() => {
    listTasks();
  }, []);

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
        {cards
          .filter(
            (row) =>
              row.id === (idProduct ? Number.parseInt(idProduct, 10) : null)
          )
          .map((card) => (
            <DescProduct
              id={card.id}
              price={card.price}
              discount={card.discount}
              image={card.image}
              name={card.name}
              flag={card.flag}
              region={card.region}
              country={card.country}
              avaliations={card.avaliations}
              rating={card.rating}
              size={card.size}
              type={card.type}
              key={card.id}
              sommelierComment={card.sommelierComment}
              classification={card.classification}
              priceMember={card.priceMember}
              priceNonMember={card.priceNonMember}
            ></DescProduct>
          ))}
      </Container>
    </>
  );
};

export default ProductPage;
